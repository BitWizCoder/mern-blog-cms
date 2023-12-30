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
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
