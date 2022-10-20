import FeedbackService from "../services/FeedbackService.js";

class FeedbackController {
  async create(req, res) {
    try {
      const feedback = await FeedbackService.create(req.body);
      res.status(200).json(feedback);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const feedbacks = await FeedbackService.getAll();
      res.json(feedbacks);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const feedback = await FeedbackService.getOne(req.params.id);
      return res.json(feedback);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedFeedback = await FeedbackService.update(req.body);
      return res.json(updatedFeedback);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const feedback = await FeedbackService.delete(req.params.id);
      return res.json(feedback);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new FeedbackController();
