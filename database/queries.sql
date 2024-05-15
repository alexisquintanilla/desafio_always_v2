-- importante 
-- const connectionString = process.env.HOST
-- en mi proyecto la variable es HOST

DROP TABLE IF EXISTS ALUMNOS;

CREATE TABLE ALUMNOS(
	NOMBRE VARCHAR(50),
	RUT VARCHAR(10) PRIMARY KEY,
	CURSO VARCHAR(50),
	NIVEL INT
);

INSERT INTO ALUMNOS (NOMBRE,RUT,CURSO,NIVEL) VALUES 
('ALEXIS QUINTANILLA','12345678-9','GUITARRA',5),
('BALTASAR QUINTANILLA','12345678-1','VIOLIN',6),
('ELIANA MARTINEZ','12345678-2','SAXOFON',8);

SELECT * FROM ALUMNOS;

/* ejemplo de OBJETO PARA PROBAR QUERY DE ACTUALIZACION 

rut

alumnos/12345678-2

{
  "nombre":"Eliana Ines Martinez",
  "curso":"SAXOFON",
  "nivel":10
}

*/