import React from 'react'
import SimpleCard from '@components/SimpleCard/SimpleCard';
import Text from '@components/Text/Text';
import { paisesTule } from "@utils/jsonData/data";

const Paper = (props) => {

    const { player } = props;
    const topFour = player?.prediccionTopFour 
    const champion = topFour ? paisesTule[topFour?.[0]]?.[0] : topFour;
    const second = topFour ? paisesTule[topFour?.[1]]?.[0] : topFour;
    const third = topFour ? paisesTule[topFour?.[2]]?.[0] : topFour;
    const fourth = topFour ? paisesTule[topFour?.[3]]?.[0] : topFour;
    //console.log('aca', paisesTule)
    return (
        <section className='w-full container relative px-1 md:px-10 mx-auto pb-10 pt-4'>
            <SimpleCard>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'16px'}
                            className="mt-6 text-center !font-bold"
                            style={{color: '#E4168F', marginTop: '30px'}}
                            >
                            Champion
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='16px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{padding: '10px', background: '#333647', borderRadius: '10px'}}
                            color="secondary">
                            {champion}
                        </Text>
                        
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'16px'}
                            className="mt-6 text-center !font-bold"
                            style={{color: '#E4168F', marginTop: '30px'}}
                            >
                            Runner up
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='16px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center "
                            style={{padding: '10px', background: '#333647', borderRadius: '10px'}}
                            color="secondary">
                            {second}
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'16px'}
                            className="mt-6 text-center !font-bold"
                            style={{color: '#E4168F', marginTop: '30px'}}
                            >
                            3rd Place
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='16px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{padding: '10px', background: '#333647', borderRadius: '10px'}}
                            color="secondary">
                            {third}
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'16px'}
                            className="mt-6 text-center !font-bold"
                            style={{color: '#E4168F', marginTop: '30px'}}
                            >
                            4th Place
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='16px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{padding: '10px', background: '#333647', borderRadius: '10px'}}
                            color="secondary">
                            {fourth}
                        </Text>
                    </div>
                </div>
            </SimpleCard>
        </section>
    )
}

export default Paper;