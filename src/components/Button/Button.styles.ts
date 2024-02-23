import { styled, css } from 'styled-components'
import { ButtonVariant } from './Button'

type ButtonProps = {
    $variant?: ButtonVariant;
};

const buttonVariantMap: Record<ButtonVariant, any> = {
    solid: css<ButtonProps>`
      border: none;
      color: #fff;
      background-color: #d1004b;

      &:hover {
        background-color: #b6163e;
      }
    `,
    outlined: css<ButtonProps>`
      border: 1px solid #d1004b;
      color: #d1004b;
      background-color: transparent;

      &:hover {
        color: #fff;
        background-color: #b6163e;
      }
    `,
  };

export const BaseButton = styled.button<ButtonProps>`
    padding: 1rem;
    text-transform: uppercase;

    ${({ $variant = 'solid' }) => buttonVariantMap[$variant]}
`
