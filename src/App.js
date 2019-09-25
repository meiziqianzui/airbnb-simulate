import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './home/Index';
import Renthomes from './rentHomes/Renthomes';
import Experience from './experience/Experience';
import Story from './story/Story';
import Safety from './rentHomes/rent/Safety';
import Setup from './rentHomes/rent/Setup';
import Financials from './rentHomes/rent/Financials';
import Details from './home/Details'
import Region from './home/Region';
import ProductContent from './home/ProductContent'
import Test from './Test';
import './index.css';
import Product from './home/Product';

function App() {
  return (
    <Router>
      <Route exact path="/" component = { Index } />
      
      <Route path="/Region/:aid" component = { Region } />
      <Route path="/Details/" component = { Details } />
      <Route path="/1/" component = { ProductContent } />

      <Route exact path="/renthomes/" component={Renthomes}  />
      <Route path="/experience/" component={Experience}  />

      <Route exact path="/story/featured/" component={Story}  />

      <Route path="/product/:aid" component={Product}  />

      <Route path="/renthomes/safety/" component={Safety}  />
      <Route path="/renthomes/setup/" component={Setup}  />
      <Route path="/renthomes/financials/" component={Financials}  />

    </Router>
  );
}

export default App;
