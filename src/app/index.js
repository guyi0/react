// lib
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'



// components
import  Layout  from "./components/Layout";
// other

ReactDOM.render((
     <BrowserRouter>
          <Route path="/" component={Layout}/>
     </BrowserRouter>
     ),
     document.getElementById('app')
);