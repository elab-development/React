import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PonudjenOdgovor from './PonudjenOdgovor';
import Rezultat from './Rezultat';

const Pitanje = ({ pitanja }) => {
  const { id } = useParams();

  const trenutnoPitanje = pitanja.find(pitanje => pitanje.id === Number(id));
  const [odgovorKorisnika, setOdgovorKorisnika] = useState(null);

  if (!trenutnoPitanje) {
    return <div>Pitanje nije pronađeno.</div>;
  }

  const { pitanje, opcije, tacanOdgovor } = trenutnoPitanje;

  return (
    <div className="pitanje-container">
      <div className="pitanje">
        <h2>{pitanje}</h2>
      </div>
      <div className="odgovori">
        {opcije.map((odgovor, index) => (
          <PonudjenOdgovor 
          key={index}
          odgovor={odgovor} 
          tacanOdgovor={tacanOdgovor}
          setOdgovorKorisnika={setOdgovorKorisnika}
        />
        ))}
      </div>
      {odgovorKorisnika !== null && <Rezultat isCorrect={odgovorKorisnika === tacanOdgovor} />}
    </div>
  );
};

export default Pitanje;