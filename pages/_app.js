import '../styles/globals.css';
import '../styles/fonts.css';
import { UserContext } from '../context.js'
import { useConnect } from '@hooks/useConnect';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  async function walletListener() {
    const { address, status } = await useConnect.addWalletListener();
    setWallet(address);
    setStatus(status);
  }

  return (
    <UserContext.Provider value={walletAddress}>
        <Component {...pageProps} walletListener={walletListener} />
    </UserContext.Provider>
  ) 
}

export default MyApp
