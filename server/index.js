const express = require('express');
      http = require('http');
      path = require('path');
      socketio = require('socket.io');
      app = express();
      server = http.createServer(app);
      io = socketio(server);

const {
    message
} = require('./utils/utils');

const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require('./utils/user')

const BotAdmin = 'Dardo Chat bot';

app.set('port', 4000 || process.env.PORT); 


io.on('connection', socket => {

    socket.on('joinRoom', (username, room ) => {
     
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);
    
        // Welcome current user
        socket.emit('message', message(BotAdmin, 'Bienvenido a DardoChat!'))
    
        // Broadcast when a user connects
        socket.broadcast
          .to(user.room)
          .emit(
            'message',
            message(BotAdmin, `${user.username} se ha unido al chat`)
        );
          
        // Send users and room info
       
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
        });
        
    });

    

    socket.on('chat', msg =>{

        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', message(user.username, msg));
   
     
    });
    

    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
          io.to(user.room).emit(
            'message',
            message(BotAdmin, `${user.username} ha dejado el chat`)
          );
    
          // Send users and room info
          io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
          });
        }
    });
})


server.listen(app.get('port'), () => console.log('Server on port'))