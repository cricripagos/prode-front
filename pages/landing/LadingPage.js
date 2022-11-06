
import React from 'react'
import CardGradient from '../../components/CardGradient/CardGradient';
import Button, { Variant } from './../../components/Button/Button';

const LadingPage = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 px-5'>
                <div className='flex flex-row gap-5'>
                    <Button onClick={(e) => { console.log('click', e) }}>
                        Launch App
                    </Button>
                    <Button withtBorder={false} block>
                        Launch App
                    </Button>
                    <Button variant={Variant.secondary}>
                        Launch App
                    </Button>
                </div>
                <div className='flex flex-row gap-5'>
                    <Button variant={Variant.secondary} withtBorder={false}>
                        Launch App
                    </Button>
                    <br />
                    <Button variant={Variant.tertiary}>
                        Launch App
                    </Button>
                    <br />
                    <Button variant={Variant.tertiary} withtBorder={false}>
                        Launch App
                    </Button>
                </div>
            </div>
            <div className='flex flex-col px-5 mt-8'>
                <CardGradient>
                    <div className='flex flex-col items-center'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Button className='w-2/6'>Click</Button>
                    </div>
                </CardGradient>
            </div>
        </div>
    )
}

export default LadingPage