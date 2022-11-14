const Web3 = require('web3');
const chainstackURL = "wss://ws-nd-492-780-425.p2pify.com/09bdaa710dbe42c3ae63db6d136f3f19";

const options = {
  // Enable auto reconnection
  reconnect: {
      auto: true,
      delay: 5000, // ms
      maxAttempts: 5,
      onTimeout: false
  }
};

const ws = new Web3.providers.WebsocketProvider(chainstackURL, options) 
const web3 = new Web3(ws)
// const signer = web3.getSigner();

const contractABI = require('./abi/prodeFactory.json');
const singleProdeABI = require('./abi/prodeBeta.json'); // tomo el ABI del prode puntualmente

const contractAddress ='0xE3034D110cE1941BbF0c68377f0d7D57f600ECa9';

const prodeContract = new web3.eth.Contract(
    contractABI,
    contractAddress
)


export const loadCurrentMessage = async () => { 
    const prodes = await prodeContract.methods.retrieveProdes().call();

    return prodes;  
};

export const loadProdesFullyByTule = async() => {
  const prodes = await prodeContract.methods.retrieveProdes().call();
  let prodesFull = [];
  for (const prode of prodes){
    const singleProdeContract = new web3.eth.Contract( singleProdeABI, prode['prodeAddress'] )
    const singleProdeData = await singleProdeContract.methods.debugRetrieveParticipants().call();
    prodesFull.push({...prode, participantsArray: singleProdeData})

  }
  console.log(prodesFull)
  return prodesFull
};


export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a name for your tourney",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
        return {
            address: "",
            status: ( "🦊 You must install Metamask, a virtual Ethereum wallet, in your browser.")
        };
    };
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a name for your tourney",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: ("You must install Metamask 🦊")
    };
 };
}; 

export const createProde = async (address, prode) => {
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain.",
    };
  }
  
  if (prode.nickname?.trim() === "Choose a cool name for your tourney!") {
    return {
      status: "❌ Your tourney need a name.",
    };
  }

  if (prode.buyin?.trim() === '') {
    return {
      status: "❌ Your tourney need a buy-in amount.",
    };
  }
  
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: prodeContract.methods.createProde(prode.buyin, prode.hidden, prode.nickname).encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: (
        <span>
          ✅{" "}
          <a target="_blank" href={`https://gnosisscan.io/${txHash}`}>
            View the status of your transaction on Gnosisscan!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      ),
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};


/////////////////////////////////////////////////// BETTING SLIP \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const loadSingleProde = async() => {
  /// Falta quitar hardcodeo y usar prode['prodeAddress']
  const singleProdeContract = new web3.eth.Contract( singleProdeABI, '0xF4C1EF14c8d0659D95D972f093442eF715cB5186')
  const singleProdeData = await singleProdeContract.methods.debugRetrieveParticipants().call();
  console.log(singleProdeData)
  return singleProdeData
}

export const placeBet = async (address, betSlip) => {

  const singleProdeContract = new web3.eth.Contract( singleProdeABI, '0xF4C1EF14c8d0659D95D972f093442eF715cB5186' )
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain.",
    };
  }

  // NO PUEDO HARDCODEAR EL VALOR DE VALUE. 
  //set up transaction parameters
  const buyin = 500

  const transactionParameters = {
    to: '0xF4C1EF14c8d0659D95D972f093442eF715cB5186', // Required except during contract publications.
    from: address, // must match user's active address.
    data: singleProdeContract.methods.createParticipant(betSlip.picksGroups, betSlip.picksTops, betSlip.nickname).encodeABI(),
    value: '1388',
    gasLimit: '300000',
  };


  //sign the transaction
  try {
   
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    }
    
    );    
     /*
    const txHash = await singleProdeContract.methods.createParticipant(betSlip.picksGroups, betSlip.picksTops, betSlip.nickname).call({ 
                                                                to: '0xF4C1EF14c8d0659D95D972f093442eF715cB5186', // Required except during contract publications.
                                                                from: address, // must match user's active address. })
                                                                value: 5000 });*/
    
    console.log("Mining...", txHash);

    console.log("Mined -- ", txHash.hash);

    return {
      status: (
        <span>
          ✅{" "}
          <a target="_blank" href={`https://gnosisscan.io/${txHash}`}>
            View the status of your transaction on Gnosisscan!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      ),
    };
  } catch (error) {
    console.log(error);   
    return {
      status: "😥 " + error.message,
    };
  }
};