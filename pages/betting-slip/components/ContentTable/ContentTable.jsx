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
    //console.log(props.slip, 'slip')
    return (
        <section className='w-full container relative px-8 md:px-28 mx-auto pb-36c pt-52'>
            <SimpleCard>
                <div className='w-full md:p-12'>
                    <div className='flex flex-col mb-4 md:mb-5'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'20px'}>
                            Join Tournament
                        </Text>
                    </div>
                    <div className='flex flex-col mb-[20px]  mt-[20px] pt-5'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'20px'}>
                            Tournament settings
                        </Text>
                    </div>
                    <div className='gap-10 grid grid-cols-6'>
                        <div className=' gap-1 col-start-1 col-span-3'>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Name: <span className='text-[14px]'>{props.tdata?.prodeNickname}</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Buy-in: <span className='text-[14px]'>{props.tdata?.buyin} xDAI</span>
                            </Text>
                            <div className=' grid grid-start-2'>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'}>
                                Earnings:
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='16px' fontSizeSm={'16px'} className="mt-[5px]">
                                100% <span className='text-[#E4168F]'>Winner</span>
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
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'20px'}>
                            Betting Slip
                        </Text>
                    </div>
                    {props.data.map((dataGroup, i) => <Accordion setSlip={props.setSlip} slip={props.slip} data={dataGroup} key={i} /> )}
                </div>
                <Paper setSlip={props.setSlip} slip={props.slip}  />
                <div class="grid grid-cols-4 gap-1">
                    <div>
                        <Text
                            fontSize='36px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{ color: '#E4168F', marginTop: '30px' }}
                        >
                            Buy-in
                        </Text>
                    </div>
                    <div>
                        <Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{ padding: '10px', background: '#333647', borderRadius: '10px' }}
                            color="secondary">
                            {props.tdata?.buyin} xDai
                        </Text>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <div>
                        <Text
                            fontSize='36px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{ color: '#00E5AE', marginTop: '30px' }}
                        >
                            Player: 
                        </Text>
                    </div>
                    <div>
                        <input onChange={handleNicknameChange} placeholder="Diego Maradona(10)" 
                        type="text" id="away" name="away"  label="Outlined" 
                        style={{ background: '#00E5AE', borderRadius: '10px', 
                        marginTop: '30px', width: '200px', height: '40px', 
                        color: '#7C3AED', padding: '10px' }}  />
                        {/*<Text
                            fontSize='22px'
                            lineHeight='40px'
                            fontSizeSm={'10px'}
                            className="mt-6 text-center"
                            style={{ padding: '10px', background: '#262333', borderRadius: '10px', color: '#E4168F'}}
                            color="secondary">
                            Dejo esto para no perder estilos 
                        </Text>*/}
                    </div>
                </div>
            </SimpleCard>
        </section>
    )
}

export default ContentTable;