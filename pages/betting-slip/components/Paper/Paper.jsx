import React from 'react'
import SimpleCard from '@components/SimpleCard/SimpleCard';
import Text from '@components/Text/Text';
import Header from '../Header/Header';
import Accordion from '../Accordion/Accordion';

const Paper = (props) => {
    return (
        <section className='w-full container relative px-1 md:px-10 mx-auto pb-36 pt-4'>
            <SimpleCard>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <Text
                            fontSize='36px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{color: '#E4168F', marginTop: '30px'}}
                            >
                            Champion
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{padding: '10px', background: '#333647', borderRadius: '10px'}}
                            color="secondary">
                            ARGENTINA
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='36px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{color: '#E4168F', marginTop: '30px'}}
                            >
                            Runner up
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{padding: '10px', background: '#333647', borderRadius: '10px'}}
                            color="secondary">
                            MÉXICO
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='36px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{color: '#E4168F', marginTop: '30px'}}
                            >
                            3rd Place
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{padding: '10px', background: '#333647', borderRadius: '10px'}}
                            color="secondary">
                            ALEMANIA
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='36px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{color: '#E4168F', marginTop: '30px'}}
                            >
                            4th Place
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{padding: '10px', background: '#333647', borderRadius: '10px'}}
                            color="secondary">
                            BRAZIL
                        </Text>
                    </div>
                </div>
            </SimpleCard>
        </section>
    )
}

export default Paper;