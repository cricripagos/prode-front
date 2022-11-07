
import React from 'react';
import Button from '@components/Button/Button';
import Header from '@components/Header/Header';
import CtaSeption from './components/CTASeption/CtaSeption';
import { BackgroundCTAStyled } from './styles';
import Blur from '@components/Blur/Blur';
import InNumbers from './components/InNumbers/InNumbers';

const LadingPage = () => {
    return (
        <div className='w-full'>
            <BackgroundCTAStyled className="h-screen">
                <Header>
                    <Button>Launch App</Button>
                </Header>
                <CtaSeption />
                <Blur left='-7%' top='50%' />
            </BackgroundCTAStyled>
            <article className='w-full overflow-hidden'>
                <InNumbers />
            </article>
        </div>
    )
}

export default LadingPage