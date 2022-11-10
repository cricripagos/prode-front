import React, { ButtonHTMLAttributes, FC } from 'react'
import { ButtonStyled } from './styles';

export enum Variant {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
    quaternary = 'quaternary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** accepts any type of element as a child */
    children?: React.ReactNode;
    /** button color */
    variant?: Variant;
    /** button with border, defaults to true */
    withtBorder?: boolean;
    /** disable the button, defaults to false */
    disabled?: boolean;
    /** font size, defaults to 16px */
    fontSize?: string;
    /** takes the width of the containing block, defaults to false */
    block?: boolean;
    /** onClick function */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** classNames to Button component */
    className?: string;
}

const Button: FC<ButtonProps> = ({
    children,
    variant = Variant.primary,
    withtBorder = true,
    disabled = false,
    fontSize = '16px',
    block = false,
    onClick,
    className,
    ...restProps
}): JSX.Element => {
    return (
        <ButtonStyled
            className={className}
            variant={variant}
            withtBorder={withtBorder}
            disabled={disabled}
            fontSize={fontSize}
            block={block}
            onClick={onClick}
            {...restProps}>
            {children}
        </ButtonStyled>
    )
}

export default Button;