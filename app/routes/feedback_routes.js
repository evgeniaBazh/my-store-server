const feedbacks = [
  {
    name: "Александр",
    tel: 89888888888,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet, lacus a hendrerit venenatis, purus metus vulputate orci, quis interdum dolor neque ac orci. Quisque interdum interdum magna id semper. ",
  },
  {
    name: "Анастасия",
    tel: 89888888888,
    message:
      "Lorem ipsum dolor sit ametpurus metus vulputate orci, quis interdum dolor neque ac orci. Quisque interdum interdum magna id semper. ",
  },
  {
    name: "Людмила",
    tel: 89888888888,
    message: "Lorem ipsum dolor sit amet, magna id semper. ",
  },
  {
    name: "Егор",
    tel: 89888888888,
    message: "super! :)",
  },
  {
    name: "Александр",
    tel: 89888888888,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet, lacus a hendrerit venenatis, purus metus vulputate orci, quis interdum dolor neque ac orci. Quisque interdum interdum magna id semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet, lacus a hendrerit venenatis, purus metus vulputate orci, quis interdum dolor neque ac orci. Quisque interdum interdum magna id semper.",
  },
  {
    name: "Анастасия",
    tel: 89888888888,
    message:
      "Lorem ipsum dolor sit ametpurus metus vulputate orci, quis interdum dolor neque ac orci. Quisque interdum interdum magna id semper. ",
  },
  {
    name: "Людмила",
    tel: 89888888888,
    message: "Lorem ipsum dolor sit amet, magna id semper. ",
  },
  {
    name: "Егор",
    tel: 89888888888,
    message: "super! :)",
  },
];

module.exports = function (app, db) {
  app.post("/feedbacks", (req, res) => {
    feedbacks.push(req.body);
    res.send(req.body);
  });
  app.get("/feedbacks", (req, res) => {
    res.send(feedbacks);
  });
};
