import React from 'react'
import CardGradient from '@components/CardGradient/CardGradient';
import Text from '@components/Text/Text';
import Number from './Number';
import InNumberCss from './InNumber.module.css';
import Blur, { BlurColor } from '@components/Blur/Blur';
import imageBG from '@assets/images/whistle.png';
import classNames from 'classnames';

const InNumbers = () => {
    return (
        <section className='w-full container relative px-8 md:px-28 mx-auto pb-36'>
            <Blur
                right='-7%'
                top='50%'
                rightImage='-3%'
                topImage='22%'
                variant={BlurColor.secondary}
                image={imageBG.src}
            />
            <CardGradient>
                <div className='w-full md:p-5'>
                    <div className='flex flex-col mb-4 md:mb-16'>
                        <Text className='text-center' tag={'h2'} color={'#64CC98'} fontSize='46px' fontSizeSm={'26px'}>
                            QATAR PRODE in numbers
                        </Text>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <Number
                            text='tournaments launched'
                            number={20}
                            className={classNames(InNumberCss['w-30'], InNumberCss['w-full'])}
                        />
                        <Number
                            text='participants'
                            number={20}
                            className={InNumberCss['w-30']}
                        />
                        <Number
                            text='DAI total value locked'
                            number={2000}
                            className={InNumberCss['w-40']}
                        />
                    </div>
                </div>
            </CardGradient>
        </section>
    )
}

export default InNumbers;