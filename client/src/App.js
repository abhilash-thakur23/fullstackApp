import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FilteredNews from "./components/filtered-news.component";
import LatestNews from "./components/latest-news.component";

function App() {
  return (<Router>
   <Switch>
   <Route path='/register' >
      // component 1
      <FilteredNews />
   </Route>
   <Route path='/login' >
      // component 2
      <LatestNews />
   </Route>
</Switch> 
  </Router>
  );
}

export default App;


