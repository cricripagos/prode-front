import React from 'react'
import HeaderComponent from '@components/Header/Header';
import Button from '@components/Button/Button'
import Text from '@components/Text/Text'
import Link from 'next/link'
import { BackgroundCTAStyled } from './styles';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex flex-col'>
                <Text
                    fontSize='22px'
                    lineHeight='40px'
                    fontSizeSm={'10px'}
                    className="mt-6">
                    Find by tournament address, or owner
                    internetter.eth
                </Text>
            </div>
                <HeaderComponent>
                    <Link href="/tournaments"><Button>Find</Button></Link>
                </HeaderComponent>
            
        </div>
    )
}

export default Header