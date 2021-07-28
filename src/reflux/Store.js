import Reflux from "reflux";
import Actions from "./Actions";
import products from "../utils/products.json";

class StatusStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      products: [],
      ads: [],
    };
    this.listenables = Actions;
  }
  onGetProducts() {
    return this.setState({ ...this.state, products: products });
  }
  onGetAds() {}
  onCreateAd() {}
  onUpdateAd() {}
  onRemoveAd() {}
}

export default StatusStore;
