import React, { FC } from 'react';
import { BlurStyled, ImageStyled } from './styles';

export enum BlurColor {
    primary = 'primary',
    secondary = 'secondary'
}

interface BlurProps {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    topImage?: string;
    leftImage?: string;
    rightImage?: string;
    bottomImage?: string;
    variant?: BlurColor
    className?: string;
    width?: string;
    height?: string;
    widthImage?: string;
    heightImage?: string;
    image?: string;
}

const Blur: FC<BlurProps> = ({
    variant = BlurColor.primary,
    top,
    left,
    right,
    bottom,
    className,
    width = '30%',
    height = '15%',
    image,
    widthImage = '300px',
    heightImage = '300px',
    topImage,
    leftImage,
    rightImage,
    bottomImage
}): JSX.Element => {
    return (
        <>
            <BlurStyled
                className={className}
                variant={variant}
                top={top}
                left={left}
                right={right}
                bottom={bottom}
                width={width}
                height={height}
            />
            {image &&
                <ImageStyled
                    top={topImage || top}
                    left={leftImage || left}
                    right={rightImage || right}
                    bottom={bottomImage || bottom}
                    width={widthImage}
                    height={heightImage}
                />}
        </>
    );
}

export default Blur