const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('admin', 'customer').required()
});


const userValidate = (req, res, next) => {
  const user = req.body;  
  const { error } = userSchema.validate(user);

  if (error) {
    res.status(422).json({ message: error.details[0].message })
  } else {
    next()
  }
}


module.exports = userValidate;
                      
