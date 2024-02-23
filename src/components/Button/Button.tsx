import React, { FC, ReactNode, MouseEventHandler } from "react"
import { BaseButton } from './Button.styles'

export type ButtonVariant = 'solid' | 'outlined';

interface Props{
    children: ReactNode | ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: ButtonVariant;
}

const Button:FC<Props> = ({children, onClick, variant}) => {
  return (
    <BaseButton 
      $variant={variant}
      onClick={onClick}
    >{children}</BaseButton>
  )
}

export default Button