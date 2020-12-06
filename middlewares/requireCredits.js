module.exports = (req, res, next) => {
  if (req.user.credits == 0) {
    return res.status(402).json({ error: 'Not enough credits' });
  }
  next();
};
