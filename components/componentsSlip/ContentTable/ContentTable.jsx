import React, { useEffect } from 'react'
import SimpleCard from '@components/SimpleCard/SimpleCard';
import Text from '@components/Text/Text';
import Accordion from '../Accordion/Accordion';
import Paper from '../Paper/Paper';

const ContentTable = (props) => {
    const handleNicknameChange = (e) => {
        props.setSlip({...props.slip, nickname: e.target.value})
    }
    //console.log(props.slip, 'slip')
    return (
        <section className='w-full container relative px-8 md:px-28 mx-auto pb-36c pt-52'>
            <SimpleCard
             className=''
            >
                <div className='w-full md:p-12'>
                    <div className='flex flex-col mb-4 md:mb-5'>
                            <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'20px'}>
                                {props.player.nickname}
                            </Text>
                    </div>
                    <div className='flex flex-col mb-[20px]  mt-[20px] pt-5'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'20px'}>
                            Tournament Information
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
                                Earnings: <span className='text-[#E4168F]'> 100% For Winner</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='16px' fontSizeSm={'16px'} className="mt-[5px]">
                                
                            </Text>
                            </div>
                        </div>
                        <div className=' gap-1 col-span-3'>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Participants: <span className='text-[14px]'>{props.tdata?.participants}  </span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Total Value Locked: <span className='text-[14px]'>{props.tdata?.pot} xDAI</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Current Score: <span className='text-[14px]'>{props.player.points} points</span>
                            </Text>
                        </div>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-16 pt-10'>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'20px'}>
                            Betting Slip
                        </Text>
                    </div>
                    {props.data.map((dataGroup, i) => <Accordion setSlip={props.setSlip} slip={props.slip} data={dataGroup} player={props.player} key={i} /> )}
                </div>
                <Paper setSlip={props.setSlip} slip={props.slip} player={props.player} />
            </SimpleCard>
        </section>
    )
}

export default ContentTable;