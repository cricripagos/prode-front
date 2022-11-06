
import React from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Text from '../../components/Text/Text';

const LadingPage = () => {
    return (
        <div className='w-full'>
            <div>
                <Header>
                    <Button>Launch App</Button>
                </Header>
                <article className='w-full w-2/3 mx-auto mt-24'>
                    <seption className='flex flex-col'>
                        <Text tag={'h1'}>QATAR PRODE</Text>
                        <p>Fifa WorldCup social betting in web3.
                            Play a tournament
                            with your group of people. Onboard friends
                            to crypto with a
                            fun excuse. Have fun winning and loosing.</p>
                        <Button withtBorder={false}>Launch App</Button>
                    </seption>
                </article>
            </div>
        </div>
    )
}

export default LadingPage