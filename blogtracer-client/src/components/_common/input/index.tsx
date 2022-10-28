import React from 'react';

interface IProps {
    title?: string,
    input?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    label?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
}

const Input = (props: IProps) => {
    const [isActive, setIsActive] = React.useState<boolean>(false);
    const useValue = React.useState<string>('');  
    const value: string = props.input?.value as string || useValue[0];
    const setValue = props.input?.onChange || useValue[1];

    const inputRef = React.createRef<HTMLInputElement>();

    const handleInputClick = () => {
        inputRef.current?.focus();
    }

    const changeIsActive = () => {
        if (value.length | (document.activeElement === inputRef.current) as any) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    React.useEffect(changeIsActive, [value])

    return (    
        <div className={"app-input" + (isActive?' active':'')} onClick={handleInputClick} >
            <label {...props.label}>{props.title}</label>
            <input onFocus={changeIsActive} onBlur={changeIsActive} value={value} onChange={(e) => setValue(e.currentTarget.value as any)} ref={inputRef} {...props.input}/>
        </div>
    )
}

export default Input;