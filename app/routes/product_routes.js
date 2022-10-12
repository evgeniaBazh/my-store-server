// const { request } = require("express");
// const { DataTypes } = require("sequelize");

// const categories = {
//   sb: "sbornyj-buket",
//   mb: "monobukety",
//   kk: "kompozicii-s-buketom",
// };

// const products = [
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Романтика сердца",
//     cost: 1890,
//     category: categories.sb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Вишнёвый сад",
//     cost: 2890,
//     category: categories.sb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Милашка",
//     cost: 1590,
//     category: categories.sb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Закат",
//     cost: 2090,
//     category: categories.sb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Счастье",
//     cost: 3890,
//     category: categories.sb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Воспоминания о лете",
//     cost: 1990,
//     category: categories.sb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Пушистое облако",
//     cost: 2000,
//     category: categories.mb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Первая нежность",
//     cost: 2890,
//     category: categories.mb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Яркий день",
//     cost: 4590,
//     category: categories.mb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Нежный персик",
//     cost: 1590,
//     category: categories.mb,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Коробочка с ягодами",
//     cost: 1890,
//     category: categories.kk,
//   },
//   {
//     img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
//     title: "Клубничный вкус",
//     cost: 2600,
//     category: categories.kk,
//   },
// ];

// function getProductsByCategory(category) {
//   return products.filter((product) => product.category === category);
// }

// module.exports = async (app, db) => {
//   const Product = db.define('Product', {
//     img: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     cost: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     category: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   })
//   await db.sync({ force: true });

//   app.post("/category", async (req, res) => {
//     const category = await Product.create(req.body);
//     res.send(category);
//   });
//   app.get("/category", (req, res) => {
//     const category = req.query.category;
//     res.send(getProductsByCategory(category));
//   });

//   /*TODO удалить*/
//   app.post("/test-data", async (req, res) => {
//    const data = await Product.bulkCreate(products)
//    res.send(data)
//   })

//   app.get("/product-by-category", async (req,res) => {
//     const products = await Product.findAll({
//       where: {
//         category: req.query.category,
//       }
//     });
//     res.send(products)
//   })
// };
