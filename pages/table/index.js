import { useState, useEffect } from 'react';
import CardMatch from '../../components/CardMatch';
import Layout from '../../components/layout/Layout'
import styles from "../../styles/Home.module.css"
import Grid from '@mui/material/Grid';

export default function Table() {

    const tableShow = (data) => {
        return (
            <Grid item xs={12} sm={4}>
                <CardMatch local={data} />
            </Grid>
        )
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2022', options)
            .then(response => response.json())
            .then(response => setData(response.response))
            .catch(err => console.error(err));
    }
    
    return (
        <Layout>
            <Grid container spacing={8}>
            {data ? data.map(match => tableShow(match)) : null}
            </Grid>
        </Layout>
    )
}

