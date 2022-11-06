import React, { FC } from 'react';
import { CardGragiendStyled } from './styles';

interface CardGradientProps {
    children?: React.ReactNode,
    className?: String
}

const CardGradient: FC<CardGradientProps> = ({
    children,
    className
}): JSX.Element => {
    return (
        <CardGragiendStyled className={className}>
            {children}
        </CardGragiendStyled>
    )
}

export default CardGradient;