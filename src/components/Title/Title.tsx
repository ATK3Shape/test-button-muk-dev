import React, { FC, ReactNode } from "react"
import { TitleBase } from './Title.styles'

interface Props{
    children: ReactNode | ReactNode[];
}

const Title:FC<Props> = ({children}) => {
  return (
    <TitleBase>{children}</TitleBase>
  )
}

export default Title