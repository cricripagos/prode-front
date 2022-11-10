import React from 'react'
import SimpleCard from '@components/SimpleCard/SimpleCard';
import Text from '@components/Text/Text';
import Header from '../Header/Header'
import Accordion from '../Accordion/Accordion';

const ContentTable = (props) => {
    return (
        <section className='w-full container relative px-8 md:px-28 mx-auto pb-36c pt-52'>
            <SimpleCard>
                <div className='w-full md:p-12'>
                    <div className='flex flex-col mb-4 md:mb-5'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'36px'}>
                            Join Tournament
                        </Text>
                    </div>
                    <Header />
                    <div className='flex flex-col mb-4 md:mb-16 pt-5'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'36px'}>
                            Tournament settings
                        </Text>
                    </div>
                    <div className='flex flex-col md:flex-row gap-12'>
                        <div className='flex flex-col gap-1'>
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                Name: prueba
                            </Text>
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                Buy-in:  10 xDAI
                            </Text>
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                Earnings: 50% Winner
                            </Text>  
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'} style={{marginLeft: '110px'}}>
                                20% Runner-up
                            </Text> 
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'} style={{marginLeft: '110px'}}>
                                10% 3rd place
                            </Text> 
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                Name: prueba
                            </Text>
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                UBI donation: 3%
                            </Text>
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                Format: Open
                            </Text>
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                Participants: 20
                            </Text>
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                TLV: 200 xDAI
                            </Text>
                        </div>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-16 pt-10'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'36px'}>
                            Betting Slip
                        </Text>
                    </div>
                    {props.data.map((dataGroup, i) => <Accordion data={dataGroup} key={i}/>)}
                </div>
            </SimpleCard>
        </section>
    )
}

export default ContentTable;