import { Request, Response } from 'express';
import { RequestBody, RequestBodyPedido, RequestUnPedido, RequestRangoFecha } from '../interface/request_interface';
const db = require('../Sequelizefolder/config');
var creartabla = require('../Controller/create_table.controller');

export async function RegistrarUsuario(req: Request, res: Response) {
    var respon = {};
    try {
        await creartabla();
        const nuevo_us: RequestBody = req.body;
        db.sequelize.query('CALL insert_usuario(:params)', {
            replacements: {
                params: [
                    nuevo_us.nombre_usuario,
                    nuevo_us.apellido_usuario,
                    nuevo_us.email_usuario]
            }
        }).then((response: any) => {

            if (response != null) {
                respon = {
                    message: "Se registro correctamente",
                    idusuario: response[0].NewIdUsuario,
                    status: 200
                };
            } else {
                respon = {
                    message: "El correo ya existe.",
                    status: 200
                };
            }
            res.json(respon);
        }).error((err: any) => {
            respon = {
                message: err,
                status: 404
            };
            res.json(respon);
        });
    } catch (err) {
        respon = {
            message: err,
            status: 404
        };
        res.json(respon);
    }
}

export async function RegistrarPedido(req: Request, res: Response) {
    var respon = {};
    try {
        await creartabla();
        const nuevo_pedido: RequestBodyPedido = req.body;
        db.sequelize.query('CALL insert_pedido(:params)', {
            replacements: {
                params: [
                    nuevo_pedido.telefono,
                    nuevo_pedido.direccion,
                    nuevo_pedido.hora_entrega,
                    nuevo_pedido.franja_entrega,
                    nuevo_pedido.IdUsuario
                ]
            }
        }).then((response: any) => {
            if (response != null) {
                respon = {
                    message: "Se registro correctamente el pedido",
                    IdPedido: response[0].IdPedido,
                    status: 200
                };
            } else {
                respon = {
                    message: "No se pudo registrar el pedido",
                    status: 200
                };
            }
            res.json(respon);
        }).error((erro: any) => {
            respon = {
                message: erro,
                status: 404
            };
            res.json(respon);
        });
    } catch (err) {
        respon = {
            message: err,
            status: 404
        };
        res.json(respon);
    }
}

export async function ObtenerUnPedido(req: Request, res: Response) {
    var respon = {};
    try {
        await creartabla();
        const get_pedido: RequestUnPedido = req.body;
        db.sequelize.query('CALL get_pedido(:params)', {
            replacements: {
                params: [
                    get_pedido.IdPedido
                ]
            }
        }).then((response: any) => {
            var result = {};
            result = {
                data: response
            };
            res.json(result);
        }).error((erro: any) => {
            respon = {
                message: erro,
                status: 404
            };
            res.json(respon);
        });
    } catch (err) {
        respon = {
            message: err,
            status: 404
        };
        res.json(respon);
    }
}

export async function ObtenerRangoPedido(req: Request, res: Response) {
    var respon = {};
    try {
        await creartabla();
        const fecha_rango: RequestRangoFecha = req.body;
        db.sequelize.query('CALL get_pedido_rango(:params)', {
            replacements: {
                params: [
                    fecha_rango.FechaInicio,
                    fecha_rango.FechaFin
                ]
            }
        }).then((response: any) => {
            var result = {};
            result = {
                data: response
            };
            res.json(result);
        }).error((erro: any) => {
            respon = {
                message: erro,
                status: 404
            };
            res.json(respon);
        });
    } catch (err) {
        respon = {
            message: err,
            status: 404
        };
        res.json(respon);
    }
}



