import { useState } from 'react';

import DataRow from '../../components/layout/DataRow'
import Layout from '../../components/layout/Layout'
import styles from "../../styles/Home.module.css"

export default function Home({ teams }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [teamsFiltered, setTeamsFiltered] = useState(teams);

  const search = (e) => {
    const search = e.target.value;
    setSearchTerm(e.target.value);
    const t = teams.filter(team => {
      return team.name.includes(search);
    });
    setTeamsFiltered(t);
  }

  return (
    <Layout>


      <DataRow heading={true} name="Team" stata="Short name" statb="Founded" statc="National team" />
      {
        teamsFiltered.map(team => (
          <DataRow key={team.id} id={team.id} imageUrl={team.logo_path} name={team.name} stata={team.short_code} statb={team.founded} statc={team.national_team} />
        ))
      }
      {teamsFiltered.any ? (<h1 className={styles.no__data}>No teams. <h3>Try another search term.</h3></h1>) : null}
    </Layout>
  )
}

export async function getStaticProps() {
  
    const token = 'q6C5WQmEk1FWw4PMEHY2mrSU1AzqH4O1uSDmUHN8L9mnIcORZ01yKkd6cVal';
  const URL = `https://soccer.sportmonks.com/api/v2.0/countries/320/teams?api_token=${token}`;
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const res = await fetch(URL, requestOptions);
  const data = await res.json();

/*  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1abcebac35emshed26a192fe895f0p13feabjsn81a81a3f7d68',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

const res =  await fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2022', options)
const data = await res.json()
*/
  return {
    props: {
      'teams': data.data
    }
  }
}