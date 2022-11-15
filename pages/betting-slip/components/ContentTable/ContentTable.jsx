import React, { useEffect } from 'react'
import SimpleCard from '@components/SimpleCard/SimpleCard';
import Text from '@components/Text/Text';
import Header from '../Header/Header'
import Accordion from '../Accordion/Accordion';
import Paper from '../Paper/Paper';

const ContentTable = (props) => {
    const handleNicknameChange = (e) => {
        props.setSlip({...props.slip, nickname: e.target.value})
    }
    console.log(props.slip, 'slip')
    return (
        <section className='w-full container relative px-10 md:px-15 mx-auto pt-52'>
            <SimpleCard>
                <div className='w-full md:p-12'>
                    <div className='flex flex-col mb-4 md:mb-5font-bold'>
                        <Text  color={'#64CC98'} fontSize='30px' fontSizeSm={'20px'} className="!font-bold">
                            Join Tournament
                        </Text>
                    </div>
                    <Header />
                    <div className='flex flex-col mb-[20px]  mt-[20px] pt-5'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='30px' fontSizeSm={'20px'} className="!font-bold">
                            Tournament settings
                        </Text>
                    </div>
                    <div className='gap-10 grid grid-cols-6'>
                        <div className=' gap-1 col-start-1 col-span-3'>
<<<<<<< HEAD
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px] !font-bold'>
                                Name: <span className='text-[14px] !font-thin'>prueba</span>
=======
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Name: <span className='text-[14px]'>{props.tdata?.prodeNickname}</span>
>>>>>>> main
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Buy-in: <span className='text-[14px]'>{props.tdata?.buyin} xDAI</span>
                            </Text>
                            <div className=' grid grid-start-2'>
<<<<<<< HEAD
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'}>
                                Earnings: 
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='16px' fontSizeSm={'14px'} className="mt-[10px]">
                                50% <span className='text-[#E4168F]'>Winner</span>
=======
                            <Text tag={'h1'} color={'background: #FFFFFF'} fontSize='22px' fontSizeSm={'28.6px'}>
                                Earnings: 100% Winner
>>>>>>> main
                            </Text>
                            </div>
                        </div>
                        <div className=' gap-1 col-span-3'>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Participants: <span className='text-[14px]'>{props.tdata?.participants}  </span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                TLV: <span className='text-[14px]'>{props.tdata?.pot} xDAI</span>
                            </Text>
                        </div>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-16 pt-10'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='30px' fontSizeSm={'20px'} className="!font-bold">
                            Betting Slip
                        </Text>
                    </div>
<<<<<<< HEAD
                    {props.data.map((dataGroup, i) => <Accordion data={dataGroup} key={i} number={i} /> )}
                    <Paper />
=======
                    {props.data.map((dataGroup, i) => <Accordion setSlip={props.setSlip} slip={props.slip} data={dataGroup} key={i} /> )}
                </div>
                <Paper setSlip={props.setSlip} slip={props.slip}  />
>>>>>>> main
                <div class="grid grid-cols-4 gap-1">
                    <div className='col-start-1 col-span-3'>
                        <Text
                            fontSize='30px'
                            lineHeight='40px'
                            fontSizeSm={'16px'}
                            className="mt-6 text-left !font-bold"
                            style={{ color: '#00E5AE', marginTop: '30px' }}
                        >
                            Buy-in
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'16px'}
                            className="mt-6 text-center"
                            style={{ padding: '10px', background: '#333647', borderRadius: '10px' }}
                            color="secondary">
                            {props.tdata?.buyin} xDai
                        </Text>
                    </div>
                </div>
                <div className='col-start-1 col-span-2'>
                    <div class="">
                        <Text
                            fontSize='30px'
                            lineHeight='40px'
                            fontSizeSm={'16px'}
                            className="mt-6 text-left !font-bold"
                            style={{ color: '#00E5AE', marginTop: '30px' }}
                        >
                            Player: 
                        </Text>
                    </div>
<<<<<<< HEAD
                    <div className='col-start-3 col-span-1 '>
=======
                    <div>
                        <input onChange={handleNicknameChange} placeholder="Diego Maradona(10)" type="text" id="away" name="away"  label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '200px', height: '40px', color: '#7C3AED', padding: '10px' }}  />
>>>>>>> main
                        <Text
                            fontSize='18px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{ padding: '10px', background: '#262333', borderRadius: '10px', color: '#E4168F'}}
                            color="secondary">
                            Dejo esto para no perder estilos 
                        </Text>
                    </div>
                </div>
                </div>
                
            </SimpleCard>
        </section>
    )
}

export default ContentTable;