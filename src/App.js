import "./styles/main.scss";
import Reflux from "reflux";
import store from "./reflux/Store";
import Actions from "./reflux/Actions";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <IndevView productsList={this.state.products} {...props} />
          )}
        />
      </Router>
    );
  }
}
