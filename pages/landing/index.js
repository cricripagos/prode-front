
import React from 'react';
import Button from '@components/Button/Button';
import Header from '@components/Header/Header';
import CtaSeption from './components/CTASeption/CtaSeption';
import { BackgroundCTAStyled } from './styles';

const LadingPage = () => {
    return (
        <div className='w-full'>
            <BackgroundCTAStyled className="h-screen">
                <Header>
                    <Button>Launch App</Button>
                </Header>
                <CtaSeption />
            </BackgroundCTAStyled>
        </div>
    )
}

export default LadingPage