# ComposeIO

A compose-io é uma biblioteca que propõe uma forma diferente de se criar componentes em React.

## Instalação

- Certifique-se de que o React esteja instalado no seu projeto!
- Para instalar esta biblioteca você deve executar o seguinte comando:

```sh
yarn add react-compose-io
```

## Princípios

O principal objetivo desse pacote é deixar explícitas e separadas as partes visuais e lógicas de um componente.
Sendo assim, um componente é composto por uma **View** e por sua lógica que, por convenção, é chamada de **IO**.
Com isso, fica mais fácil de entender como que uma tela funciona e o que o componente realmente faz durante a sua execução.
Adotando uma estratégia mais declarativa e orientada ao paradigma funcional, o componente passa representar **o que** uma feature ou funcionalidade faz e não **como** ele faz isso.

Ao criar um componente você precisa pensar nos seguintes princípios:

- Uma view não possui nenhuma lógica que não seja de renderização
- Uma view se assemelha a uma função pura, ou seja, ela só recebe argumentos e retorna um resultado.
- Todos os estados, as chamadas de api, as funções que mudam o estado global e os handlers de eventos devem ficar no IO

## Exemplo

A estrutura de arquivos de um componente possui os seguintes aquivos:

- Componente.view.tsx
- Componente.io.ts
- index.ts

A construção de um componente de um botão seria da seguinte forma:

```tsx
// button/Button.view.tsx
import React from "react";
import { IOProps } from "react-compose-io";
import { ButtonIO } from "./Button.io";

export type ButtonProps = {
  text: string;
  onClick: () => void;
};

function ButtonView({ text, _io }: IOProps<ButtonIO, ButtonProps>) {
  return (
    <div>
      <button onClick={_io.onClick}>{text}</button>
    </div>
  );
}

// button/Button.io.ts
import { useEffect, useState, MouseEvent } from "react";
import { ButtonProps } from "./Button.view";

export function buttonIO({ onClick }: ButtonProps) {
  const [color, setColor] = useState("blue");

  useEffect(() => {
    console.log("Color changed!");
  }, [color]);

  return {
    color,
    onClick: (e: MouseEvent) => {
      e.preventDefault();
      setColor("green");
      onClick();
    },
  };
}

export type ButtonIO = ReturnType<typeof buttonIO>;

// button/index.ts
import { composeIO } from "react-compose-io";
import { ButtonView } from "./Button.view";
import { buttonIO } from "./Button.io";

const Button = composeIO(ButtonView, buttonIO);

export default Button;
```

O composeIO introduz uma nova forma de lidar com as props de um componente.
Na View, são definidas as props **externas**, ou seja, aquelas que o componente irá receber quando for utilizado em outras partes da aplicação.
No arquivo `Button.view.tsx` essas props são as `ButtonProps`. Além das props externas, a View recebe uma prop especial chamada **\_io**.

Esta prop é chamada de prop **interna** por ser o objeto retornado pelo IO que não é visível para os outros componentes. Sendo assim, tudo que é retornado pela função `buttonIO` que está definida no arquivo `Button.io.ts` estará disponível na view através da prop **\_io**.

Na definição da View, é utilizado um utilitário para facilitar a _tipagem_ do componente: o **IOProps**.

```tsx
function ButtonView({ text, _io }: IOProps<ButtonIO, ButtonProps>) { ... }
```

O IOProps recebe como argumentos o tipo de retorno do IO, que no caso está sendo exportado como `ButtonIO` no arquivo `Button.io.ts`, as props da View que no caso são as `ButtonProps`. Esse utilitário irá realizar a tipagem correta da prop interna **\_io** em conjunto com as props da View.

Na definição do IO, pode-se notar que são recebidos como argumento as props externas.

```tsx
export function buttonIO({ onClick }: ButtonProps) { ... }
```

Sendo assim, é possível manipular tanto as props externas quanto internas dentro do IO. É recomendado que o IO gerencie qualquer efeito colateral ou manipulação de dados e a que a View fique focada somente em chamar as funções e utilizar os valores das props.

## O que não fazer

O composeIO defende fortemente a separação de atribuições e responsabilidades para que o código fique declarativo e de fácil entendimento.

### Não utilize hooks dentro de uma View

Dê preferência para o IO quando for utilizar qualquer hook e repasse para a View apenas os valores necessários.

```tsx
// Errado

function View({ count }: IOProps<Props, IO>) {
  const dispatch = useDispatch();

  // Não utilize esse useEffect aqui
  useEffect(() => {
    dispatch(algumaAction());
  }, [count]);

  return (
    <div>
      <span>{count}</span>
    </div>
  );
}
```

```tsx
// Correto

// ???.view.tsx
function View({ count }: IOProps<Props, IO>) {
  return (
    <div>
      <span>{count}</span>
    </div>
  );
}

// ???.io.ts
function IO({ count }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(algumaAction());
  }, [count]);

  return {};
}
```

### Delegue a lógica de chamada das funções para o IO

```tsx
// Errado

// ???.view.tsx
function View({ onChange, onClick, _io }: IOProps<Props, IO>) {
  return (
    <div>
      <input
        name="input-incorreto"
        onChange={(e) => {
          onChange(e);
          _io.onChange(e);
        }}
      />
      <button
        onClick={() => {
          onClick();
          _io.onClick();
        }}
      >
        Clique-me
      </button>
    </div>
  );
}
```

```tsx
// Correto

// ???.view.tsx
function View({ onChange, onClick, _io }: IOProps<Props, IO>) {
  return (
    <div>
      <input name="input-incorreto" onChange={_io.onChange} />
      <button onClick={_io.onClick}>Clique-me</button>
    </div>
  );
}

// ???.io.ts
function IO({ onClick, onChange }: Props) {
  return {
    onClick: () => {
      onClick();
      // Aqui agora você pode fazer a lógica que quiser
    },
    onChange: () => {
      onChange();
      // Aqui agora você pode fazer a lógica que quiser
    },
  };
}
```
