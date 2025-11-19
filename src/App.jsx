import './App.css'
import Name from "./components/Name.jsx";
import UserCard from "./components/UserCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Counter from "./components/Counter.jsx";
import ImageBox from "./components/ImageBox.jsx";
import Hello from "./components/Hello.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Today from "./components/Today.jsx";

function App() {
  return (
    <>
        <Header />
        <Counter />
        <Hello />
        <ImageBox />
        <WelcomeSection />
        <AboutMe />
        <Today />
        <Footer />
    </>
  )
}

export default App
