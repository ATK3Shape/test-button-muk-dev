import React, { FC, ReactNode, MouseEventHandler } from "react"
import { BaseButton } from './Button.styles'

interface Props{
    children: ReactNode | ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button:FC<Props> = ({children, onClick}) => {
  return (
    <BaseButton 
      onClick={onClick}
    >{children}</BaseButton>
  )
}

export default Button