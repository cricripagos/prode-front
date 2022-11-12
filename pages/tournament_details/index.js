
import { useState } from 'react';
import Button, { Variant } from '@components/Button/Button';
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

const hardcodedProdes = [
    {
        prodeAddress: "participantName1",
        prodeNickname: "Maradona",
        buyin: 43
    },
    {
        prodeAddress: "participantName2",
        prodeNickname: "Pele",
        buyin: 23
    },
    {
        prodeAddress: "participantName3",
        prodeNickname: "Messi",
        buyin: 65
    },
    {
        prodeAddress: "participantName4",
        prodeNickname: "CR7",
        buyin: 64
    },
    
];

export default function TournamentDetails() {
    const [filters, setFilters] = useState({ addressFilter: null, nicknameFilter: null, searchFilter: '' });
    const [search, setSearch] = useState('');
    const { walletAddress, connectWalletPressed, singleProde } = useConnect();

    const columnList = columns.map(item => 
        <th className="px-4 py-2 text-white" key={item.key}>{item.label}</th>
    );

    const onSubmitFilters = (event) => {
        event.preventDefault();
        setFilters(prevFilters => ({ ...prevFilters, searchFilter: search }));
    };

    const onChangeSearch = (event) => {
        const { target: { value } } = event;
        setSearch(value);
    }

    const handleOnClickFilters = (buttonName = MYTOURNEYSBUTTONNAME) => {
        setFilters(prevFilters => (
            {
                ...prevFilters,
                addressFilter: !filters.addressFilter
                    ? buttonName === MYTOURNEYSBUTTONNAME ? walletAddress : "0x130f5E56220c218953824D2997C4870961CBdD24"
                    : null
            }
        ));
    }

    return (
        <div className='w-full relative'>
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
                    <Header>
                       <Button onClick={connectWalletPressed}>Invite your friends!</Button>
                    </Header>
                    <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'20px'}>Tourney cool name</Text>
                    <div className='flex flex-row w-full justify-between mt-4'>
                            <Button type="submit" withtBorder={false} variant={Variant.tertiary} className="!px-5">{
                                String(walletAddress).substring(0, 6) +
                                "..." +
                                String(walletAddress).substring(38)
                            }
                            </Button>
                    </div>
                    <div className='flex flex-col gap-5 mt-16'>
                        <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'20px'}>Tournament settings</Text>
                        <div className='gap-10 grid grid-cols-6'>
                        <div className=' gap-1 col-start-1 col-span-3'>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Name: <span className='text-[14px]'>prueba</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Buy-in: <span className='text-[14px]'>10 xDAI</span>
                            </Text>
                            <div className=' grid grid-start-2'>
                                <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='grid-start-1 grid-span-2'>
                                    Earnings:
                                </Text>  
                                <Text  fontSize='16px' fontSizeSm={'16px'} className='grid-start-1 grid-span-2 mt-[10px]'>
                                50% <span className='text-[12px] text-[#E4168F]'>Winner</span>
                                </Text> 
                                <Text  color={'background: #FFFFFF'} fontSize='16px' fontSizeSm={'16px'} className='grid-start-1 grid-span-2'>
                                    20% <span className='text-[12px] text-[#E4168F]'>Runner-up</span>
                                </Text> 
                                <Text  color={'background: #FFFFFF'} fontSize='16px' fontSizeSm={'16px'} className='grid-start-1 grid-span-2'>
                                    10% <span className='text-[12px] text-[#E4168F]'>3rd place</span>
                                </Text> 
                            </div>
                        </div>
                        <div className=' gap-1 col-span-3'>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Name: <span className='text-[14px]'>prueba</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                UBI donation: <span className='text-[14px]'>3%</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Format: <span className='text-[14px]'>Open</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                Participants: <span className='text-[14px]'>20</span>
                            </Text>
                            <Text color={'background: #FFFFFF'} fontSize='18px' fontSizeSm={'16px'} className='mb-[10px]'>
                                TLV: <span className='text-[14px]'>200 xDAI</span>
                            </Text>
                        </div>
                    </div>
                    </div>
                    <div>

                    <Table>
                        <thead>
                            <tr>{columnList}</tr>
                        </thead>
                        <tbody >
                            {/* hardcodedProdes?.slice(0).reverse().map((hardcodedProde, index) => {
                                return (

                                    <tr key={hardcodedProde.prodeAddress}>
                                        <td>{hardcodedProde.prodeNickname}</td>
                                        <td>{hardcodedProde.buyin}</td>
                                        <td><Button type="submit" withtBorder={false} variant={Variant.quaternary} className="!px-5">
                                                    <ReactSVG src={SeatchSVG.src} alt="search tournament prode" />
                                            </Button></td>
                                    </tr>
                                    
                                    
                                )
                            })*/}
                                {singleProde?.slice(0).reverse().map((participant, index) => {
                                    return (
                                        <tr key={participant.beneficiary}>
                                            <td>{participant.nickname}</td>
                                            <td>{participant.points}</td>
                                            <td><Button type="submit" withtBorder={false} variant={Variant.quaternary} className="!px-5">
                                                    <ReactSVG src={SeatchSVG.src} alt="search tournament prode" />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                    </div>
                </CardGradient>
            </div>
            <div className='w-full container px-8 md:px-28 mx-auto mt-40 md:mt-24'>
                            <Link href="/betting-slip"><Button className='w-full' >Place Bet</Button></Link>
            </div>

        </div>
    );
}