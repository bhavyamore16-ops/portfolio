
import profilePic from "./assets/profilepicture.jpg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Learningexperienc from "./components/Learningexperienc";
import Languages from "./components/Languages";

function App() {
  return (
    <>
      <Header />
      <section id="center">
        <div className="buttons">
            <button className="btn1">Download Resume</button>
            <button className="btn2">Visit Github</button>
        </div>
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
        <hr /> 
      </section>
      
      <Learningexperienc/>
      <Languages/>
  
    </>
  );
}

export default App;
