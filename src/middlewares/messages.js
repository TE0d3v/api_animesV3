function validateMessage(req, res, next) {
    const { content, groupId } = req.body;
    const user = req.user;

    if (!content || !groupId) {
        return res.status(400).send({
            error: "content e groupID são obrigatórios"
        })
    }
    if(typeof content !== 'string' || typeof groupId !== 'number') {
        return res.status(400).send({
            error: "content deve ser uma string e groupId deve ser um número"
        })
    }
    
    req.body.senderId = user.id; // Adiciona o ID do usuário autenticado à mensagem
    next();

}


module.exports = {
    validateMessage
}