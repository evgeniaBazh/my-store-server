const { DataTypes } = require("sequelize");

module.exports = async (app, db) => {
  const Feedback = db.define("Feedback", {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  await db.sync({ force: true });

  app.post("/feedbacks", async (req, res) => {
    const feedback = await Feedback.create(req.body);
    res.send(feedback);
  });
  app.get("/feedbacks", async (req, res) => {
    const feedbacks = await Feedback.findAll();
    res.send(feedbacks);
  });
};
