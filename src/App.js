import './App.css';
import BreathingAnimation from './components/BreathingAnimation';

function App() {
  return (
    <div className="App">
   
      <div className="headertext">
          <h1 className="gradient-text">You're having a panic attack</h1>
          <h3>....you are going to be ok, this is temporary. </h3>
          <br></br>
          <h3> This is just Adrenaline going silly and overwhelming your bodys fight/flight response.</h3>
          </div>

    <sidecolumn1>
    <div className="box">
    <h2>Speak* </h2>
    <p>8 things you can see</p>
      <p>4 things you can touch</p>
      <p>2 things you can hear</p>
      <p>1 thing you can smell</p>
      <p>repeat.</p>
      <br></br>
      <p className="smalltext">If you can't hear/smell keep going with the others *out loud</p>
    </div>
    </sidecolumn1>

     <div className="sidecolumn2">
    <div className="box">
      <h2>Breath</h2>
     <BreathingAnimation/>
    </div>
    </div>
    <p>*try eating a sour sweet and putting ice on your wrists</p>
  </div>
  );
}

export default App;
