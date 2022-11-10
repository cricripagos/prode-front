
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
];

export default function Tournaments() {
    const [filters, setFilters] = useState({ addressFilter: null, nicknameFilter: null, searchFilter: '' });
    const { walletAddress, allProdes, connectWalletPressed } = useConnect();

    const columnList = columns.map(item =>
        <th className="px-4 py-2 text-emerald-600">{item.label}</th>
    )

    const onChangeFilters = (event) => {
        const { target: { value } } = event;
        setFilters(prevFilters => ({ ...prevFilters, searchFilter: value }));
    };

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
        <div>
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
                <CardGradient>
                    <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>Search tournament</Text>
                    <div className='flex flex-row w-full justify-between mt-4'>
                        <form className='flex flex-row'>
                            <input onChange={onChangeFilters} type="text" className='rounded-md text-[#262333] focus:outline-none px-3 py-3 mr-3' />
                            <div>
                                {allProdes.slice(0).reverse().map((prode, index) => {
                                    if (filters.searchFilter !== null) {
                                        if (filters.searchFilter !== '' && prode.prodeAddress?.includes(filters.searchFilter)) {
                                            return <p>Address:  {prode.prodeAddress} click-prodeLanding</p>
                                        }
                                        if (filters.searchFilter !== '' && prode.prodeNickname?.includes(filters.searchFilter)) {
                                            return <p>Nickname:  {prode.prodeNickname} click-prodeLanding</p>
                                        }
                                    }

                                })}
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
                    <div className='flex flex-col gap-5 mt-5'>
                        <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>List of tourneys</Text>
                        <div className='flex flex-row w-full justify-between'>
                            <Button variant={Variant.tertiary} withtBorder={false}>Public tourneys</Button>
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
                    </div>

                    <div className="items-center p-10 overflow-hidden rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100">

                        <table className="table-auto">
                            <thead>
                                <tr>{columnList}</tr>
                            </thead>
                            <tbody>
                                {allProdes.slice(0).reverse().map((prode, index) => {
                                    if (filters.addressFilter !== null) {
                                        let participantAddressList = prode.participantsArray.map(({ beneficiary }) => beneficiary);
                                        if (!participantAddressList.includes(filters.addressFilter)) {
                                            return
                                        }
                                    }
                                    return (
                                        <tr >
                                            <td className="px-4 py-2 font-medium border border-emerald-500 text-emerald-600">{prode.prodeNickname}</td>
                                            <td className="px-4 py-2 font-medium border border-emerald-500 text-emerald-600">{prode.prodeAddress}</td>
                                            <td className="px-4 py-2 font-medium border border-emerald-500 text-emerald-600">{prode.buyIn}</td>
                                            <td className="px-4 py-2 font-medium border border-emerald-500 text-emerald-600">{prode.participantsArray?.length}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </CardGradient>
            </div>

        </div>
    );
}