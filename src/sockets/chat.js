module.exports = (io, socket) => {
    socket.on('joinGroup', (groupId) => {
        socket.join(groupId)
        console.log(`Usuário ${socket.id} Entrou no grupo ${groupId}`);
    })

    socket.on('sendMessage', ({ groupId, message, sender }) => {
        const payload = {
            sender,
            message,
            timestamp: new Date()
        }

        socket.to(groupId).emit('recieveMessage', payload)
        //opicional adicionar o próprio usuário que enviou a mensagem
        socket.emit('recieveMessage', payload)



    })
}