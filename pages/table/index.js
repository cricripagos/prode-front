import { useState, useEffect } from 'react';
import CardMatch from '../../components/CardMatch';
import Layout from '../../components/layout/Layout'
import styles from "../../styles/Home.module.css"
import Grid from '@mui/material/Grid';

export default function Table() {

    const tableShow = (data) => {
        return (
            <Grid item xs={4} sm={4}>
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
                'X-RapidAPI-Key': '14078dc643msh7a8230ad2bce94ep1157c2jsn0069eddf4714',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2022', options)
            .then(response => response.json())
            .then(response => setData(response.response))
            .catch(err => console.error(err));
    }

    console.log(data)
    return (
        <Layout>
            <Grid container spacing={8}>
            {data ? data.map(match => tableShow(match)) : null}
            </Grid>
            <h1>hola</h1>
        </Layout>
    )
}

