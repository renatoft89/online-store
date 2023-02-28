const loginController = async (req, res, next) => {
  try {
    // const { password, email } = req.body;
    return res.json({ hello: 'word'})

  } catch (error) {
    console.log(error);
  }
}

module.exports = { loginController }