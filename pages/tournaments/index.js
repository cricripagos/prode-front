
import React, { useEffect, useState } from 'react';
import Button, { Variant } from '@components/Button/Button';
import Header from '@components/Header/Header';
import Text from '@components/Text/Text';
import CardGradient from '@components/CardGradient/CardGradient';
import { connectWallet, 
        getCurrentWalletConnected,
        loadCurrentMessage,
        loadProdesFullyByTule,
    } from '../../utils/interact'
import Link from 'next/link';

export default function Tournaments() {
  //state variables
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [allProdes, setAllProdes] = useState([]);
    const [filters, setFilters] = useState({addressFilter:null, nicknameFilter:null, searchFilter:''}) // Aca guardo los filtros

  //called only once
    useEffect(() => {
        async function initiate() {
            const {address, status} = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
            addWalletListener();

            getAllProdes();
        }
    initiate()
    }, []);
/////////// COMO LE HAGO PARA SACAR ESTA PARTE??? SE REUTILZA LO MISMO EN CREATE_TOURNAMENT \\\\\\\\\\
    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
                setWallet(accounts[0]);
                setStatus("👆🏽 Write a name for your tourney");
            } else {
                setWallet("");
                setStatus("🦊 Connect to Metamask using the top right button.");
            }
            });
        } else {
            setStatus(
            <p>
                🦊
                <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
                </a>
            </p>
            );
        }
    }
        
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

////////     \\\\\\\\\\\\

    const getAllProdes = async () => {
        const fastprodes = await loadCurrentMessage();
        setAllProdes(fastprodes); // Esta funcion trae solo el retrieve del Factory
        const prodes = await loadProdesFullyByTule();
        setAllProdes(prodes);  // Est afuncion le mete el participant array

        return
  };
  

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
            key: "Players",
            label: "Players",
          },
      ];

    const columnList = columns.map(item => 
            <th className="px-4 py-2 text-emerald-600">{item.label}</th>
    )


    return (
        <div>
            <Header>
                <Button onClick={connectWalletPressed}>
                    {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                    ) : (
                    <span>Connect Wallet</span>
                    )}
                </Button>
            </Header>
            <div className='container relative w-full px-8 pt-8 mx-auto md:px-28'>
                <CardGradient>
                    <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>Search tournament</Text>
                        <div> 
                        <form className='flex flex-col flex-grow'>
                            <div className='flex w-full px-5 py-3 mt-5'>
                                <input onChange={(inputTxt)=>setFilters({...filters, searchFilter:inputTxt.target.value})} type="text" className='rounded-md flex-grow max-w-xs text-[#262333] focus:outline-none'/>
                                
                                <h2>or</h2>
                                {walletAddress.length > 0 ? (
                                <Link href="/create_tournament"><Button>Create your own</Button></Link> ) : (
                                    <Button onClick={connectWalletPressed}>Connect Wallet</Button>
                                )}
                                
                            </div>
                            Esto de aca es l oque habria que poner en un contenedor que flote por debajo del search, mas prolijo
                            <div>
                                {allProdes.slice(0).reverse().map((prode, index) => {
                                    if(filters.searchFilter !==null){
                                        if(filters.searchFilter!==''&&prode.prodeAddress?.includes(filters.searchFilter)){
                                            return<p>Address:  {prode.prodeAddress} click-prodeLanding</p>
                                        }
                                        if(filters.searchFilter!==''&&prode.prodeNickname?.includes(filters.searchFilter)){
                                            return<p>Nickname:  {prode.prodeNickname} click-prodeLanding</p>
                                        }
                                    }
                                    
                                    })}
                                    
                                </div>
                        </form>
                    </div>
                    <div>
                        <div>
                            <h2 className='pl-10 mt-5'>List of tourneys</h2>
                        </div>
                        <div className='flex flex-col gap-5 md:flex-row'> 
                            <button className={filters.addressFilter==null?'bg-[#d82fa5] text-white':'bg-[#333647] text-white'}  type="submit">Public tourneys</button> 
                            <button className={filters.addressFilter!==null?'bg-[#d82fa5] text-white':'bg-[#333647] text-white'}  onClick={filters.addressFilter==null? ()=> setFilters({...filters, addressFilter:walletAddress}) : ()=> setFilters({...filters, addressFilter:null})}>My Tournaments</button>
                            <button className='bg-[#333647] text-white' onClick={filters.addressFilter==null? ()=> setFilters({...filters, addressFilter:"0x130f5E56220c218953824D2997C4870961CBdD24"}) : ()=> setFilters({...filters, addressFilter:null})}>HardCoded_Tule_address_filter</button>
                        </div>
                    </div>

                    <div className="items-center p-10 overflow-hidden rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100">

                        <table className="table-auto">
                            <thead>
                                <tr>{columnList}</tr>   
                            </thead>
                            <tbody>
                                {allProdes.slice(0).reverse().map((prode, index) => {
                                    if(filters.addressFilter !==null){
                                        let participantAddressList = prode.participantsArray.map(({ beneficiary }) => beneficiary);
                                        if(!participantAddressList.includes(filters.addressFilter)){
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