
import React from 'react';
import Button from '@components/Button/Button';
import Header from '@components/Header/Header';
import CtaSection from './components/CTASection/CtaSection';
import { BackgroundCTAStyled } from './styles';
import Blur from '@components/Blur/Blur';
import InNumbers from './components/InNumbers/InNumbers';
import BuiltWith from './components/BuiltWith/BuiltWith';

const LandingPage = () => {
    return (
        <div className='w-full'>
            <BackgroundCTAStyled className="h-screen">
                <Header>
                    <Button>Launch App</Button>
                </Header>
                <CtaSection />
                <Blur left='-7%' top='50%' />
            </BackgroundCTAStyled>
            <article className='w-full overflow-hidden'>
                <InNumbers />
                <BuiltWith />
            </article>
        </div>
    )
}

export default LandingPage;