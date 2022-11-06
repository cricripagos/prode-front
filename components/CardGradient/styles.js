import styled, { css } from 'styled-components';

export const CardGragiendStyled = styled.div`
    position: relative;
    padding: 2rem;
    display: inline-block;
    width: 100%;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.12);

    ${({ borderless  }) => !borderless  && css`
        :before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 18px;
            padding: 11px;
            background: linear-gradient(180deg, #00E5AE, #7C3AED);
            -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
                    mask-composite: exclude;
            pointer-events: none;
        }
    `}
`;