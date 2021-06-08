import React, {useState} from 'react'
import Head from 'next/head';
import Image from 'next/image';
import classes from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {

  const [code, setCode] = useState('');
  return (
    <div className={classes.container}>

      <Head>
        <title>Follow Me There</title>
      </Head>

      <div className={classes.welcoming}>

        <div className={classes.welcoming__image}>
          <Image src='/images/fmt.svg' width='512px' height='auto' alt='site logo' />
        </div>

        <div className={classes.welcoming__text}>
          <h1>Follow Me There helps you to create instructions once and share many times.</h1>
        </div>

      </div>

      <div className={classes.options}>
        <div className={classes.inputbox}>
          <label>Someone gave me a code</label>
          <input type='text' value={code} onChange={(e) => {setCode(e.target.value)}} />
          <button className={classes.search}>
            <Image src='/images/loupe.svg' width='45px' height='45px' alt='search' />
          </button>
        </div> 
        <div className={classes.otherlinks}>
          <div className={classes.linkbox}>
            <Link href=''>How It works?</Link>
          </div>
          <div className={classes.linkbox}>
            <Link href=''>Create one</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
