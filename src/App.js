import React, {useState, useEffect} from 'react';
import './App.css';
import Characters from './components/Character';
import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWars, setStarWars] = useState ([]);

  useEffect(() => {
axios 

.get('https://swapi.dev/api/people/')

.then(response => {
  console.log(response);
  setStarWars(response.data)
})
.catch(err => {
  console.log('there is an error', err);
})
  }, [])

 
  
  


  




  return (
    <div>
    <div className="App">
      <h1>List of Star Wars Characters</h1>
       {starWars.map((item) =>  
<Characters starWars = {item} className= 'Header'/> 
       )}
    </div>
    </div>
  );
}

export default App;
