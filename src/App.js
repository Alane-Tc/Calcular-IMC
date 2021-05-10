import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import DefaultLayout from './components/menu'
import Footer from './components/footer'
import Home from './pages/Home'
import Calculadoras from './pages/calculadora'

function App() {
  return (
    <div className="App">
      <Router>
        <DefaultLayout />
        <Switch>
          {/*HOME*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />

          {/*Calculadora*/}
          <Route exact path="/calculadoras" component={Calculadoras} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
