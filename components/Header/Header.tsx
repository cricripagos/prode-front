import classNames from 'classnames';
import React, { FC } from 'react'

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: FC<HeaderProps> = ({
    children,
    className = 'flex-row-reverse   '
}): JSX.Element => {
    const classes = classNames('flex p-5', className)

    return (
        <header className={classes}>{children}</header>
    )
}

export default Header