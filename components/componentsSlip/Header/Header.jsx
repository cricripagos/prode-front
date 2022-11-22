import React from 'react'
import HeaderComponent from '@components/Header/Header';
import Button from '@components/Button/Button'
import Text from '@components/Text/Text'
import Link from 'next/link'
import { BackgroundCTAStyled } from './styles';

const Header = () => {
    return (
        <div className='grid grid-cols-3 bg-[#262333] drop-shadow-md rounded-md pl-[15px]'>
            <div className='col-start-1 col-span-3'>
                <Text
                    fontSize='16px'
                    lineHeight='20px'
                    fontSizeSm={'10px'}
                    className="mt-6">
                    Find by tournament address, or owner
                    internetter.eth
                </Text>
            </div>
                <HeaderComponent className='col-start-4'>
                    <Link href="/tournaments"><Button>Find</Button></Link>
                </HeaderComponent>
            
        </div>
    )
}

export default Header