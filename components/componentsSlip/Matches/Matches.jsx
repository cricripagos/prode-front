import React from 'react'
import Text from '@components/Text/Text'

const Matches = (props) => {
    const { data, player } = props;
    const home = player?.prediccionFaseGrupos ? player?.prediccionFaseGrupos?.[data.index]?.[0] : player.prediccionFaseGrupos;
    const away = player?.prediccionFaseGrupos ? player?.prediccionFaseGrupos?.[data.index]?.[1] : player.prediccionFaseGrupos;

    return (
        <div key={props.forkey.toString()} className='flex flex-col ' style={{ background: props.number % 2 === 0 ? '#262333' : null, padding: '10px', borderRadius: '15px' }}>
            <div className="grid grid-cols-6">
                <Text
                    fontSize='19px'
                    lineHeight='40px'
                    fontSizeSm={'10px'}
                    className="mt-6">
                    {data.homeName}
                </Text>
                <img src={data.homeLogo} alt="img" style={{ height: '40px', marginTop: '25px' }} />
                <Text style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '60px', height: '40px', color: '#7C3AED', padding: '10px' }}>{home}</Text>
                <Text style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '60px', height: '40px', color: '#7C3AED', padding: '10px' }}>{away}</Text>
                
                <img src={data.awayLogo} alt="img" style={{ height: '40px', marginTop: '25px' }} />
                <div>
                    <Text
                        fontSize='19px'
                        lineHeight='40px'
                        fontSizeSm={'10px'}
                        className="mt-6">
                        {data.awayName}
                    </Text>
                </div>
            </div>
            <div className="flex justify-center ">
                <div>
                    <Text
                        fontSize='19px'
                        lineHeight='40px'
                        fontSizeSm={'10px'}
                        className="">
                        {data.date}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Matches
