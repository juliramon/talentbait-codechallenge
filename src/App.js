import Reflux from "reflux";
import store from "./reflux/Store";
import Actions from "./reflux/Actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexView from "./components/IndexView";
import NavigationBar from "./components/NavigationBar";

class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = store;
  }
  componentDidMount() {
    Reflux.initStore(store);
    Actions.getProducts();
  }

  createAd = (ad) => Actions.createAd(ad);
  updateAd = (ad) => Actions.updateAd(ad);
  deleteAd = (adId) => Actions.deleteAd(adId);

  render() {
    return (
      <div className="app">
        <NavigationBar />
        <Router>
          <Route
            exact
            path="/"
            render={(props) => (
              <IndexView productsList={this.state.products} {...props} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
