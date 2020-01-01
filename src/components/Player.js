import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Player() {
  const {
    state: { isXNext },
  } = useContext(GameContext);

  return <h1>Player: {isXNext ? 'X' : 'O'}</h1>;
}
