import React from 'react';
import cn from 'clsx';

export const Button = ({ children, disabled, type = 'text', isCounterButton = false, ...rest }) => {
  return (
    <button
      className={cn('Button', {'CounterButton': isCounterButton})}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
