import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddExpense from "./pages/add-expenses";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Switch>
      <Route exact path="/"  component={Home}  />
      <Route exact path="/add"  component={AddExpense}  />


      </Switch>
      
      <Footer/>


      </Router>
      
    </div>
  );
}

export default App;
