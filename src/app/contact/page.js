import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from '@/app/contact/contact.module.css'
import ContactForm from '../components/ContactForm'

const page = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>
        Contact Us
      </h1>
      <ContactCard/>
      <section className={styles.contact_section}>
        <h2>We'd love to hear <span>from you</span></h2>

        <ContactForm/>

      </section>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5366934519343!2d73.07563567546022!3d33.72093553515221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf15a6320da5%3A0x3a16b44afdea7fee!2sPhulgran%20bhara%20kahu%20islamabad!5e0!3m2!1sen!2s!4v1696314989663!5m2!1sen!2s" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
    </>
  )
}

export default page

