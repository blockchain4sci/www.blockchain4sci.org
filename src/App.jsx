import styles from "./style";
import {
  Mission,
  Roadmap,
  Token,
  Team,
  Footer,
  Navbar,
  Hero,
  CancerTrend,
  Benefit,
  Contact
} from "./components";

{/*
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CancerTrend />
        <Funding />
        <Mission />
        <Roadmap />
        <Benefit />
        <Token />
        <Team />
        <Footer />
      </div>
    </div>
  </div>
);
*/}

const App = () => (
 <>

        <Navbar />
        <Hero />
        <Mission />
        <CancerTrend />
        <Roadmap />
        <Benefit />
        <Token />
        <Team />
        <Contact />
        <Footer />

</>
);

export default App;
