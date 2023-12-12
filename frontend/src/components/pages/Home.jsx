import React from 'react'

import dollar from '../../assets/dollar.gif'

import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <div className='home-container'>

        <div className='wrapper'>
            <p>adan chuttu alkdsasdhkas kasbdcjha cnliucbajh lja hja;j ahujaauohjlasohsdsjloud hbn uhq hj u aun jhah nm ji j svjh yuhs jn</p>
            <Link to='/addRecord'>
                <img src={dollar} alt='img'/>
                Sale
            </Link>
        </div>

    </div>
  )
}

export default Home