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

const SearchBox = ({ search, prodes }) => {
  let results = [];
  const router = useRouter();

  prodes
    ?.slice(0)
    .reverse()
    .map((prode, index) => {
      if (prode.prodeAddress == search && prode.hidden) {
        results.push(["Hidden Address: " + prode.prodeAddress,prode.prodeAddress]);
      } else {
        if (prode.prodeAddress?.includes(search) && !prode.hidden) {
          results.push(["Address: " + prode.prodeAddress,prode.prodeAddress]);
        }
      }
      if (
        prode.prodeNickname?.toLowerCase() == search.toLowerCase() &&
        prode.hidden
      ) {
        results.push(["Hidden Name: " + prode.prodeNickname,prode.prodeAddress]);
      } else {
        if (
          prode.prodeNickname?.toLowerCase().includes(search.toLowerCase()) &&
          !prode.hidden
        ) {
          results.push(["Name: " + prode.prodeNickname,prode.prodeAddress]);
        }
      }
    });
  return (
    <div className="absolute z10 top-16 w-full bg-gray-500 rounded p-2">
      {results.map((result, index) => {
        return <p  className={'cursor-pointer ' + styles.a } onClick={() =>
          router.push(`tournament_details/${result[1]}`)
        }  key={result[0] + index.toString()}>
          {result[0]} </p>;
      })}
    </div>
  );
};

export default function Tournaments() {
  const [filters, setFilters] = useState({
    addressFilter: null,
    nicknameFilter: null,
  });
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const { walletAddress, connectWalletPressed } = useConnect();
  const [prodes, setProdes] = useState();

  const columnList = columns.map((item) => (
    <th className="px-4 py-2 text-white" key={item.key}>
      {item.label}
    </th>
  ));
  const onChangeFilters = (event) => {
    event.preventDefault();
    setFilters((prevFilters) => ({ ...prevFilters }));
  };

  const onChangeSearch = (event) => {
    const {
      target: { value },
    } = event;
    setSearch(value);
  };

  const handleOnClickFilters = (inp) => {
    setFilters({ ...filters, addressFilter: inp });
  };
  useEffect(() => {
    const fetchProdes = async () => {
      setLoader(true);
      const prodes = await getAllProdes();
      setProdes(prodes);
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
                activated={filters.addressFilter == null}
                variant={Variant.tertiary}
                withtBorder={false}
                onClick={() => handleOnClickFilters(null)}
              >
                Round of 16
              </Button>
              <Button
                variant={Variant.tertiary}
                withtBorder={false}
                activated={filters.addressFilter !== null}
                onClick={() => handleOnClickFilters(walletAddress)}
              >
                Group Stage
              </Button>
            </div>
            <div className="relative">
              <Table className="table-auto rounded-lg">
                <thead>
                  <tr>{columnList}</tr>
                </thead>
                <tbody style={{border: "0px"}}>
                  {prodes
                    ?.slice(0)
                    .reverse()
                    .map((prode, index) => {
                      if (filters.addressFilter !== null) {
                        let participantAddressList =
                          prode.participantArray?.map(({ beneficiary }) =>
                            beneficiary.toLowerCase()
                          );
                        if (
                          !participantAddressList?.includes(
                            filters.addressFilter
                          )
                        ) {
                          return;
                        }
                      }
                      return (
                        <tr className={styles.a}
                        onClick={() =>
                          router.push(`tournament_details/${prode.prodeAddress}`)
                        }  key={prode.prodeAddress}>
                          <td><p class="text-lg mx-2 ...">{prode.prodeNickname}</p></td>
                          <td
                            
                          >
                            {prode.prodeAddress}
                          </td>
                          <td>
                          <p class="text-lg ...">{prode.buyIn/1000000000000000000} xDai</p>
                            </td>
                          <td>
                            {loader ? (
                              <div className={styles.spinner}></div>
                            ) : (
                              <p class="text-lg ...">{ prode.participantArray?.length} </p>
                             
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
