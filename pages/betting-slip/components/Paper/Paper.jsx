import React from 'react'
import SimpleCard from '@components/SimpleCard/SimpleCard';
import Text from '@components/Text/Text';
import Header from '../Header/Header';
import Accordion from '../Accordion/Accordion';
import { paisesTule } from "../../jsonData/data";

const Paper = (props) => {
    const handleTopChange = (e,position) => {
        let newSlip = props.slip
        newSlip.topPicks[position] = parseInt(e.target.value)
        props.setSlip(newSlip)
    }
    console.log('aca', paisesTule)
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
                            <select onChange={(e) => handleTopChange(e,0)} style={{backgroundColor: 'transparent',}}name="cars" id="cars">
                                <option disabled selected value>  </option>
                                {paisesTule?.map((pais) => <option style={{padding: '10px', background: '#333647', borderRadius: '10px'}} value={pais[1]}>{pais[0]}</option>)}
                            </select>
                            
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
                            <select onChange={(e) => handleTopChange(e,1)} style={{backgroundColor: 'transparent',}}name="cars" id="cars">
                            <option disabled selected value>  </option>
                                {paisesTule?.map((pais) => <option style={{padding: '10px', background: '#333647', borderRadius: '10px'}} value={pais[1]}>{pais[0]}</option>)}
                            </select>
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
                            <select onChange={(e) => handleTopChange(e,2)} style={{backgroundColor: 'transparent',}}name="cars" id="cars">
                            <option disabled selected value>  </option>
                                {paisesTule?.map((pais) => <option style={{padding: '10px', background: '#333647', borderRadius: '10px'}} value={pais[1]}>{pais[0]}</option>)}
                            </select>
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
                            <select onChange={(e) => handleTopChange(e,3)} style={{backgroundColor: 'transparent',}}name="cars" id="cars">
                            <option disabled selected value>  </option>
                                {paisesTule?.map((pais) => <option style={{padding: '10px', background: '#333647', borderRadius: '10px'}} value={pais[1]}>{pais[0]}</option>)}
                            </select>
                        </Text>
                    </div>
                </div>
            </SimpleCard>
        </section>
    )
}

export default Paper;