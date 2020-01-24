export interface RequestBody {
    nombre_usuario: string,
    apellido_usuario: string,
    email_usuario: string
}

export interface RequestBodyPedido {
    telefono: Number,
    direccion: string,
    hora_entrega: Date,
    franja_entrega: string,
    IdUsuario: Number
}

export interface RequestUnPedido {
    IdPedido: Number
}

export interface RequestRangoFecha {
    FechaInicio: Date,
    FechaFin:Date
}

