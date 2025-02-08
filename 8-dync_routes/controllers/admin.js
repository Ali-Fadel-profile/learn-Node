const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editMode: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  }
  const productId = req.params.productId;

  Product.findById(productId, (product) => {
    res.render('admin/edit-product', {
      pageTitle: 'edit Product',
      path: '/admin/edit-product',
      editMode: editMode,
      product: product,
    });
  })
};
exports.postEditProduct = (req, res, next) => {
  const productId = req.body.id;
  const productTitle = req.body.title;
  const productImageUrl = req.body.imageUrl;
  const productPrice = req.body.price;
  const productDesc = req.body.description;
  console.log(productId);

  const updatedProduct = new Product(
    productId,
    productTitle,
    productImageUrl,
    productDesc,
    productPrice
  );
  updatedProduct.save();
  res.redirect("/admin/products")
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.body.id;
  Product.deleteById(productId, () => {

  })
}