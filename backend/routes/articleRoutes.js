const express = require("express");
const {
  getArticles,
  setArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");
const router = express.Router();

router.get("/", getArticles);
router.post("/", setArticle);
router.put("/", updateArticle);
router.delete("/", deleteArticle);

module.exports = router;
