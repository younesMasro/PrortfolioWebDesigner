import logo from './logo.svg';
import './App.css';
import Header from './Compements/Home/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' ;
import HomePage from './Compements/PageContent/HomePage';
import Footer from './Compements/Home/Footer';

function App() {
  return (
    <>

    
    < Router>
     <Header />
     <Switch>
      <Route path='/' exact component={HomePage} />
     </ Switch>
     <Footer></Footer>
     </Router>
    </>
  );
}

export default App;
