const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        //console.log(mensaje);
        if (mensaje.usuario) {
            callback({ resp: 'todo salio bien!' });
        } else {
            callback({ resp: 'todo salio mal!!' });
        }
    });
});