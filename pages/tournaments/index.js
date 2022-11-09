
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Button, { Variant } from '@components/Button/Button';
import Header from '@components/Header/Header';
import Text from '@components/Text/Text';
import CardGradient from '@components/CardGradient/CardGradient';

export default function Blockchain() {
    const [isConnected, setIsConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [signer, setSigner] = useState(undefined);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true);
        }
    });

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await ethereum.request({ method: "eth_requestAccounts" });
                setIsConnected(true);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setSigner(provider.getSigner());
            } catch (e) {
                console.log(e);
            }
        } else {
            setIsConnected(false);
        }
    }

    async function execute() {
        if (typeof window.ethereum !== "undefined") {
            const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
            const abi = [
                {
                    inputs: [
                        {
                            internalType: "string",
                            name: "_name",
                            type: "string",
                        },
                        {
                            internalType: "uint256",
                            name: "_favoriteNumber",
                            type: "uint256",
                        },
                    ],
                    name: "addPerson",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "string",
                            name: "",
                            type: "string",
                        },
                    ],
                    name: "nameToFavoriteNumber",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256",
                        },
                    ],
                    name: "people",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "favoriteNumber",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "name",
                            type: "string",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [],
                    name: "retrieve",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "_favoriteNumber",
                            type: "uint256",
                        },
                    ],
                    name: "store",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
            ];
            const contract = new ethers.Contract(contractAddress, abi, signer);
            try {
                await contract.store(42);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Please install MetaMask");
        }
    }

    if (!hasMetamask) {
        return (
            <Text tag="h1">Please install metamask</Text>
        )
    }

    return (
        <div>
            <Header>
                {!isConnected && <Button onClick={() => connect()}>Connect</Button>}
                {isConnected && <Button onClick={() => execute()}>Execute</Button>}
            </Header>
            <div className='w-full container relative px-8 md:px-28 mx-auto pt-8'>
                <CardGradient>
                    <Text tag={'h2'} color={'#64CC98'} fontSize='36px' fontSizeSm={'16px'}>Search tournament</Text>
                </CardGradient>
            </div>

        </div>
    );
}