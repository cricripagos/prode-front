import { useState, useEffect } from "react";
import CardMatch from "../../components/CardMatch";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Blur, { BlurColor } from "@components/Blur/Blur";
import imageBG from "@assets/images/ballRight.png";
import copaImage from "@assets/images/copa.png";
import ContentTable from "../../components/components/ContentTable/ContentTable";
import { dataOctavos } from "@utils/jsonData/octavos";
import Button, { Variant } from '@components/Button/Button';
import { useConnect } from '@hooks/useConnect';
import { placeBet } from '@utils/interact';
import Header from '@components/Header/Header';
import { useRouter } from 'next/router'
import { getTournamentData } from "@utils/ProdeFns";
import Text from '@components/Text/Text';



export default function BettingSlip() {
  const { walletAddress, connectWalletPressed } = useConnect();
  const [status, setStatus] = useState("");
  const [tid, setTid] = useState()
  const [tdata, setTdata] = useState()
  const [slipGroup, setSlipGroup] = useState([[],[]])
  const [open, setOpen] = useState()
  const [slip, setSlip] = useState({groups:[[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], 
    [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]],
    topPicks:[null,null,null,null],nickname:''})
  const router = useRouter()

  useEffect(()=>{
      if(!router.isReady) return;
      const { tid, open } = router.query
      setTid(tid)
      setOpen(open)
      const fetchTdata = async () => {
          const tdata = await getTournamentData(tid)
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


  const onPlaceBetPressed = async (event) => {

    // Stop the form from submitting and refreshing the page.
  event.preventDefault()

  const { status } = await placeBet(walletAddress, tid, slip, tdata);
  setStatus(status);

};

function handleChangeGroups(event) { event.preventDefault() };

  
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
        <ContentTable data={dataOctavos} handleChangeGroups={handleChangeGroups} 
          slip={slip}
          setSlip={setSlip}
          tdata={tdata}
        />
      </Grid>
      
      <Text
          fontSize='36px'
          lineHeight='40px'
          fontSizeSm={'10px'}
          className="mt-6 text-center"
          style={{ color: '#E4168F', marginTop: '30px' }}
      >
          {status}
      </Text>
      <div className='w-full container px-8 md:px-28 mx-auto mt-10 md:mt-24'>
        <Button className='w-full' onClick={onPlaceBetPressed} >Place Bet</Button>
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

