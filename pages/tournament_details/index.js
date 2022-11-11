
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
        label: "Buy-in",
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
    const { walletAddress, allProdes, connectWalletPressed } = useConnect();

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
                    <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>Tourney cool name</Text>
                    <div className='flex flex-row w-full justify-between mt-4'>
                            <Button type="submit" withtBorder={false} variant={Variant.tertiary} className="!px-5">{
                                String(walletAddress).substring(0, 6) +
                                "..." +
                                String(walletAddress).substring(38)
                            }
                            </Button>
                    </div>
                    <div className='flex flex-col gap-5 mt-16'>
                        <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>Tournament settings</Text>
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
                    </div>
                    <div>

                    <Table>
                        <thead>
                            <tr>{columnList}</tr>
                        </thead>
                        <tbody >
                            {hardcodedProdes?.slice(0).reverse().map((hardcodedProde, index) => {
                                return (

                                    <tr key={hardcodedProde.prodeAddress}>
                                        <td>{hardcodedProde.prodeNickname}</td>
                                        <td>{hardcodedProde.buyin}</td>
                                        <td><Button type="submit" withtBorder={false} variant={Variant.quaternary} className="!px-5">
                                                    <ReactSVG src={SeatchSVG.src} alt="search tournament prode" />
                                            </Button></td>
                                    </tr>
                                    
                                    
                                )
                            })}
                        </tbody>
                    </Table>
                    </div>
                </CardGradient>

            </div>

        </div>
    );
}