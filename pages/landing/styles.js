import React from 'react'
import styled from 'styled-components';
import imageBG from '../../assets/images/grid.png';

export const BackgroundCTAStyled = styled.div`
    background-image: url(${imageBG.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;