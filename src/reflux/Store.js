import Reflux from "reflux";
import Actions from "./Actions";

class StatusStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      products: [],
      ads: [],
    };
    this.listenables = Actions;
  }
  onGetProducts() {}
  onGetAds() {}
  onCreateAd() {}
  onUpdateAd() {}
  onRemoveAd() {}
}

export default StatusStore;
