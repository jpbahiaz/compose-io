import React, { useEffect } from 'react'
import { ButtonContainer } from './Button.io'

type Props = {
    // Externas
    text: string;
    label: string;
    onClick: () => void;

    // Internas
    count: number;
    onButtonClick: () => void;
    parseText: (text: string) => void;
    parsedText: string;
}

export function ButtonView({
    text,
    label,
    onClick,
    
    count,
    onButtonClick,
    parsedText,
    parseText 
}: Props) {

    useEffect(() => { parseText(text) }, [text])

    return (
        <ButtonContainer>
            <label>{label} - {count}</label>
            <button onClick={() => { 
                onClick()
                onButtonClick()
            }}>{parsedText}</button>
        </ButtonContainer>
    )
}
