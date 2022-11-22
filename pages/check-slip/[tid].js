import { useState, useEffect } from "react";
import CardMatch from "@components/CardMatch";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Blur, { BlurColor } from "@components/Blur/Blur";
import imageBG from "@assets/images/ballRight.png";
import copaImage from "@assets/images/copa.png";
import ContentTable from "@components/componentsSlip/ContentTable/ContentTable";
import { jsonData, jsonGroups, dataTule } from "../../utils/jsonData/data";
import Button, { Variant } from '@components/Button/Button';
import { useConnect } from '@hooks/useConnect';
import { placeBet } from '@utils/interact';
import Header from '@components/Header/Header';
import { useRouter } from 'next/router'
import { getTournamentData } from "@utils/ProdeFns";
import Text from '@components/Text/Text';
import { getParticipants } from "../../utils/ProdeFns";



export default function BettingSlip() {
  const { walletAddress, connectWalletPressed } = useConnect();
  const [tid, setTid] = useState();
  const [pid, setPid] = useState();
  const [tdata, setTdata] = useState();
  const [player, setPlayer] = useState([]);
  const router = useRouter();

  useEffect(()=>{
      if(!router.isReady) return;
      const { tid, pid } = router.query
      setTid(tid)
      setPid(pid)
      const fetchTdata = async () => {
          const tdata = await getTournamentData(tid);
          const participants = await getParticipants(tid)
          setPlayer(participants?.slice(0).reverse()[pid]);
          setTdata({ // esto lo pongo para no tene q lidiar con indexes de un array
              buyin: tdata[0]/1000000000000000000,
              prodeNickname: tdata[1],
              participants: tdata[2],
              winnerData: tdata[3],
              creator: tdata[4],
              pot: tdata[0]/1000000000000000000*tdata[2],
              weiBuyin: tdata[0]
          })
      }
      fetchTdata()
  }, [router.isReady]);



function handleChangeGroups(event) {
  //const newSlipGroup = slipGroup;
  //newSlipGroup[fixtureId] = [evt.target.home.value, evt.target.away.value];
  //setSlipGroup(newSlipGroup)
  event.preventDefault()


}

  

  const formatData = jsonGroups.map((group) => jsonData.response.filter((partido) => partido.teams.group === group.key));

  return (
    <div className="bg-black">
    <Layout>
      <Header>
          {
              walletAddress.length > 0
                  ? <Button
                      withtBorder={false}
                      variant={Variant.tertiary}>{
                          "Connected: " +
                          String(walletAddress).substring(0, 6) +
                          "..." +
                          String(walletAddress).substring(38)
                      }</Button>
                  : <Button onClick={connectWalletPressed}>
                      Connect Wallet
                  </Button>
          }
      </Header>
      <Blur
        right="-0%"
        top="20%"
        width="20%"
        heightImage="600px"
        variant={BlurColor.primary}
        image={imageBG.src}
      />
      <Grid container spacing={8}>
        <ContentTable data={dataTule} tdata={tdata} player={player} />
      </Grid>
      <div className='w-full container px-8 md:px-28 mx-auto mt-10 md:mt-24'>
        <Button className='w-full' onClick={() =>
                                router.push(`/tournament_details/${tid}`)
                                } >Back to tournament details</Button>
      </div>
      <Blur
        left="0%"
        top="100%"
        width="20%"
        heightImage="600px"
        variant={BlurColor.secondary}
        image={copaImage.src}
      />
    </Layout>
    </div>
  );
}

