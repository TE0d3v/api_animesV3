const { Messages } = require('../models');
async function createMessage(req, res) {
    try {
        await Messages.create(req.body);
        return res.status(201).send("Mensagem criada com sucesso!");
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

async function getMessages(req, res){
    const { groupId } = req.params;

    try{
        const messages = await Messages.findAll({
            where: {
                groupId: groupId,
            }
        })

        return res.send(messages)
    }catch (error){
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    createMessage,
    getMessages
}