import { composeIO } from "../../composeIO";
import { buttonDecrementIO, buttonIO } from "./Button.io";
import { ButtonView } from "./Button.view";



export const Button = composeIO(ButtonView, buttonIO);

export const ButtonDecrement = composeIO(ButtonView, buttonDecrementIO);