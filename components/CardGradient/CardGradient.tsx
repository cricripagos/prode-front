import React, { FC } from 'react';
import { CardGragiendStyled } from './styles';

interface CardGradientProps {
    children?: React.ReactNode,
    className?: String,
    borderless ?: boolean,
}

const CardGradient: FC<CardGradientProps> = ({
    children,
    className,
    borderless  = false
}): JSX.Element => {
    return (
        <CardGragiendStyled className={className} borderless={borderless }>
            {children}
        </CardGragiendStyled>
    )
}

export default CardGradient;