module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401), json({ user: 'Unauthorized  user' });
  }
  next();
};
