create database usuariospedidos;
use usuariospedidos;
DELIMITER $
CREATE PROCEDURE insert_usuario
(	
    in nombre_usuario varchar(50),
    in apellido_usuario varchar(50),
    in email_usuario varchar(100)
)
BEGIN   
	SET @idus = (SELECT idUsuario FROM tblusuarios AS us WHERE us.email_usuario = email_usuario);
    IF(@idus IS NULL) THEN
		INSERT INTO tblusuarios(nombre_usuario,apellido_usuario,email_usuario)
        VALUES(nombre_usuario, apellido_usuario,email_usuario);       
        SET @LastId = (SELECT LAST_INSERT_ID());
        select @LastId AS NewIdUsuario;    
    END IF;
END $

DELIMITER $
CREATE PROCEDURE insert_pedido
(	
    in telefono INT,
	in direccion varchar(100),
	in hora_entrega DateTime,
	in franja_entrega TIME,
	in IdUsuario int
)
BEGIN
	INSERT INTO tblpedidos
    (telefono, direccion, hora_entrega, franja_entrega,idUsuario)
    values(telefono, direccion, hora_entrega, franja_entrega,IdUsuario);
     SET @LastId = (SELECT LAST_INSERT_ID());
	select @LastId AS IdPedido;    
END $

DELIMITER $
CREATE PROCEDURE get_pedido
(	    
	in IdPedido int
)
BEGIN
	select distinct us.nombre_usuario,us.apellido_usuario,us.email_usuario,
				ped.telefono, ped.direccion, ped.hora_entrega,ped.franja_entrega,
                us.idusuario,ped.IdPedido
	FROM tblusuarios AS us
	LEFT OUTER JOIN tblpedidos AS ped
	ON us.idusuario = ped.IdUsuario
	WHERE ped.IdPedido = IdPedido;
END $

DELIMITER $
CREATE PROCEDURE get_pedido_rango
(	    
	in fecha_inicio Datetime,
    in feca_fin datetime
)
BEGIN
	select distinct us.nombre_usuario,us.apellido_usuario,us.email_usuario,
				ped.telefono, ped.direccion, ped.hora_entrega,ped.franja_entrega,
                us.idusuario,ped.IdPedido
	FROM tblusuarios AS us
	LEFT OUTER JOIN tblpedidos AS ped
	ON us.idusuario = ped.IdUsuario
	WHERE ped.hora_entrega BETWEEN  fecha_inicio and feca_fin;
END $
call get_pedido_rango('2020-01-24','2020-01-30')
call insert_pedido(123,'calle 63 bc ce','2019-02-27','6:50:00',1)
call insert_usuario('qweqwe','oo','ofqweww@gmaiel.com')
call get_pedido(1)
