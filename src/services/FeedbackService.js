import Feedback from "../models/Feedback.js";

class FeedbackService {
  async create(feedback) {
    const createdFeedback = await Feedback.create({ ...feedback });
    return createdFeedback;
  }

  async getAll() {
    const feedbacks = await Feedback.find();
    return feedbacks;
  }

  async getOn(id) {
    if (!id) {
      throw new Error("Не указан id");
    }
    const feedback = await Feedback.findById(id);
    return feedback;
  }

  async update(feedback) {
    if (!feedback._id) {
      throw new Error("Не указан id");
    }
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      feedback._id,
      feedback,
      { new: true },
    );
    return updatedFeedback;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Не указан id");
    }
    const feedback = await Feedback.findByIdAndDelete(id);
    return feedback;
  }
}

export default new FeedbackService();
