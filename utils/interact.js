const Web3 = require('web3');
const chainstackURL = process.env.NEXT_PUBLIC_CHAINSTACK;

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

  if (prode.nickname.trim() === "Choose a cool name for your tourney!") {
    return {
      status: "❌ Your message cannot be an empty string.",
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
