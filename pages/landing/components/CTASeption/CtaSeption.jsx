import React from 'react'
import Button from '@components/Button/Button'
import Text from '@components/Text/Text'

const CtaSeption = () => {
    return (
        <div className='w-full container px-8 md:px-28 mx-auto mt-40 md:mt-24'>
            <div className='flex flex-col'>
                <Text
                    tag={'h1'}
                    fontSize={'90px'}
                    fontSizeSm={'36px'}
                    lineHeight={'109px'}>QATAR PRODE</Text>
                <Text
                    fontSize='26px'
                    lineHeight='40px'
                    fontSizeSm={'20px'}
                    className="mt-6">
                    Fifa WorldCup social betting in web3.<br></br>
                    Play a tournament with your group of people. Onboard friends<br></br>
                    to crypto with a fun excuse. Have fun winning and loosing.
                </Text>
                <div className='w-full md:w-3/4 my-8'>
                    <Button withtBorder={false} block>Launch App</Button>
                </div>
            </div>
        </div>
    )
}

export default CtaSeption