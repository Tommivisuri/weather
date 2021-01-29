// Tommi Visuri
import './App.css';
import {useState} from 'react';



function App() {
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [bottles, setBottles] = useState("female");
  const [time, setTime] = useState();
  const [alcometer, setAlcometer] = useState(0);



  function handleSubmit(e) {
    e.preventDefault();
    let burning = weight / 10;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let grams2 = grams - (burning * time);
    let alcometer = 0;
  
    if (gender === "1") {
      alcometer = grams2 / (weight * 0.7)
  
    } else  {
      alcometer = grams2 / (weight * 0.6)
    }
    setAlcometer(alcometer);
  
  
  
   
  }



return (

  
<div class="container"> 
  <h1>Alcometer calculator</h1>
  <form onSubmit={handleSubmit}>
    <div class="form-group">
      <label>Weight: </label>
      <input class="form-control" type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
    </div>

    <div class="form-group">
      <label>Bottles: </label>
      <input class="form-control" type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
    </div>

    <div class="form-group">
      <label>Time: </label>
      <input class="form-control" type="number" value={time} onChange={e => setTime(e.target.value)}></input>
    </div>
    <div class="form-group">
    <label>Gender: </label>
    <div>
     <input class="form-control" type="radio" name="gender" value="1" 
       onChange={e => setGender(e.target.value)}></input>
       <label for="male">Male</label>

    
      <input class="form-control" type="radio" name="gender" value="2" 
       onChange={e => setGender(e.target.value)}></input>
       <label for="female">Female</label>
    </div>
    </div>

    <div class="form-group">
      <label>Results: </label>
      <output>{alcometer.toFixed(2)}</output>
    </div>

    <button class="btn btn-danger">Calculate</button>
    



  </form>
</div>
);
}

export default App;
