import styled from 'styled-components';

export const TagStyled = styled.p`
    color: ${({ color }) => color};
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    text-decoration: ${(props) => props.textDecoration};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};

    @media (max-width: 768px) {
      font-size: ${(props) => props.fontSizeSm};
      line-height: ${(props) => props.fontSizeSm};
    }
`;