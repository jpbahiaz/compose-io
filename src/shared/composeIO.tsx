import * as React from "react"

export function composeIO<Props = any, IOProps = any>(
  Component: React.FC<Props>,
  IO: () => IOProps,
) {
  return function composed(props: Omit<Props, keyof IOProps>) {
    const io: any = IO();

    return <Component {...props} {...io} />;
  };
}
