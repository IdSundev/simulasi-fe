// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store"
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import HistoriesPage from "./pages/HistoriesPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/histories">
              <HistoriesPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
