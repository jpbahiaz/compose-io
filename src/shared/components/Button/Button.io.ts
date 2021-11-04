import { useState } from "react";
import styled from "styled-components";
import { increment } from "../../../redux/modules/user/slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

export const ButtonContainer = styled.div`

`


export function buttonIO() {
    const count = useAppSelector(state => state.users.count)
    const [parsedText, setParsedText] = useState("")
    const dispatch = useAppDispatch()

    return {
        count,
        parsedText,
        onButtonClick: () => {
            dispatch(increment())
        },
        parseText: setParsedText
    }
}

export function buttonDecrementIO() {
    const [count, setCount] = useState(0)
    const [parsedText, setParsedText] = useState("")

    return {
        count,
        parsedText,
        onButtonClick: () => {
            setCount(prev => prev - 1)
        },
        parseText: (text: string) => {
            setParsedText(text.replace(/\d/g, ""))
        }
    }
}
