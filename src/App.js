import Reflux from "reflux";
import store from "./reflux/Store";
import Actions from "./reflux/Actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexView from "./components/IndexView";
import NavigationBar from "./components/NavigationBar";
import ReadView from "./components/ReadView";

class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = store;
  }
  componentDidMount() {
    Reflux.initStore(store);
    Actions.getProducts();
    Actions.getAds();
  }

  createAd = (ad) => Actions.createAd(ad);
  updateAd = (ad) => Actions.updateAd(ad);
  removeAd = (adId) => Actions.removeAd(adId);

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
          <Route
            path="/ads/:id"
            render={(props) => (
              <ReadView
                adsList={this.state.ads}
                removeAd={this.removeAd}
                {...props}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
