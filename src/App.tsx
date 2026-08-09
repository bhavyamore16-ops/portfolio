import reactLogo from "./assets/react.svg";
import profilePic from "./assets/profilepicture.jpg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <Header />
      <section id="center">
        <div className="hero">
          <img
            src={profilePic}
            className="profile-pic"
            width="170"
            height="179"
            alt=""
          />
        </div>
        <Intro />
      </section>
      <section id="spacer"></section>
    </>
  );
}

export default App;
