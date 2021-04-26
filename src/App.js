import logo from './logo.svg';
import './App.css';
import vin from "./Vincenzo 000.jpg";
import vid from "./Solar-Adrenaline.mp4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
          <h1 className="title red">Vincenzo Drama</h1>
          <br />
          <img src={vin} alt="image" width="320" height="440"/>
          <br />
          <img src={"/Vincenzo.jpg"} alt="image" width="320" height="440" />
        </div>
        <h3 className="title red">Vincenzo OST PART 3</h3>
        <video width="460" height="380" controls>
          <source src={vid} type="video/mp4" />
        </video>
        </>
      </header>
    </div>
  );
}

export default App;
