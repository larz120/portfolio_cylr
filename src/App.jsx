import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

export default function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Main/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}