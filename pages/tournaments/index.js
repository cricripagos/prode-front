
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
import { useWeb3 } from '../../hooks/useWeb3';

const columns = [
    {
        key: "name",
        label: "Name",
    },
    {
        key: "address",
        label: "Address",
    },
    {
        key: "buyin",
        label: "Buy-in",
    },
    {
        key: "players",
        label: "Players",
    },
];

export default function Tournaments() {
    const [filters, setFilters] = useState({ addressFilter: null, nicknameFilter: null, searchFilter: '' });
    const [search, setSearch] = useState('');
    const { walletAddress, connectWalletPressed } = useConnect();
    const { allProdes } = useWeb3();

    const columnList = columns.map(item =>
        <th className="px-4 py-2 text-white" key={item.key}>{item.label}</th>
    )

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
                leftImage='0px'
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
                <CardGradient className="md:!p-16 !z-10">
                    <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>Search tournament</Text>
                    <div className='flex flex-row w-full justify-between mt-4'>
                        <form className='flex flex-row' onSubmit={onSubmitFilters}>
                            <div className='h-full relative'>
                                <input type="text" className='h-full rounded-md text-[#262333] focus:outline-none px-3 py-3 mr-3' onChange={onChangeSearch} />
                                {filters.searchFilter && <div className='absolute z10 top-16 w-full bg-gray-500 rounded p-2'>
                                    {allProdes?.slice(0).reverse().map((prode, index) => {
                                        if (filters.searchFilter !== null) {
                                            if (filters.searchFilter !== '' && prode.prodeAddress?.includes(filters.searchFilter)) {
                                                return <p key={prode.prodeAddress}>Address:  {prode.prodeAddress} click-prodeLanding</p>
                                            }
                                            if (filters.searchFilter !== '' && prode.prodeNickname?.includes(filters.searchFilter)) {
                                                return <p key={prode.prodeAddress}>Nickname:  {prode.prodeNickname} click-prodeLanding</p>
                                            }
                                        }

                                    })}
                                </div>}
                            </div>
                            <Button type="submit" withtBorder={false} variant={Variant.quaternary} className="!px-5">
                                <ReactSVG src={SeatchSVG.src} alt="search tournament prode" />
                            </Button>
                        </form>
                        <Text tag={'h1'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>or</Text>
                        {walletAddress.length > 0
                            ? (<Link href="/create_tournament"><Button>Create your own</Button></Link>)
                            : <Button onClick={connectWalletPressed}>Connect Wallet</Button>
                        }
                    </div>
                    <div className='flex flex-col gap-5 mt-16'>
                        <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>List of tourneys</Text>
                        <div className='flex flex-row w-full justify-between'>
                            <Button activated={true} variant={Variant.tertiary} withtBorder={false}>Public tourneys</Button>
                            <Button
                                variant={Variant.tertiary}
                                withtBorder={false}
                                onClick={handleOnClickFilters}>
                                My tourneys
                            </Button>
                            <Button
                                variant={Variant.tertiary}
                                withtBorder={false}
                                onClick={() => handleOnClickFilters(CREATEDBYME)}>
                                Created by me
                            </Button>
                        </div>
                        <div className="relative w-full">
                            <Table>
                                <thead>
                                    <tr>{columnList}</tr>
                                </thead>
                                <tbody>
                                    {allProdes?.slice(0).reverse().map((prode, index) => {
                                        if (filters.addressFilter !== null) {
                                            let participantAddressList = prode.participantsArray?.map(({ beneficiary }) => beneficiary);
                                            if (!participantAddressList?.includes(filters.addressFilter)) {
                                                return
                                            }
                                        }
                                        return (
                                            <tr key={prode.prodeAddress}>
                                                <td>{prode.prodeNickname}</td>
                                                <td>{prode.prodeAddress}</td>
                                                <td>{prode.buyIn}</td>
                                                <td>{prode.participantsArray?.length()}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </CardGradient>
            </div>
        </div>
    );
}