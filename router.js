import { Router } from "express";
import FeedbackController from "./src/controllers/FeedbackController.js";
import ProductController from "./src/controllers/ProductController.js";

const router = new Router();

router.post("/products", ProductController.create);
router.get("/products", ProductController.getAll);
router.get("/products/:id", ProductController.getOne);
router.put("/products", ProductController.update);
router.delete("/products/:id", ProductController.delete);

router.post("/feedbacks", FeedbackController.create);
router.get("/feedbacks", FeedbackController.getAll);
router.get("/feedbacks/:id", FeedbackController.getOne);
router.put("/feedbacks", FeedbackController.update);
router.delete("/feedbacks/:id", FeedbackController.delete);

export default router;
