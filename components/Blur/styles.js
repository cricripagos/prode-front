import styled from 'styled-components';
import { BlurColor } from './Blur';
import imageBG from '../../assets/images/whistle.png';

export const BlurStyled = styled.div`
    position: absolute;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    left: ${({ left }) => left};
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    z-index: 1;
    background: ${({ variant, image }) => variant === BlurColor.primary
        ? 'var(--primary-color)'
        : 'var(--secondary-color)'};
    filter: blur(100px);
`;

export const ImageStyled = styled.div`
    position: absolute;
    background-image: url(${imageBG.src});
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