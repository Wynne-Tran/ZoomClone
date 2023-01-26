const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

const port = 30001
//keep track user join room step 1
const users = []
app.get("/", (req, res) => {
    res.send("Hello World")
})

const addUser = (userName, roomId) => {
    users.push({
        userName: userName,
        roomId: roomId
    })
}

const getRoomUSers = (roomId, ) => {
    return users.filter(user => user.roomId == roomId);
}

const userLeave = (userName) => {
    return users.filter(user => user.userName != userName)
}

io.on("connection", (socket) => {
    console.log("Someone connected !")
    socket.on("join-room", ({roomId, userName}) => {
        console.log(`${userName} join room ${roomId}`)
        socket.join(roomId)
        // broadcast
        addUser(userName, roomId)
        socket.to(roomId).emit('user-connected', userName)

        socket.to(roomId).emit('get-RoomUsers', getRoomUSers(roomId))

        socket.on("disconnect", () => {
            console.log('disconnect !')
            socket.leave(roomId)
            userLeave(userName)
            io.to(roomId).emit('all-users', getRoomUSers(roomId))
        })
    })
})

server.listen(port, () => {
    console.log("Zoom Clone API listening on localhost:30001")
})
