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
const singleProdeABI = require('./abi/prodeBeta.json'); // tomo el ABI del prode puntualmente

export const getParticipants = async (address) => {
    console.log(address)
    const prode = await new web3.eth.Contract( singleProdeABI, address )
    const participants = await prode.methods.debugRetrieveParticipants().call()
    return participants
}
