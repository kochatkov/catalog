import React from 'react';
import { Button } from '../atoms/Button';

export const CounterButton = ({ mark, ...rest }) => {
  return (
    <Button isCounterButton={true} {...rest}><span className="CounterButton__mark">{mark}</span></Button>
  )
}
