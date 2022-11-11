import { useState, useEffect } from "react";
import CardMatch from "../../components/CardMatch";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Blur, { BlurColor } from "@components/Blur/Blur";
import imageBG from "@assets/images/ballRight.png";
import copaImage from "@assets/images/copa.png";
import ContentTable from "./components/ContentTable/ContentTable";
import { jsonData, jsonGroups } from "./jsonData/data";
import Link from 'next/link';
import Button, { Variant } from '@components/Button/Button';

export default function Table() {
  const formatData = jsonGroups.map((group) => jsonData.response.filter((partido) => partido.teams.group === group.key));
  return (
    <Layout>
      <Blur
        right="-0%"
        top="20%"
        width="20%"
        heightImage="600px"
        variant={BlurColor.primary}
        image={imageBG.src}
      />

      <Grid container spacing={8}>
        <ContentTable data={formatData} />
      </Grid>
      <div className='w-full container px-8 md:px-28 mx-auto mt-40 md:mt-24'>
                            <Link href="/tournament_details"><Button className='w-full' >Place Bet</Button></Link>
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
  );
}
