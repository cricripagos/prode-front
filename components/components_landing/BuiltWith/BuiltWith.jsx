import React from 'react'
import CardGradient from '@components/CardGradient/CardGradient';
import Text from '@components/Text/Text';
import BallSVG from '@assets/images/ball.svg';
import { ReactSVGStyled } from './styles';
import Button, { Variant } from '@components/Button/Button';
import Blur, { BlurColor } from '@components/Blur/Blur';
import BallPNG from '@assets/images/ball.png';

const BuiltWith = () => {
    return (
        <section className='w-full container relative px-8 md:px-28 mx-auto'>
            <div className='flex flex-col w-full'>
                <CardGradient>
                    <div className='w-full md:p-5 flex flex-col'>
                        <Text className='text-center w-full' tag={'h2'} color={'#64CC98'} fontSize='46px' fontSizeSm={'26px'}>
                            Built with
                        </Text>
                        <div className='flex flex-row w-full gap-4 mt-8'>
                            <ReactSVGStyled className='basis-1/3' src={BallSVG.src} alt="ball"/>
                            <ReactSVGStyled className='basis-1/3' src={BallSVG.src} alt="ball"/>
                            <ReactSVGStyled className='basis-1/3' src={BallSVG.src} alt="ball"/>
                        </div>
                    </div>
                </CardGradient>
                <div className='flex flex-row w-full my-28 z-10'>
                    <div className='basis-1/2 mx-auto'>
                        <Button className='!p-6 mx-auto' variant={Variant.secondary} withtBorder={false} fontSize='32px'>Audit Our Code</Button>
                    </div>
                    <div className='basis-1/2'>
                        <Button className='!p-6 mx-auto' variant={Variant.secondary} fontSize='32px'>Check Our Discord</Button>
                    </div>
                </div>
                <Blur 
                    variant={BlurColor.tertiary}
                    bottom={0}
                    width={'76%'}
                    left={'10%'}
                    image={BallPNG.src}
                    widthImage='76%'
                    hei
                />
            </div>
        </section>
    )
}

export default BuiltWith