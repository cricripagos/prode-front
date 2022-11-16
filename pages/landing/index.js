
import React from 'react';
import Button from '@components/Button/Button';
import Header from '@components/Header/Header';
import CtaSection from '@components/components_landing/CTASection/CtaSection';
import { BackgroundCTAStyled } from '@components/Styles/styles';
import Blur from '@components/Blur/Blur';
import InNumbers from '@components/components_landing/InNumbers/InNumbers';
import BuiltWith from '@components/components_landing/BuiltWith/BuiltWith';
import Link from 'next/link'

const LandingPage = () => {
    return (
        <div className='w-full'>
            <BackgroundCTAStyled className="h-screen">
                <Header>
                    <Link href="/tournaments"><Button>Launch App</Button></Link>
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