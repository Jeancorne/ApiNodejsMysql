var User = require('../Sequelizefolder/models/usuario')
var Pedi = require('../Sequelizefolder/models/pedidos');

export async function CrearTablas() {
    await User.sync();
    await Pedi.sync();
}


module.exports = CrearTablas;