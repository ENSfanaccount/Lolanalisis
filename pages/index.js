import React, { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import LoginButton from "./components/login-btn"

const Home = () => {
  const [nickname, setNickname] = useState("")
  const [region, setRegion] = useState("BR1")
  const [loading, setLoading] = useState(false)

  const DefineSearch = (event) => {
    setNickname(event.target.value)
  }

  const DefineRegion = (event) => {
    setRegion(event.target.value)
  }

  return (
    <>
      <Head>
        <title>PageSearch::Dev_Run_William</title>
      </Head>
      <div className="test-information">
      </div>
      <div className="container">
        <div>
        </div>
        {loading ? (
          <h1 className="loading_text">Carregando Dados..</h1>
        ) : (
          <div className="search_container">
            <input
              type="text"
              name="nickname"
              onChange={DefineSearch}
              className="search_input"
              placeholder="Type your nickname"
            />
            <select onChange={DefineRegion} value={region} className="search_options">
              <option value="BR1">BR1</option>
              <option value="EUN1">EUN1</option>
              <option value="EUW1">EUW1</option>
              <option value="JP1">JP1</option>
              <option value="KR">KR</option>
              <option value="LA1">LA1</option>
              <option value="LA2">LA2</option>
              <option value="NA1">NA1</option>
              <option value="OC1">OC1</option>
              <option value="TR1">TR1</option>
              <option value="RU">RU</option>
            </select>
            <Link href={`/search/${region}/${nickname}`}>
              <button onClick={() => setLoading(true)} className="search_button">
                Search
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="login-section">
        <LoginButton />
      </div>
    </>
  )
}

export default Home
