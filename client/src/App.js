import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


// SERVICES
import FilteredNews from "./components/filtered-news.component";
import LatestNews from "./components/latest-news.component";

function App() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    if(!news) {
      getNews();
    }
  })

  const getNews = async () => {
    let res = await newsService.getLatestNews();
    console.log('getting latest News: ',res.data.status);
    setNews(res);
  }

  const renderNews = product => {
    return (
      product.data.articles.map((article) => 
     
      <li>{article}</li>

      )    );
  };

  return (
    function App() {
      return (<Router>
       <Switch>
       <Route path='/api/getFilteredNews' >
          // component 1
          <FilteredNews />
       </Route>
       <Route path='/api/getLatestNews' >
          // component 2
          <LatestNews />
       </Route>
    </Switch> 
      </Router>
      );
    }
  );
}

export default App;
