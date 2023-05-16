import React, {FunctionComponent} from 'react';
import "./Button.scss";

type ButtonProps = {
    type: 'primary' | 'secondary';
    children: React.ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({type, children}) => {
    return (<button className={type}>{children}</button>)
}

export default Button;