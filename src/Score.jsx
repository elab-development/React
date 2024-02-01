import React, { useState, useEffect } from 'react';

function Score() {
  const [scores, setScore] = useState([]);
  const [prikaziPrompt, setPrikaziPrompt] = useState(true);
  const [promptPrikazan, setPromptPrikazan] = useState(false);


  const handleUnesiNadimak = (score) => {
    const nadimak = window.sessionStorage.getItem("nadimak")
    if( !nadimak){
        const nadimak = window.prompt('Unesite svoj nadimak:');
        window.sessionStorage.setItem("nadimak",nadimak)
    }

    if (nadimak) {
      const noviScore = {
        id: Date.now(),
        nadimak,
        score,
      };
      setScore((prevScore) => [...prevScore, noviScore]);
    }
  };

  useEffect(() => {
    if (prikaziPrompt && !promptPrikazan) {
      const score = window.sessionStorage.getItem('score');
      if (score) {
        handleUnesiNadimak(score);
        setPromptPrikazan(true);
      }
      setPrikaziPrompt(false);
    }
  }, [prikaziPrompt, promptPrikazan]);

  const renderTabelaRezultata = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nadimak</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => (
            <tr key={score.id}>
              <td>{score.id}</td>
              <td>{score.nadimak}</td>
              <td>{score.score==0? 0 : score.score-1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Rezultati</h2>
      {scores.length > 0 && renderTabelaRezultata()}
    </div>
  );
}

export default Score;