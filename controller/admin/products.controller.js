const Product = require("../../models/product.model");


module.exports.products = async (req, res) => {
    const products = await Product.find({
        deleted: false
    });


    res.render('admin/pages/products/index',
    {
        titlePage: "Trang chủ",
        products: products
    }
)};