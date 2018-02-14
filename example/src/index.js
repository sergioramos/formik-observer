import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

import Hello from './hello';
import Age from './age';

ReactDOM.render(
  <div className="helvetica pa5">
    <Hello />
    <Age />
  </div>,
  document.getElementById('root')
);
