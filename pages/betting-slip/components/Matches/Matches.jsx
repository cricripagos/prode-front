import React, { useEffect } from 'react'
import Text from '@components/Text/Text'

const Matches = (props) => {
    const { data } = props;
    const handleOnChangeText = (e,side) => {
        let newSlip = props.slip
        newSlip.groups[data.index][side] = parseInt(e.target.value) 
        props.setSlip(newSlip)
        console.log("match index:", data.index,  "  new value:", e.target.value)
        console.log(props.slip)
    }
    return (
        <div className='flex flex-col  gap-10' style={{background: props.number%2 === 0 ? '#262333' : null, padding: '10px', borderRadius: '15px'}}>
            <div class="grid grid-cols-6 justify-around">
                <Text
                    fontSize='14px'
                    lineHeight='20px'
                    fontSizeSm={'10px'}
                    className="mt-6">
                    {data.homeName}
                </Text>
                <img src={data.homeLogo} alt="img" style={{ height: '40px', marginTop: '25px' }} />
                <input type="number" id="home" name="home" onChange={(e)=>handleOnChangeText(e,0)} label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '60px', height: '40px', color: '#7C3AED', padding: '10px' }} type="number" />
                <input type="number" id="away" name="away" onChange={(e)=>handleOnChangeText(e,1)} label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '60px', height: '40px', color: '#7C3AED', padding: '10px' }} type="number" />
                <img src={data.awayLogo} alt="img" style={{ height: '40px', marginTop: '25px' }} />
                <div>
                    <Text
                        fontSize='14px'
                        lineHeight='20px'
                        fontSizeSm={'10px'}
                        className="mt-6">
                        {data.awayName} 
                    </Text>
                </div>
            </div>
            <div class="flex justify-center ...">
                <div>
                    <Text
                        fontSize='12px'
                        lineHeight='20px'
                        fontSizeSm={'10px'}
                        className="mt-6">
                        {data.date}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Matches
