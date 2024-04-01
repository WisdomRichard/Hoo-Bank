import React from 'react'
import styles from './style'
import {Navbar, Hero, Stats, Business, Billing, CTA, Clients, CardDeal, Footer, Testimonials} from './components'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <Navbar/>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <Hero/>
        </div>
        <div className={`bg-primary ${styles.paddingX}`}>
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>
        </div>
    </div>
)
export default App
