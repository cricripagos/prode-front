import React from 'react'
import Head from "next/head"
import Header from "components/Header"
import SearchTournament from "components/SearchTournament"

function Search() {
  return (
    <div>
        <Head>
            <title>Search Tournament</title>
        </Head>

        <Header />
        
        <SearchTournament />

    </div>
    
  )
}

export default Search