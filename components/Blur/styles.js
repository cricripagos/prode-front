import styled from 'styled-components';
import { BlurColor } from './Blur';

export const BlurStyled = styled.div`
    position: absolute;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    left: ${({ left }) => left};
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    z-index: 1;
    background: ${({ variant }) => {
        if(variant === BlurColor.primary) return 'var(--primary-color)'
        if(variant === BlurColor.secondary) return 'var(--secondary-color)'
        if(variant === BlurColor.tertiary) return 'var(--pink-color)'
    }};
    filter: blur(100px);
`;

export const ImageStyled = styled.div`
    position: absolute;
    background-image: url(${({ image }) => image});
    z-index: 2;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    left: ${({ left }) => left};
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;