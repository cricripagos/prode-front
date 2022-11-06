import styled from 'styled-components';

export const CardGragiendStyled = styled.div`
    position: relative;
    border: 11px solid transparent;
    border-radius: 18px;
    background: var(--dark-blue-color);
    background-clip: padding-box;
    padding: 2rem;

    :after {
        position: absolute;
        top: -11px; 
        bottom: -11px;
        left: -11px; 
        right: -11px;
        background: linear-gradient(180deg, #00E5AE 0%, #7C3AED 100%);
        content: '';
        z-index: -1;
        border-radius: 18px;
    }
`;