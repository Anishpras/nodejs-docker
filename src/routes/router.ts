import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello from Docker V1 🎉" }));
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Test route." });
});
router.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
