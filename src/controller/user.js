const user = require('../models/user');

exports.signup=(req,res) =>{
    user.findOne({ email: req.body.email })
.exec((error, user) => {
    if (user) return res.status(400).json({
        message: 'usuario Cadastrado!'
    });
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;
      
        {username:Math.random().toString() }

    user.save((error,data) =>{
        if (error) {
            return res.status(400).json({
                message:'algo está errado'
            })
            if (data) {
                return res.status(201).json({
                    message:'user created sucessfull'
                })
            }
        }
    })

})
}