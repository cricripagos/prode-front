
import React, { useEffect, useState } from 'react';
import Button, { Variant } from '@components/Button/Button';
import Header from '@components/Header/Header';
import Text from '@components/Text/Text';
import CardGradient from '@components/CardGradient/CardGradient';
import { connectWallet, 
        getCurrentWalletConnected,
        loadCurrentMessage,
    } from '../../utils/interact'

export default function Tournaments() {
  //state variables
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("No connection to the network."); //default message
    const [allProdes, setAllProdes] = useState([]);

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



    const getAllProdes = async () => {
        
        const prodes = await loadCurrentMessage();

        const prodesCleaned = prodes.map(prode => {
            return {
                prodeNickname: prode.prodeNickname,
                prodeAddress: prode.prodeAddress,
                buyIn: prode.buyIn,
                hidden: prode.hidden,
            };
        });

        setAllProdes(prodesCleaned)
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
            <div className='w-full container relative px-8 md:px-28 mx-auto pt-8'>
                <CardGradient>
                    <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>Search tournament</Text>
                        <div> 
                        <form className='flex flex-col flex-grow'>
                            <div className='flex w-full mt-5 px-5 py-3'>
                                <input type="text" className='rounded-md flex-grow max-w-xs text-[#262333] focus:outline-none'/>
                                <h2>or</h2>
                                <Button onClick={connectWalletPressed}>
                                    {walletAddress.length > 0 ? (
                                    "Create your own" ) : (
                                    <span>Connect Wallet</span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div>
                            <h2 className='pl-10 mt-5'>List of tourneys</h2>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <button className='bg-[#333647] text-white'  type="submit">Public tourneys</button>
                            <button className='bg-[#333647] text-white' type="submit">My tourneys</button>
                            <button className='bg-[#333647] text-white' type="submit">Created by me</button>
                        </div>
                    </div>

                    <div className="rounded-t-xl items-center overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">

                        <table className="table-auto">
                            <thead>
                                <tr>{columnList}</tr>   
                            </thead>
                            <tbody>
                                {allProdes.slice(0).reverse().map((prode, index) => {
                                    return (
                                        <tr >
                                            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{prode.prodeNickname}</td>
                                            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{prode.prodeAddress}</td>
                                            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{prode.buyIn}</td>
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