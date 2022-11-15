import React, { useEffect, useState, useContext } from 'react';
import Button from '@components/Button/Button';
import Blur from '@components/Blur/Blur';
import Header from '@components/Header/Header'
import Text from '@components/Text/Text';
import CardGradient from '@components/CardGradient/CardGradient';
import { createProde, waitTransaction, getTransactionReceiptMined } from '../../utils/interact';
import { useRouter } from 'next/router'
import { UserContext } from '../../context'
import { useConnect } from '@hooks/useConnect';
import { useWeb3 } from '@hooks/useWeb3';


function CreateTournament() {

    //state variables
    const [status, setStatus] = useState('');
    const { walletAddress, connectWalletPressed } = useConnect();
    const [ validator, setValidator ] =  useState('');
    const [ waiting, setWaiting] = useState(false) // estado para esperar transaccion

    //const { validator, transactionListener } = useWeb3()
    const [txn, setTxn] = useState('');
    const router = useRouter()
/*
    useEffect(() => {
        if(validator != '')
            router.push('/tournaments'); 
    }, [validator]);




    useEffect(() => {
        async function txnListener() {
             await  waitTransaction(txn);
            //setValidator(await  waitTransaction(txn));
            console.log('validator 2:' + validator) 
            console.log(txn)

        }
        txnListener()
    }, [txn]);
*/


    const onCreatePressed = async (event) => {

        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        
        const prode = {
            buyin: event.target.buyin.value,
            hidden: event.target.hidden.value,
            nickname: event.target.nickname.value,
        };
        setWaiting(true)
        const { validator, transaction, status } = await createProde(walletAddress, prode);
        console.log(validator, transaction, status)
        try{
            const [trxMined, newContractAdddress] = await getTransactionReceiptMined(transaction, 1)
            router.push('/tournament_details/'+newContractAdddress)
        }catch (error){
            console.log(error)
            //
        }
        setWaiting(false)
        };

/*
        const { newProdeAddress, validator, transaction, status } = await createProde(walletAddress, prode);
        setStatus(await status);
        setTxn(await transaction);
        console.log(await transaction);
        setTimeout(() => console.log('Waiting for transaction'), 200000);
        console.log(newProdeAddress)
        setValidator(await validator);
        console.log(await validator);
        if(validator != '')
            router.push('/tournament_details');
      };

      async function onCreatePressed(event) {
        await newProde(event);
        setTimeout(() => console.log('Waiting for transaction'), 5000)
        console.log(txn)
        console.log(validator)
        if(validator != '')
            router.push('/tournaments');
      };*/


      function handleChange(evt) {
        setStatus('')
      }

    return (
        <title>Create Tournament</title>,
        <div className="bg-black" style={{height: "100%"}}>
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
            {walletAddress.length > 0 ? (
            <div className="flex justify-center h-max relative">
                <div className="bg-gradient-to-tr from-[#48316D] to-[#1F1F20] w-[550px] h-[950px] justify-center p-[35px] rounded-md mb-[50px]">
                    <h1 className="text-[36px] font-bold text-[#00E5AE]">Create your tournament</h1>
                    <form onSubmit={onCreatePressed}>
                    <p className="text-[22px] font-bold text-white pt-[30px]">Name</p>
                    <input type="text" id="nickname" onChange={handleChange} name="prodeNickname"  className="mt-1 px-3 py-2 mt-[10px] bg-[#262333] drop-shadow-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Mundialito" />
                    <h3 className="text-[22px] text-white font-bold pt-[30px]">Buy-in</h3>
                    <div className='relative'>
                        <input type="number" id="buyin" onChange={handleChange} name="buyin" className="mt-1 px-3 py-2 mt-[10px] bg-[#262333] drop-shadow-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 relative" placeholder="10 DAI" />
                    </div>
                    <h3 className="text-[22px] font-bold text-white pt-[30px]">Earnings</h3>
                    <div className="bg-[#262333] w-full h-[160px] rounded-md mt-[10px] p-[20px] drop-shadow-md">
                        <div className="flex grid grid-cols-2">
                            <div className="text-[22px] font-light text-white pt-[10px] col-start-1">100<span className='text-[#00E5AE]'> %</span></div>
                            <div className="text-[22px] font-light text-white pt-[10px] col-end-3">Winner</div>
                            </div>
                    </div>
                            {/*
                            <div className="text-[22px] font-light text-white pt-[20px] col-start-1">20%</div>
                            <div className="text-[22px] font-light text-white pt-[20px] col-end-3">Runner up</div>
                            <div className="text-[22px] font-light text-white pt-[20px] col-start-1">10%</div>
                            <div className="text-[22px] font-light text-white pt-[20px] col-start-2">3rd place</div>
                        </div>


                    <div className="grid grid-cols-2 items-end">
                        <div className="text-[22px] text-white pt-[30px]">Hidden Tourney</div>

                    </div>

                    <div class="grid grid-cols-5">
                        <h3 className="col-start-1 col-span-5 text-[22px] text-white pt-[30px] pb-[10px]">UBI donation</h3>
                        
                        <input id="steps-range" type="range" min="0" max="100" value="50" step="25" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-[#7C3AED] col-start-1 col-span-5 mt-[15px]" enabled/>

                        <div className="col-start-1 pt-[10px]">5%</div>
                        <div className="col-start-2 pt-[10px]">25%</div>
                        <div className="col-start-3 pt-[10px]">50%</div>
                        <div className="col-start-4 pt-[10px]">75%</div>
                        <div className="col-start-5 pt-[10px]">100%</div>
                    </div> 
*/}
                    <div className="grid grid-cols-4 items-end">
                        <div className="col-start-1 col-span-3 text-[22px] font-bold text-white pt-[30px]">Hidden Tournament</div>
                        <label className="col-start-4 inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" checked={false} value="0" id="hiddenInput" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E4168F]"></div>
                        </label>
                    </div>
{/*
                    <h3 className="text-[22px] text-white pt-[30px]">Allowed addresses</h3>
                    <input type="text" name="email" class="mt-1 px-3 py-2 mt-[10px] bg-[#262333] drop-shadow-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="0x1973077Cc2Bac3C6622cf2D8383D71124A268acc" />

*/}
                    <div style={{display: "flex", justifyContent: 'center', margin:30}}>
                    { status == '' ?
                        <Button type="submit" className="font-semibold">Launch</Button> :
                        <div>{status}</div>
                    }
                    
                    </div>
                    {waiting? <div> Esperando transaccion !!!!</div>:<div>no estoy esperando transaccion</div>}
                </form>
                </div>
                <Blur className="absolute bottom-0 left-0" />

            </div>
        ) : null
        }        
        </div>
    )
  }
  
  export default CreateTournament
