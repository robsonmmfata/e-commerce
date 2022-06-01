const user = require('../models/user');

exports.signup=(req,res) =>{
    User.findOne({ email: req.body.email })
.exec((error, User) => {
    if (User) return res.status(400).json({
        message: 'usuario Cadastrado!'
    });
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;
    const _user = new user({
         firstName, 
        lastName, 
        email, 
        password,
        username:Math.random().toString() });

    _user.save((error,data) =>{
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