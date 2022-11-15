import React from 'react'
import Text from '@components/Text/Text'

const Matches = (props) => {
    const { data } = props;
    return (
        <div className='flex flex-col  gap-10' style={{background: props.number%2 === 0 ? '#262333' : null, padding: '10px', borderRadius: '15px'}}>
            <div class="grid grid-cols-6 justify-around">
                <Text
                    fontSize='14px'
                    lineHeight='20px'
                    fontSizeSm={'10px'}
                    className="mt-6">
                    {data.teams.home.name}
                </Text>
                <img src={data.teams.home.logo} alt="img" style={{ height: '30px', width: '50px', marginTop: '25px', marginLeft: '10px' }} />
                <input id="outlined-basic" label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '50px', height: '30px', color: '#7C3AED', padding: '10px', marginLeft: '10px'}} type="number"/>
                <input id="outlined-basic" label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '50px', height: '30px', color: '#7C3AED', padding: '10px', marginLeft: '10px' }} type="number"/>
                <img src={data.teams.away.logo} alt="img" style={{ height: '30px', width: '50px', marginTop: '25px', marginLeft: '10px' }} />
                <div>
                    <Text
                        fontSize='14px'
                        lineHeight='20px'
                        fontSizeSm={'10px'}
                        className="mt-6">
                        {data.teams.away.name} 
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
                        {data.fixture.date}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Matches