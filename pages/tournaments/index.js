import { useState, useEffect } from "react";
import Button, { Variant } from "@components/Button/Button";
import Header from "@components/Header/Header";
import Text from "@components/Text/Text";
import CardGradient from "@components/CardGradient/CardGradient";
import Link from "next/link";
import { useRouter } from "next/router";
import { useConnect } from "@hooks/useConnect";
import SeatchSVG from "@assets/images/search.svg";
import { ReactSVG } from "react-svg";
import { CREATEDBYME, MYTOURNEYSBUTTONNAME } from "../../components/constants";
import Table from "@components/Table/Table";
import Blur from "@components/Blur/Blur";
import BallPNG from "@assets/images/ball-tournaments.png";
import styles from "../../styles/Home.module.css";

import {
  getParticipants,
  getAllProdes,
  getTournamentData,
} from "@utils/ProdeFns";
import { getOctavos } from "../../utils/ProdeFns";
const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "buyin",
    label: "Buy-in",
  },
  {
    key: "players",
    label: "Players",
  },
];

export default function Tournaments() {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [loader, setLoader] = useState(false);
  const { walletAddress, connectWalletPressed } = useConnect();
  const [prodes, setProdes] = useState();
  const [octavos, setOctavos] = useState([]);

  const columnList = columns.map((item) => (
    <th className="px-4 py-2 text-white" key={item.key}>
      {item.label}
    </th>
  ));

  const handleOnClickFilters = (inp) => {
    setOpen(inp);
  };

  const OpenTournaments = ['0xF32C81669d5488004DB3ba2115302b394B0eB71F']

  useEffect(() => {
    const fetchProdes = async () => {
      setLoader(true);
      const prodes = await getAllProdes();
      setProdes(prodes);
      let octavosFull = [];
      
      for (const prodeAddress of OpenTournaments) {
        
        const tournament = await getOctavos(prodeAddress);

        const ttt = {
          prodeNickname : tournament[1],
          prodeAddress : prodeAddress,
          buyIn : tournament[0],
          players : tournament[2]
        }
        
        octavosFull.push({...ttt})
      }
      setOctavos(octavosFull);
      let prodesFull = [];
      for (const prode of prodes) {
        const singleData = await getParticipants(prode["prodeAddress"]);
        prodesFull.push({ ...prode, participantArray: singleData });
      }
      setProdes(prodesFull);
      setLoader(false);
    };
    fetchProdes();
  }, []);
  return (
    <div className="w-full min-h-screen relative bg-black">
      <Blur
        bottom="5%"
        left="20px"
        height="25%"
        width="20%"
        image={BallPNG.src}
        bottomImage="0px"
        leftImage="0px"
      />
      <Header>
        {walletAddress.length > 0 ? (
          <Button withtBorder={false} variant={Variant.tertiary}>
            {"Connected: " +
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)}
          </Button>
        ) : (
          <Button onClick={connectWalletPressed}>Connect Wallet</Button>
        )}
      </Header>
      <div className="container relative w-full  px-8 pt-8 mx-auto md:px-28">
        <CardGradient className="md:!p-16 !z-10">
          <div className="flex flex-col gap-5 mt-16">
            <Text
              tag={"h2"}
              color={"#64CC98"}
              fontSize="36px"
              fontSizeSm={"16px"}
            >
              List of tournaments
            </Text>
            <div className="flex flex-row w-full space-x-4">
              <Button
                activated={open == true}
                variant={Variant.tertiary}
                withtBorder={false}
                onClick={() => {
                  handleOnClickFilters(true);
                }}
              >
                Round of 16 (open)
              </Button>
              <Button
                variant={Variant.tertiary}
                withtBorder={false}
                activated={open == false}
                onClick={() => {
                  handleOnClickFilters(false);
                }}
              >
                Group Stage (closed)
              </Button>
            </div>
            <div className="relative">
              <Table className="table-auto rounded-lg">
                <thead>
                  <tr>{columnList}</tr>
                </thead>
                <tbody style={{border: "0px"}}>
                {(open ? octavos : prodes)
                    ?.slice(0)
                    .reverse()
                    .map((prode, index) => {
                      return (
                        <tr className={styles.a}
                        onClick={() =>
                          router.push({
                            pathname: `/tournament_details/${prode.prodeAddress}`,
                            query: {open: open                                                                            
                            }})} key={prode.prodeAddress}>
                          <td><p className="text-lg mx-2 ...">{prode.prodeNickname}</p></td>
                          <td
                            
                          >
                            {prode.prodeAddress}
                          </td>
                          <td>
                          <p className="text-lg ...">{prode.buyIn/1000000000000000000} xDai</p>
                            </td>
                          <td>
                            {loader ? (
                              <div className={styles.spinner}></div>
                            ) : (
                              <p className="text-lg ...">{ prode.participantArray ? prode.participantArray?.length : prode.players} </p>
                             
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </div>
        </CardGradient>
      </div>
    </div>
  );
}
