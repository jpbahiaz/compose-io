import React from "react";
import { Button, ButtonDecrement } from "../../shared/components/Button";
import {
  HomeContainer,
} from "./HomeStyles";

export function Home() {
  
  return (
    <HomeContainer>
      <Button
        text="Clique para incrementar: 412 : 45"
        label="contador"
        onClick={() => console.log("Clique no botão!")}
      />
      <ButtonDecrement
        text="Clique para decrementar 412 : 45"
        label="contador"
        onClick={() => console.log("Clique no botão de decrementar!")}
      />
    </HomeContainer>
  );
}
