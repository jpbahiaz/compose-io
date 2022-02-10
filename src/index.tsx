import * as React from "react";

export function composeIO<IOProps = any, Props = any>(
  Component: React.FC<Props>,
  IO: (props: Omit<Props, "_io">) => IOProps,
) {
  return function composed(props: Omit<Props, "_io">) {
    const io = IO(props);
    const View = Component as React.FC<any>;

    // return <View _io={io} {...props} />;

    return React.createElement(View, { _io: io, ...props }, null)
  };
}

export type IOProps<IO, Props> = { _io: IO } & Props;
