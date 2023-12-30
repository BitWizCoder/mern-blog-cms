const asyncHandler = require("express-async-handler");
const Article = require("../models/articleModel");

// @desc    Get Articles
// @route   GET /api/articles
// @access  Private
const getArticles = asyncHandler(async (req, res) => {
  const article = await Article.find();
  res.status(200).json(article);
});

// @desc    Set Articles
// @route   SET /api/articles
// @access  Private
const setArticle = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.body) {
    res.status(400);
    throw new Error("Please add post details.");
  }

  const article = await Article.create(req.body);

  res.status(200).json(article);
});

// @desc    Update Articles
// @route   PUT /api/articles
// @access  Private
const updateArticle = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const article = await Article.findById(id);

  if (!article) {
    res.status(400);
    throw new Error("Article not found");
  }

  const updatedArticle = await Article.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json(updatedArticle);
});

// @desc    Delete Articles
// @route   DELETE /api/articles
// @access  Private
const deleteArticle = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const article = await Article.findById(id);

  if (!article) {
    res.status(400);
    throw new Error("Article not found");
  }

  await Article.findOneAndDelete(id);

  res.status(200).json(id);
});

module.exports = {
  getArticles,
  setArticle,
  updateArticle,
  deleteArticle,
};
