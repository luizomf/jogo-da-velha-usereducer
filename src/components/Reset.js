import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Board() {
  const { dispatch } = useContext(GameContext);

  function handleClick() {
    dispatch({ type: 'RESET' });
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}
