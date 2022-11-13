import { useEffect, useState } from 'react';
import {
    connectWallet,
    getCurrentWalletConnected,
} from '@utils/connectWallet';

export const useConnect = () => {
    //state variables
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    //called only once
    useEffect(() => {
        async function initiate() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
            addWalletListener();

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


    return { walletAddress, status, connectWalletPressed};
}