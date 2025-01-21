const Product = require('../../models/product.model')


module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: "active",
        deleted: false
    });

    const newproducts = products.map(item => {
        item.priceNew = (item.price * item.discount /100).toFixed(0);
        return item;
    })
    res.render('client/pages/products/index',
    {
        titlePage: "Products",
        products: newproducts
    }
)};

