const { Users } = require("../models");

async function validateCreateUser(req, res, next) {
    const {name, email, password} = req.body;// Verifica se os campos obrigatórios estão presentes chamado de desestruturação

    if (!name || !email || !password){
        return res.status(400).send({
            error: "Todos os campos são obrigatórios"
        })
    }
    if (password.length < 8){
        return res.status(400).send({
            error: "A senha deve ter pelo menos 8 caracteres"
        })
    }

    const existUser = await Users.findOne({
        where:{
            email: email
        }
    })

    if(existUser){
        return res.status(400).send({
            error: "Usuário já cadastrado"
        })
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        10 // número de rounds de criptografia
    )

    req.body.password = hashedPassword;

    next();
}