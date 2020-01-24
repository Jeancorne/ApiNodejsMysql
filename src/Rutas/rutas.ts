import {Router} from 'express';
import {RegistrarUsuario, RegistrarPedido,ObtenerUnPedido,ObtenerRangoPedido} from '../Controller/index.controller';
const ruta = Router();

ruta.route('/registrar_usuario').post(RegistrarUsuario);
ruta.route('/registrar_pedido').post(RegistrarPedido);
ruta.route('/obtener_unpedido').post(ObtenerUnPedido);
ruta.route('/obtener_rangopedido').post(ObtenerRangoPedido);



export default ruta;

