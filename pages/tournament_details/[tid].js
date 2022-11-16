
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button, { Variant } from '@components/Button/Button';
import Button_alt from '@components/Button_alt/Button_alt';
import Header from '@components/Header/Header';
import Text from '@components/Text/Text';
import CardGradient from '@components/CardGradient/CardGradient';
import Link from 'next/link';
import { useConnect } from '@hooks/useConnect';
import SeatchSVG from '@assets/images/search.svg';
import { ReactSVG } from 'react-svg';
import { CREATEDBYME, MYTOURNEYSBUTTONNAME } from '../../components/constants';
import Table from '@components/Table/Table';
import Blur from '@components/Blur/Blur';
import BallPNG from '@assets/images/ball-tournaments.png';
import {getParticipants, getTournamentData} from '@utils/prodeFns';
import HeaderComponent  from '@components/Header/Header';

const columns = [
    {
        key: "participantName",
        label: "Name",
    },
    {
        key: "score",
        label: "Current Score",
    },
    {
        key: "slip",
        label: "Check Slip",
    },
];


export default function TournamentDetails() {
    const router = useRouter()
    const [participants, setParticipants] = useState()
    const [tdata, setTdata] = useState()
    const [tid, setTid] = useState()
    const [whats, setWhats] = useState()
    const [tlgm, setTlgm] = useState()
    const [share, setShare] = useState(false)

    useEffect(()=>{
        if(!router.isReady) return;
        const { tid } = router.query
        setTid(tid)
        const fetchParticipants = async () => {
            const participants = await getParticipants(tid)
            setParticipants(participants)
        }
        const fetchTdata = async () => {
            const tdata = await getTournamentData(tid)
            setTdata({ // esto lo pongo para no tene q lidiar con indexes de un array
                buyin: tdata[0]/1000000000000000000,
                prodeNickname: tdata[1],
                participants: tdata[2],
                winnerData: tdata[3],
                creator: tdata[4],
                pot: tdata[0]/1000000000000000000*tdata[2],
            })
        const wa = `https://wa.me/?text=${'Hi there! Join my tournament at '}&url=https://qatarprode.xyz/betting-slip/${tid}`;
        setWhats(wa)
        const tm = `https://telegram.me/share/url?url={https://qatarprode.xyz/betting-slip/${tid}&text=${'Hi there! Join my tournament at '}`
        setTlgm(tm)
        }
        fetchParticipants()
        fetchTdata()
    }, [router.isReady]);
    const { walletAddress, connectWalletPressed } = useConnect();

    const columnList = columns.map(item => 
        <th className="px-4 py-2 text-white" key={item.key}>{item.label}</th>
    );


    return (
        <div className='w-full relative bg-black'>
            <Blur bottom='0%' left='-7px' height='25%' width='20%'
                image={BallPNG.src}
                bottomImage='-83px'
                rightImage='0px'
            />
            <Header>
                {
                    walletAddress.length > 0
                        ? <Button
                            withtBorder={false}
                            variant={Variant.tertiary}>{
                                "Connected: " +
                                String(walletAddress).substring(0, 6) +
                                "..." +
                                String(walletAddress).substring(38)
                            }</Button>
                        : <Button onClick={connectWalletPressed}>
                            Connect Wallet
                        </Button>
                }
            </Header>
            <div className='container relative w-full px-8 pt-8 mx-auto md:px-28'>
                <CardGradient className="md:!p-16 !z-10" borderless="true">
                <div className='grid grid-cols-4'>
                    <Text tag={'h2'} color={'#00E5AE'} fontSize='36px' fontSizeSm={'20px'} className='col-start-1 col col-span-2'>Tournament name</Text>
                    <Button onClick={() => setShare(!share)} className='col-start-3 col col-span-2 !font-bold'>Invite your friends!</Button>   
                </div> 
                <div className='flex flex-row w-full justify-between mt-4'>
                            <Button type="submit" withtBorder={false} variant={Variant.tertiary} className="!px-5">{
                                tid
                            }
                            </Button>
                    </div>
                    <div className='flex flex-col gap-5 mt-16'>
                        <Text tag={'h2'} color={'#00E5AE'} fontSize='36px' fontSizeSm={'20px'}>Tournament settings</Text>
                        <div className='gap-10 grid grid-cols-6'>
                        <div className=' gap-1 col-start-1 col-span-3'>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Name: <span className='text-[14px]'>prueba</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Buy-in: <span className='text-[14px]'>{tdata?.buyin} xDAI</span>
                            </Text>
                            <div className=' grid grid-start-2'>
                                <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='grid-start-1 grid-span-2'>
                                    Earnings:
                                </Text>  
                                <Text  fontSize='16px' fontSizeSm={'16px'} className='grid-start-1 grid-span-2 mt-[10px]'>
                                100% <span className='text-[12px] text-[#E4168F]'>Winner</span>
                                </Text> 
                                {/*<Text  color={'background: #FFFFFF'} fontSize='16px' fontSizeSm={'16px'} className='grid-start-1 grid-span-2'>
                                    20% <span className='text-[12px] text-[#E4168F]'>Runner-up</span>
                                </Text> 
                                <Text  color={'background: #FFFFFF'} fontSize='16px' fontSizeSm={'16px'} className='grid-start-1 grid-span-2'>
                                    10% <span className='text-[12px] text-[#E4168F]'>3rd place</span>
                        </Text> */}
                            </div>
                        </div>
                        <div className=' gap-1 col-span-3'>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Name: <span className='text-[14px]'>{tdata?.prodeNickname}</span>
                            </Text>
                            {/*<Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                UBI donation: <span className='text-[14px]'>3%</span>
                            </Text>*/}
                            {/*<Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Format: <span className='text-[14px]'>Open</span>
                        </Text>*/}
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Participants: <span className='text-[14px]'>{tdata?.participants}</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                TLV: <span className='text-[14px]'>{tdata?.pot} xDAI</span>
                            </Text>
                        </div>
                    </div>
                    </div>                
                    {
                        share ?
                        (   <div className=' bg-[#262333] drop-shadow-md rounded-md pl-[15px] pt-[20px]'>
                        <div className='col-start-1 col-span-3'>
                            <Text
                                fontSize='16px'
                                lineHeight='20px'
                                fontSizeSm={'12px'}
                                >
                                Share the link to your friends!
                            </Text>

                        </div>
                        <HeaderComponent className='grid grid-cols-3 gap-[10px]'>
                           <Button_alt className='!col-start-1 !font-bold' onClick={() =>  {navigator.clipboard.writeText('Hi there! Join my tournament at ' + 
                                                                                            `https://qatarprode.xyz/betting-slip/${tid}`);
                                                                                            alert("link copied!");
                                                                                            }}>
                                Copy link
                            </Button_alt>
                            <Button_alt className='!col-start-2 !font-bold' onClick={() => (window.open(whats)) }>Whatsapp</Button_alt>
                            <Button_alt className='!col-start-3 !font-bold' onClick={() => (window.open(tlgm)) }>Telegram</Button_alt>
                        </HeaderComponent> 
                    </div>) : null
                }

                    { participants?.length > 0 ?
                    (<div>
                    <Table>
                        <thead>
                            <tr>{columnList}</tr>
                        </thead>
                        <tbody >
                                {participants?.slice(0).reverse().map((participant, index) => {
                                    return (
                                        <tr key={participant.beneficiary}>
                                            <td>{participant.nickname}</td>
                                            <td>{participant.points || 0}</td>
                                            <td><Button type="submit" withtBorder={false} variant={Variant.quaternary} className="!px-5">
                                                    <ReactSVG src={SeatchSVG.src} alt="search tournament prode" />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                </div>) : 
                (   <div className=' bg-[#262333] drop-shadow-md rounded-md pl-[15px] pt-[20px]'>
                        <div className='col-start-1 col-span-3'>
                            <Text
                                fontSize='16px'
                                lineHeight='20px'
                                fontSizeSm={'12px'}
                                >
                                There are currently no participants for
                                your tournament please share so people join
                            </Text>

                        </div>
                        <HeaderComponent className='grid grid-cols-3 gap-[10px]'>
                           <Button_alt className='!col-start-1 !font-bold' onClick={() =>  navigator.clipboard.writeText('Hi there! Join my tournament at ' + `https://qatarprode.xyz/betting-slip/${tid}`)}>Copy link</Button_alt>
                            <Button_alt className='!col-start-2 !font-bold' onClick={() => (window.open(whats)) }>Whatsapp</Button_alt>
                            <Button_alt className='!col-start-3 !font-bold' onClick={() => (window.open(tlgm)) }>Telegram</Button_alt>
                        </HeaderComponent> 
                    </div>)
            }


                </CardGradient>
            </div>
            <div className='w-full container px-8 md:px-28 mx-auto mt-40 md:mt-24'>
                    <Button onClick={() =>
                              router.push(`/betting-slip/${tid}`)
                            } className='w-full !font-bold' >
                        Place Bet
                    </Button>
            </div>

        </div>
    );
}