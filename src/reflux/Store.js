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
  onCreateAd(productId, title, description, CTA, image) {
    const ads = this.state.ads;
    ads.push({
      productId: productId,
      adTitle: title,
      adDescription: description,
      adCTA: CTA,
      pageUrl: "musclebait.com",
      pageImage:
        "https://res.cloudinary.com/juligoodie/image/upload/v1627316817/talentbait/muscle-bait-logo_grahly.svg",
      pageName: "MuscleBait",
      adStatus: "Active",
      adImage: image,
    });
    return this.setState({ ...this.state, ads: ads });
  }
  onUpdateAd(adToUpdate) {
    const ads = this.state.ads;
    const adIndex = ads.findIndex((ad) => ad.adId === adToUpdate.adId);
    ads[adIndex] = adToUpdate;
    return this.setState({ ...this.state, ads });
  }
  onRemoveAd(adId) {
    const ads = this.state.ads;
    const adIndex = ads.findIndex((ad) => ad.adId === adId);
    ads.splice(adIndex, 1);
    return this.setState({ ...this.state, ads });
  }
}

export default StatusStore;
