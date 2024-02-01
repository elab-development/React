import React from 'react';

const Rezultat = ({ isCorrect }) => {
  return (
    <div className={`rezultat ${isCorrect ? 'Tacan' : 'Netacan'}`}>
      {isCorrect ? 'Tacan Odgovor!' : 'Netacan odgovor. Probaj ponovo!'}
    </div>
  );
};

export default Rezultat;