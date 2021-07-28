import Reflux from "reflux";
import Actions from "./Actions";
import products from "../utils/products.json";
import ads from "../utils/ads.json";

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
  onGetAds() {
    return this.setState({ ...this.state, ads: ads });
  }
  onCreateAd() {}
  onUpdateAd() {}
  onRemoveAd(adId) {
    console.log("on remove ad....");
    const ads = this.state.ads;
    const adIndex = ads.findIndex((ad) => ad.adId === adId);
    ads.splice(adIndex, 1);
    return this.setState({ ...this.state, ads });
  }
}

export default StatusStore;
