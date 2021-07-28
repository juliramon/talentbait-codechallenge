import Reflux from "reflux";
import store from "./reflux/Store";
import Actions from "./reflux/Actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexView from "./components/IndexView";
import ReadView from "./components/ReadView";
import AdsView from "./components/AdsView";

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
        <Router>
          <Route
            exact
            path="/"
            render={(props) => (
              <IndexView productsList={this.state.products} {...props} />
            )}
          />
          <Route
            exact
            path="/ads"
            render={(props) => <AdsView adsList={this.state.ads} {...props} />}
          />
          <Route
            path="/ads/:id"
            render={(props) => (
              <ReadView
                adsList={this.state.ads}
                removeAd={this.removeAd}
                createAd={this.createAd}
                updateAd={this.updateAd}
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
