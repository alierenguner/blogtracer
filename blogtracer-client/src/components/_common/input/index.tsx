import React from 'react';

interface IProps {
    title?: string,
    input?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    label?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
}

const Input = (props: IProps) => {
    const useValue = React.useState<string>('');  
    const value: string = props.input?.value as string || useValue[0];
    const setValue = props.input?.onChange || useValue[1];

    const inputRef = React.createRef<HTMLInputElement>();

    const handleLabelClick = () => {
        inputRef.current?.focus();
    }

    
    return (    
        <div className={"app-input" + (value.length?' filled':'')} >
            <label onClick={handleLabelClick} {...props.label}>{props.title}</label>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value as any)} ref={inputRef} {...props.input}/>
        </div>
    )
}

export default Input;