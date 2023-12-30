// @desc    Get Articles
// @route   GET /api/articles
// @access  Private
const getArticles = async (req, res) => {
  res.json("get all articles");
};

// @desc    Set Articles
// @route   SET /api/articles
// @access  Private
const setArticle = async (req, res) => {
  res.json("Post an article");
};

// @desc    Update Articles
// @route   PUT /api/articles
// @access  Private
const updateArticle = async (req, res) => {
  res.json("Update an article");
};

// @desc    Delete Articles
// @route   DELETE /api/articles
// @access  Private
const deleteArticle = async (req, res) => {
  res.json("Delete an article");
};

module.exports = {
  getArticles,
  setArticle,
  updateArticle,
  deleteArticle,
};
