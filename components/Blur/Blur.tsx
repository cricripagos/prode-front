import React, { FC } from 'react';
import { BlurStyled } from './styles';

export enum BlurColor {
    primary = 'primary',
    secondary = 'secondary'
}

interface BlurProps {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    variant?: BlurColor
    className?: string;
    width?: string;
    height?: string;
}

const Blur: FC<BlurProps> = ({
    variant = BlurColor.primary,
    top = '50%',
    left = '-7%',
    right,
    bottom,
    className,
    width = '30%',
    height = '15%'
}): JSX.Element => {
    return (
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
    )
}

export default Blur