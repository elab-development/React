import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './Pocetna';
import Pitanje from './Pitanje';

function App() {
  const [kvizPitanja, setKvizPitanja] = useState([
    {
      id:1,
      pitanje: 'Jerusalimska articoka je po vrsti najslicnija cemu?',
      opcije: ['Krompiru', 'Maslacku', 'Djumbiru', 'Articoki'],
      tacanOdgovor: 'Maslacku'
    },
    {
      id:2,
      pitanje: 'Koja je najduža reka u svetu?',
      opcije: ['Nil', 'Amazona', 'Misisipi', 'Jangce'],
      tacanOdgovor: 'Nil'
    },
    {
      id:3,
      pitanje: 'Koliko je visok najvisi covek na svetu?',
      opcije: ['260cm', '267cm', '271cm', '274cm'],
      tacanOdgovor: '271cm'
    },
    {
      id:4,
      pitanje: 'Koja planeta je po veličini druga najveca u Sunčevom sistemu?',
      opcije: ['Jupiter', 'Saturn', 'Uran', 'Zemlja'],
      tacanOdgovor: 'Saturn'
    },
    {
      id:5,
      pitanje: 'Ko je autor knjige "Rat i mir"?',
      opcije: ['Charles Dickens', 'Leo Tolstoy', 'Fyodor Dostoevsky', 'Jane Austen'],
      tacanOdgovor: 'Leo Tolstoy'
    }
  ]);
  return (
    <BrowserRouter>

     <Routes>
         <Route path='/' element={ <Pocetna></Pocetna>}></Route>
         <Route path='/kviz/:id' element={ <Pitanje pitanja={kvizPitanja}></Pitanje>}></Route>


     </Routes>
    </BrowserRouter>
 );
}

export default App;
