const categories = {
  sb: "sbornyj-buket",
  mb: "monobukety",
  kk: "kompozicii-s-buketom",
};

const products = [
  {
    id: 1,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Романтика сердца",
    cost: 1890,
    category: categories.sb,
  },
  {
    id: 2,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Вишнёвый сад",
    cost: 2890,
    category: categories.sb,
  },
  {
    id: 3,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Милашка",
    cost: 1590,
    category: categories.sb,
  },
  {
    id: 4,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Закат",
    cost: 2090,
    category: categories.sb,
  },
  {
    id: 5,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Счастье",
    cost: 3890,
    category: categories.sb,
  },
  {
    id: 6,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Воспоминания о лете",
    cost: 1990,
    category: categories.sb,
  },
  {
    id: 11,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Пушистое облако",
    cost: 2000,
    category: categories.mb,
  },
  {
    id: 22,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Первая нежность",
    cost: 2890,
    category: categories.mb,
  },
  {
    id: 33,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Яркий день",
    cost: 4590,
    category: categories.mb,
  },
  {
    id: 55,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Нежный персик",
    cost: 1590,
    category: categories.mb,
  },
  {
    id: 111,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Коробочка с ягодами",
    cost: 1890,
    category: categories.kk,
  },
  {
    id: 121,
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649725842_140-vsegda-pomnim-com-p-shikarnie-tsveti-foto-154.jpg",
    title: "Клубничный вкус",
    cost: 2600,
    category: categories.kk,
  },
];

function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

module.exports = function (app, db) {
  app.get("/product", (req, res) => {
    const category = req.query.category;
    res.send(getProductsByCategory(category));
  });
};
