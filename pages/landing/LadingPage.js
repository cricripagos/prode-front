
import React from 'react'
import Button, { Variant } from './../../components/Button/Button';

const LadingPage = () => {
  return (
    <div>
        <p>LadingPage kupokea </p>
        <Button onClick={(e) => {console.log('click', e)}}>
            Launch App
        </Button>
        <br/>
        <Button withtBorder={false} block>
            Launch App
        </Button>
        <br/>
        <Button variant={Variant.secondary}>
            Launch App
        </Button>
        <br/>
        <Button variant={Variant.secondary} withtBorder={false}>
            Launch App
        </Button>
        <br/>
        <Button variant={Variant.tertiary}>
            Launch App
        </Button>
        <br/>
        <Button variant={Variant.tertiary} withtBorder={false}>
            Launch App
        </Button>
    </div>
  )
}

export default LadingPage