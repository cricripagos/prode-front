import React, { FC, ComponentType } from 'react'
import classNames from 'classnames';
import { TagStyled } from './styles';

interface TextProps {
    children: React.ReactNode;
    className?: string;
    tag?: ComponentType | keyof JSX.IntrinsicElements;
    color?: string;
    fontSize?: string;
    fontSizeSm?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    lineHeight?: string;
    textDecoration?: string;
    padding?: string;
    margin?: string;
    style?: Object
}

const Text: FC<TextProps> = ({
    children,
    className,
    color = 'white',
    tag: Tag = 'p',
    fontSize,
    fontSizeSm = '12px',
    fontFamily = 'Russo One',
    fontWeight = 400,
    lineHeight,
    textDecoration,
    padding,
    margin,
    style
}): JSX.Element => {
    const classes = classNames(className);
    return (
        <TagStyled
            as={Tag}
            className={classes}
            style={style}
            color={color}
            fontSize={fontSize}
            fontSizeSm={fontSizeSm}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            textDecoration={textDecoration}
            padding={padding}
            margin={margin}>
            {children}
        </TagStyled>
    )
}

export default Text