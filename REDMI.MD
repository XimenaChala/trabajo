# COURSYS

### Objetivo del Proyecto
El objetivo principal del proyecto `Coursys` es desarrollar un sistema de gestión de cursos que facilite la administración y el seguimiento de estudiantes, profesores y cursos ofrecidos en una institución educativa. Este sistema busca automatizar procesos como la asignación de profesores a cursos, la inscripción de estudiantes, la gestión de horarios y el monitoreo de pagos, brindando una solución integral, eficiente y escalable.

### Contexto
Coursys surge como una herramienta para digitalizar y centralizar la gestión académica, permitiendo:

- Registrar estudiantes y profesores con sus datos clave.
- Gestionar cursos, incluyendo información sobre horarios, costos y asignaciones.
- Proveer un entorno seguro para la administración y consulta de información.

### Alcance
- Integración de estudiantes y profesores en una base de datos central.
- Relación entre cursos y participantes (estudiantes/profesores).
- Gestión eficiente de horarios, costos y fechas.


## Análisis: Definición de requerimientos. 

### Requisitos Funcionales

### RF1: Gestión de Estudiantes
- **Descripción:** El sistema permitirá a los administradores registrar, actualizar, eliminar y consultar información de estudiantes inscritos en los cursos.
- **Entrada:** Datos del estudiante (Nombre, cédula, teléfono, correo electrónico).
- **Procesamiento:** Validar unicidad de la cédula y almacenar los datos en la tabla `estudiantes`.
- **Salida:** Confirmación de registro o actualización del estudiante.

### RF2: Gestión de Profesores
- **Descripción:** El sistema permitirá registrar, actualizar, eliminar y consultar los datos de los profesores.
- **Entrada:** Datos del profesor (Nombre, especialidad, correo electrónico).
- **Procesamiento:** Validar los datos y relacionarlos con los cursos correspondientes.
- **Salida:** Confirmación del registro, actualización o eliminación del profesor.

### RF3: Creación de Cursos
- **Descripción:** El sistema permitirá registrar nuevos cursos con asignación de profesores y estudiantes.
- **Entrada:** Datos del curso (Nombre, horas, precio, fecha de inicio, profesor asignado, estudiantes inscritos).
- **Procesamiento:** Validar la existencia de profesores y estudiantes relacionados, y guardar el curso en la tabla `cursos`.
- **Salida:** Confirmación de la creación del curso.

### RF4: Inscripción de Estudiantes en Cursos
- **Descripción:** El sistema permitirá asignar estudiantes a cursos existentes.
- **Entrada:** Datos de inscripción (ID del estudiante, ID del curso).
- **Procesamiento:** Validar la existencia del estudiante y el curso, y registrar la relación en el sistema.
- **Salida:** Confirmación de inscripción.

### RF5: Consultas de Cursos
- **Descripción:** El sistema permitirá listar los cursos disponibles y sus detalles, como estudiantes inscritos y profesor asignado.
- **Entrada:** Solicitud de consulta por curso o filtro por profesor o estudiante.
- **Procesamiento:** Consultar la base de datos para recuperar la información solicitada.
- **Salida:** Lista detallada de cursos con sus asignaciones.

---

### Requerimientos No Funcionales

### RNF1: Seguridad de Acceso
- **Descripción:** El sistema debe garantizar que solo usuarios autorizados puedan realizar cambios en los datos.
- **Entrada:** Credenciales del usuario (nombre de usuario y contraseña).
- **Procesamiento:** Validar las credenciales y otorgar acceso según el rol.
- **Salida:** Acceso permitido o denegado.

### RNF2: Rendimiento
- **Descripción:** El sistema debe procesar solicitudes en un tiempo promedio menor a 2 segundos.
- **Entrada:** Solicitud de consulta o registro.
- **Procesamiento:** Ejecución de operaciones en la base de datos y presentación de resultados.
- **Salida:** Respuesta rápida a las solicitudes del usuario.

### RNF3: Disponibilidad
- **Descripción:** El sistema debe estar disponible al menos el 99.9% del tiempo para garantizar operaciones continuas.
- **Entrada:** Uso de la aplicación por parte de los usuarios.
- **Procesamiento:** Monitoreo y mantenimiento de los servicios.
- **Salida:** Operación continua sin interrupciones significativas.

### RNF4: Escalabilidad
- **Descripción:** El sistema debe ser capaz de manejar un aumento en la cantidad de usuarios y cursos sin pérdida de rendimiento.
- **Entrada:** Aumento en los datos y usuarios concurrentes.
- **Procesamiento:** Ajuste dinámico de los recursos del servidor.
- **Salida:** Respuesta eficiente y escalable.

### RNF5: Compatibilidad
- **Descripción:** El sistema debe ser accesible desde navegadores web modernos y dispositivos móviles.
- **Entrada:** Acceso desde diversos dispositivos.
- **Procesamiento:** Adaptación de la interfaz al entorno del usuario.
- **Salida:** Interfaz funcional y adaptada.



## Diseño Base de Datos
> Script de la Base de Datos

```sql
DROP DATABASE IF EXISTS Coursys;

    CREATE DATABASE Coursys;

    USE Coursys;

-- Tabla Estudiantes
CREATE TABLE estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    cedula VARCHAR(100) NOT NULL,
    telefono FLOAT NOT NULL,
    email VARCHAR(200) NOT NULL
);

-- Tabla Profesores
CREATE TABLE profesores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    especialidad VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL
);

-- Tabla Cursos
CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    estudiantes_id INT NOT NULL,
    profesores_id INT NOT NULL,
    horas FLOAT NOT NULL,
    precio FLOAT NOT NULL,
    fecha_inicio TIMESTAMP NOT NULL,
    CONSTRAINT fk_estudiantes FOREIGN KEY (estudiantes_id) REFERENCES estudiantes (id),
    CONSTRAINT fk_profesores FOREIGN KEY (profesores_id) REFERENCES profesores (id)
);

```

## Mockup
El diseño del modelado se enfoca en una interfaz gráfica e interactiva para gestionar estudiantes, profesores y cursos. Este diseño está orientado a facilitar la gestión académica sin necesidad de roles o inicios de sesión.




# Manual para Configuración de Contenedor MySQL

Este manual describe los pasos para configurar y levantar un contenedor MySQL utilizando Docker y Docker Compose. Se incluyen los archivos `.env`, `Dockerfile` y `docker-compose.yml` necesarios para la configuración.

## 1. Archivo .env

El archivo `.env` contiene las variables de entorno necesarias para la configuración del contenedor. Asegúrese de configurar los valores según sus necesidades.

```env
MYSQL_ROOT_PASSWORD=abcd1234
```

## 2. Dockerfile

El `Dockerfile` es utilizado para crear una imagen personalizada de MySQL que incluye la instalación de herramientas adicionales.

```dockerfile
# Dockerfile for MySQL with locale configuration
# Author: [Jesús Ariel González Bonilla]
# Date: [21-06-2024]

FROM mysql:latest

# Set environment variable
ENV LANG es_ES.UTF-8
```

## 3. docker-compose.yml

El archivo `docker-compose.yml` se utiliza para definir y configurar los servicios que se levantarán en los contenedores. Este archivo hace uso de las variables definidas en el archivo `.env`.

```yaml
version: '3.8'
services:
  mysql:
    container_name: serve-mysql
    build:
      context: .
      dockerfile: Dockerfile
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    ports:
      - "3307:3306"
    networks:
      - network_local_server
    volumes:
      - mysql_data:/var/lib/mysql
      - "/home/ubuntu/db_backups:/backups/mysql"
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin ping -h localhost"]
      interval: 30s
      timeout: 10s
      retries: 5
    labels:
      - com.corhuila.group=databases
volumes:
  mysql_data:
    driver: local
networks:
  network_local_server:
    driver: bridge
    name: network_local_server
```

## 4. Pasos para la Configuración

1. **Preparar los Archivos**
   - Coloque los archivos `.env`, `Dockerfile` y `docker-compose.yml` en el mismo directorio.

2. **Construir la Imagen**
   - Utilice el siguiente comando para construir la imagen a partir del `Dockerfile`:
     ```sh
     docker build -t custom-mysql .
     ```

3. **Levantar el Contenedor**
   - Si desea actualizar la configuración o reconstruir la imagen, primero detenga el contenedor con el siguiente comando:
     ```sh
     docker-compose down
     ```
   - Luego, levante el contenedor y reconstruya la imagen utilizando:
     ```sh
     docker-compose up -d --build
     ```

4. **Acceso a MySQL**
   - Después de que el contenedor esté en ejecución, puede acceder a MySQL utilizando el cliente MySQL o cualquier otra herramienta de administración de bases de datos compatible.

## 5. Notas Adicionales

- Asegúrese de que Docker y Docker Compose estén instalados correctamente en su sistema antes de comenzar.
- Puede personalizar los archivos según los requisitos específicos de su proyecto.

# Paso a Paso para ejecutar el proyecto
Lo primero es ejecutar la DataBase en el `Docker`, luego ejecutamos el Backend en `IntelliJ IDEA`, y por ultimo ejecutamos el Frontend en `Visual Studio Code`.

## Ejecutar Docker
#### 1. **Preparar los Archivos**
   - Coloque los archivos `.env`, `Dockerfile` y `docker-compose.yml` en el mismo directorio.
     ```sh
     cd DataBaseCoursys
     ```

#### 2. **Construir la Imagen**
   - Utilice el siguiente comando para construir la imagen a partir del `Dockerfile`:
     ```sh
     docker build -t custom-mysql .
     ```

#### 3. **Levantar el Contenedor**
   - Si desea actualizar la configuración o reconstruir la imagen, primero detenga el contenedor con el siguiente comando:
     ```sh
     docker-compose down
     ```
   - Luego, levante el contenedor y reconstruya la imagen utilizando:
     ```sh
     docker-compose up -d --build
     ```

#### 4. **Acceso a MySQL**
   - Después de que el contenedor esté en ejecución, puede acceder a MySQL utilizando el cliente MySQL o cualquier otra herramienta de administración de bases de datos compatible.

#### 5. **Notas Adicionales**

- Asegúrese de que Docker y Docker Compose estén instalados correctamente en su sistema antes de comenzar.
 - Puede personalizar los archivos según los requisitos específicos de su proyecto.

![DOCKER](/imagenesbackeng/Docker.png)

## 2. Ejecutar el Backend

#### 1. **Ingresar**
 - Inicia la carpeta `BackendCoursys` en IntelliJ IDEA

#### 2. **Inicio MySQL**
 - Ingrese a Mysql y inicie un nueva conexión como la siguiente imagen
 - **Username** = root
 - **clave** = abcd1234

 ![MySQL](/imagenesbackeng/image1.png)

#### 3. **Crear la DataBase**
 - Cree una base de datos llamada `coursys`
    ```sh
     CREATE DATABSE coursys;
     ```
![DATABSE](/imagenesbackeng/image.png)

#### 4. **Ejecutar el Backend**
 - Ejecute el Backend en IntelliJ IDEA dar click en `BackendCoursysApplication`
![DATABSE](/imagenesbackeng/Backend.png)

## Ejecutar el Frontend
#### 1. **Ingresar**
 - Inicia la carpeta `FrontendCoursys` en Visual Studio Code
     ```sh
     cd FrontendCoursys
     ```
![FRONTEND](/imagenesbackeng/Frontend.png/)

#### 2. **Insatal las Dependencias**
 - En la terminal de Visual Studio Code escribe el comando para instalar las dependencias de node
     ```sh
     npm install
     ```
 - Luego en la terminal de Visual Studio Code escribe el comando para instalar las dependencias de axios
      ```sh
     npm install axios

#### 3. **Ejecuta**
 - En la terminal de Visual Studio Code Escribe el comando de inicializar
     ```sh
     ionic serve
     ```
 - Automáticamente el proyecto se inicializa en el navegador o ingresa en el navegador el siguiente enlace
     ```sh
     http://localhost:8100/home
     ```
![FRONTEND](/imagenesbackeng/ionicserve.png/)

## PROYECTO
 - Listo, el proyecto se se habrá inicializado y en su navegador se vera de la siguiente forma

![PROYECTO](/imagenesbackeng/Home.png)
