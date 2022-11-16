const Web3 = require('web3');
const chainstackURL = process.env.NEXT_PUBLIC_CHAINSTACK;
const factoryAddress ='0xF2a497D82ABe5b2092C446eE3da4c2adf126D931';
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
const factoryABI =  require('./abi/prodeFactory.json');

export const getParticipants = async (address) => {
    const prode = await new web3.eth.Contract( singleProdeABI, address )
    const participants = await prode.methods.debugRetrieveParticipants().call()
    return participants
}
export const getTournamentData = async (address) => {
  const prode = await new web3.eth.Contract( singleProdeABI, address )
  const tdata = await prode.methods.debugRetrieveProdeData().call()
  return tdata
}
export const getAllProdes = async () => {
  const prode = await new web3.eth.Contract( factoryABI, factoryAddress )
  const allprodes = await prode.methods.retrieveProdes().call()
  return allprodes
}