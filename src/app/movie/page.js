import Link from 'next/link'
import React from 'react'
import MovieCard from '@/app/components/MovieCard';
import styles from '@/app/styles/common.module.css'

const page = async () => {
  await new Promise(resolve => setTimeout(resolve,2000));

    const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '867a5f2cafmsh6028367a123669dp1a01edjsn31e4027c6db8',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

  const res = await fetch(url , options);
  const data = await res.json();
  const main_data = data.titles;

  // if (main_data && main_data.jawSummary) {
  //   console.log(main_data.jawSummary);
  // } else {
  //   console.log('jawSummary is undefined or missing in data');
  // }

  return (
    <>
     <section className={styles.movieSection}>
        <div className={styles.container}>
        <h1>Series And Movie</h1>
    <div className={styles.card_section}>
    {
        main_data.map((curElem) => {
            return  <MovieCard key={curElem.id} {...curElem}/>
        })
     }
    </div>
        </div>
     </section>
    </>
  )
}

export default page