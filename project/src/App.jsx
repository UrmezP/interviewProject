import style from "./App.module.css";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Social from "./pages/Social";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <main className={style.container}>
      <Header />
      <Volunteer />
      <About />
      <Activities />
      <Social />
      <Contact />
    </main>
  );
}

export default App;
