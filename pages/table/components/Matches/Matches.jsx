import React from 'react'
import Text from '@components/Text/Text'

const Matches = (props) => {
    console.log(props.data)
    const { data } = props;
    return (
        <div className='flex flex-col  gap-10'>
            <div class="grid grid-cols-6">
                <Text
                    fontSize='19px'
                    lineHeight='40px'
                    fontSizeSm={'10px'}
                    className="mt-6">
                    {data.teams.home.name}
                </Text>
                <img src={data.teams.home.logo} alt="img" style={{ height: '40px', marginTop: '25px' }} />
                <input id="outlined-basic" label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '60px', height: '40px', color: '#7C3AED', padding: '10px' }} type="number" />
                <input id="outlined-basic" label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '60px', height: '40px', color: '#7C3AED', padding: '10px' }} type="number" />
                <img src={data.teams.away.logo} alt="img" style={{ height: '40px', marginTop: '25px' }} />
                <div>
                    <Text
                        fontSize='19px'
                        lineHeight='40px'
                        fontSizeSm={'10px'}
                        className="mt-6">
                        {data.teams.away.name}
                    </Text>
                </div>
            </div>
            <div class="flex justify-center ...">
                <div>
                    <Text
                        fontSize='19px'
                        lineHeight='40px'
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