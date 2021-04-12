import React from 'react';
import { Route } from 'react-router-dom';

import { Wrapper } from './Wrapper'

export const WrappedRoute = (props) => {
  return (
    <Wrapper>
      <Route {...props} />
    </Wrapper>
  )
}
