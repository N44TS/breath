import React, { useState, useEffect } from 'react';
import './BreathingAnimation.css';

function BreathingAnimation() {
  const [animation, setAnimation] = useState('inhale');
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter - 1);
      if (animation === 'inhale' && counter === 1) {
        setAnimation('hold');
        setCounter(7);
      } else if (animation === 'hold' && counter === 1) {
        setAnimation('exhale');
        setCounter(8);
      } else if (animation === 'exhale' && counter === 1) {
        setAnimation('inhale');
        setCounter(4);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [animation, counter]);

  return (
    <div className="container">
      <div className={`circle ${animation}`}>
      <div className="instructions-container">
        {animation === 'inhale' && <p className="instructions">Inhale</p>}
        {animation === 'hold' && <p className="instructions">Hold</p>}
        {animation === 'exhale' && <p className="instructions">Exhale</p>}
        <p className="timer">{counter}</p>
        </div>
      </div>
    </div>
  );
}

export default BreathingAnimation;
