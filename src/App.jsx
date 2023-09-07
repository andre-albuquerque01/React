// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componets/navBar'
import Carousel from './componets/caroseul'
import About from './componets/about'
import Progamation from './componets/programation'
import Youtube from './componets/youtube'
import Instagram from './componets/instagram'
import Contat from './componets/contat'
import Location from './componets/location'
import Footer from './componets/footer'


function App() {

  return (
    <div className='container'>
      <NavBar />
      <aside>
        <section className="oneSection">
          <Carousel />
        </section>
      </aside>
      <article>
        <section className="twoSection">
          <About />
        </section>
        <section className="threeSection">
          <Progamation />
        </section>
        <section className="fourSection">
          <Youtube />
          <Instagram />
        </section>
        <section className="fiveSection">
          <Contat />
        </section>
        <section className="sixSection">
          <Location />
        </section>
      </article>
      <Footer />
    </div>
  )
}

export default App
