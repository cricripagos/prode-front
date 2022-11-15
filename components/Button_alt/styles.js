import styled, { css } from 'styled-components';
import { Variant } from './Button_alt';

export const ButtonStyled = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14.9px 29.8px;
    gap: 12.42px;
    line-height: 15px;
    border: 1px solid black;
    border-radius: 9.93333px;
    font-size: ${props => props.fontSize};
    color: ${props => props.activated && '#00E5AE !important'};
    ${({variant, withtBorder}) => variant == Variant.primary && css`
        background: var(--secondary-color);
        color: var(--white);
        ${withtBorder && css`
            box-shadow: 8px 8px 0px var(--primary-color);
        `}
    `}
    ${({variant, withtBorder}) => variant == Variant.secondary && css`
        background: var(--primary-color);
        color: white;
        ${withtBorder && css`
            box-shadow: 8px 8px 0px var(--secondary-color);
        `}
    `}
    ${({variant, withtBorder}) => variant == Variant.tertiary && css`
        background: var(--light-blue-color);
        color: white;
        ${withtBorder && css`
            box-shadow: 8px 8px 0px var(--dark-blue-color);
        `}
    `}
    ${({variant, withtBorder}) => variant == Variant.quaternary && css`
        background: var(--pink-color);
        color: white;
        ${withtBorder && css`
            box-shadow: 8px 8px 0px var(--dark-blue-color);
        `}
    `}
    ${({block}) => block && css`
        width: 100%;
    `}
`;