import { useEffect, useState } from 'react';
import { getCurrentWalletConnected } from '@utils/connectWallet';
import {
    loadProdes,
    loadSingleProde,
} from '@utils/interact';


export const useWeb3 = () => {
    //state variables
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [allProdes, setAllProdes] = useState([]);
    const [singleProde, setSingleProde] = useState([]);
    const [validator, setValidator] = useState('');



    //called only once
    useEffect(() => {
        async function initiate() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);

            getAllProdes();
            loadProdeInfo();
        }
        initiate()
    }, []);


    const getAllProdes = async () => {

        const prodes = await loadProdes();



        setAllProdes(prodes)
    };

    const loadProdeInfo = async() => {
        const singleProdeData = await loadSingleProde();
        setSingleProde(singleProdeData)
      }
/*
    const transactionListener = async(walletAddress) => {
        const validator = await waitTransaction(walletAddress)
        setValidator(validator)
    }
*/
    return { walletAddress, status, allProdes, singleProde, validator};
}