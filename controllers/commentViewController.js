const commentViewController = {
  edit (req, res, next) {
    res.render('comments/Edit', res.locals.data)
  }
}

module.exports = commentViewController
