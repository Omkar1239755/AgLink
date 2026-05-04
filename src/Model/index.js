// src/models/index.js

import ShopProduct from "./ShopProduct.js";
import SellerShop from "./SellerShop.js";

const db = {};

db.ShopProduct = ShopProduct;
db.SellerShop = SellerShop;

// associations run karo
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;