// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through:ProductTag},{
  forgeinKey:'product_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{through: ProductTag},{
  forgeinKey:'tag_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
