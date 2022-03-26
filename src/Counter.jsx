import  { useState } from 'react';

//começando comm USE chamamos de hook

export function Counter() { 
  const[counter, setCounter ] = useState(0);

    function increment() {
        setCounter(counter + 1); // IMUTABILIDADE GIT
    }

    return( 
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
              Increment
            </button>
        </div>
    );
}