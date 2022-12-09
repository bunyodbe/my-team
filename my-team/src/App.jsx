import styles from "./styles";
import { Navbar, Footer } from "./components";
import { About, Contact, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="bg-midnightGreen w-full overflow-x-hidden relative">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkGreen`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
