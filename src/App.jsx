import styles from './style'
import {Navbar,Hero,Stats,
  Business ,
  Billing,
  CardDeal, 
  Testimonials, 
  Clients ,
  CTA ,
  Footer } from './components'


const App = () => {
  return (
    <div className='bg-primary  w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexcenter}`}>
        <div className={`${styles.boxwidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexstart}`}>
        <div className={`${styles.boxwidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexstart}`}>
        <div className={`${styles.boxwidth}`}>
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
    </div>
  )
}

export default App