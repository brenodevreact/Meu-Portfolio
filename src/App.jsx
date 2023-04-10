import AboutMe from "./components/AboutMe";
import HardSkills from "./components/HardSkills";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Socials from "./components/Socials";
import { StyledMain } from "./styles/main";

function App() {
  return (
    <div>
      <Header />
      <Socials />
      <StyledMain>
        <Introduction />
        <AboutMe />
        <HardSkills />
      </StyledMain>
    </div>
  );
}

export default App;
