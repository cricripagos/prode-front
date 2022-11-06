import styled from 'styled-components';
import { BlurColor } from './Blur';

export const BlurStyled = styled.div`
    position: absolute;
    width: ${({width}) => width};
    height: ${({height}) => height};
    left: ${({left}) => left};
    top: ${({top}) => top};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};

    background: ${({variant}) => variant === BlurColor.primary
        ? 'var(--primary-color)'
        : 'var(--secondary-color)'};
    filter: blur(100px);
`;