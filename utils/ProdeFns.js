const Web3 = require('web3');
const chainstackURL = process.env.NEXT_PUBLIC_CHAINSTACK;
const factoryAddress ='0xeE04C13A9260D5C07335B0212650b19d601Fe62D';
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
const octavosABI = require('./abi/ProdeOct.json');
/*
export const getParticipants = async (address, status) => {

    const abi = !status ? singleProdeABI : octavosABI;
    const prode = await new web3.eth.Contract( abi, address );
    const participants = await prode.methods.debugRetrieveParticipants().call();
    return participants
}
*/

export const getParticipants = async (address) => {

  const prode = await new web3.eth.Contract( singleProdeABI, address );
  const participants = await prode.methods.debugRetrieveParticipants().call();
  return participants
}
export const getParticipantsOctavos = async (address) => {

  const prode = await new web3.eth.Contract( octavosABI, address );
  const participants = await prode.methods.debugRetrieveParticipants().call();
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

export const getOctavos = async (address) => {
  const prode = await new web3.eth.Contract( octavosABI, address )
  const octavos = await prode.methods.debugRetrieveProdeData().call()
  return octavos
}