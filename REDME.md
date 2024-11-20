# C3-P: Parcial

## Objetivo del Parcial

El objetivo de este parcial es evaluar la capacidad del estudiante para manipular el código fuente de un proyecto, comprendiendo su estructura y funcionamiento. El estudiante debe ser capaz de agregar nuevas funcionalidades en tiempo real, utilizando el código base ya existente, implementando mejoras tanto funcionales como visuales, y asegurando que los cambios no afecten el rendimiento ni la estabilidad del sistema.

Como parte de la evaluación, el estudiante deberá compartir el enlace al repositorio de GitHub del proyecto, que debe incluir los siguientes elementos:

- **Backend**: Código y configuraciones necesarias para gestionar la lógica del servidor y las interacciones con la base de datos.
- **Frontend**: Interfaz de usuario completamente funcional, que refleje las mejoras y cambios implementados.
- **Presentación**: Documentación o recursos visuales que expliquen las características del proyecto, las mejoras realizadas y cómo se integraron.
- **Archivo APK**: La versión ejecutable de la aplicación para dispositivos móviles, que incorpore todas las funcionalidades mejoradas.

El repositorio debe estar organizado de manera clara, con instrucciones en el archivo `README` que expliquen cómo clonar, instalar y ejecutar el proyecto, tanto en su versión de desarrollo como en su versión final.

---

# Proyecto: Coursys

## Objetivo del Proyecto

El objetivo principal del proyecto **Coursys** es desarrollar un sistema de gestión de cursos para una institución educativa. El sistema debe facilitar la administración y seguimiento de estudiantes, profesores y cursos, automatizando procesos como la asignación de profesores a cursos, la inscripción de estudiantes, la gestión de horarios y el monitoreo de pagos.

## Contexto

**Coursys** surge como una herramienta para digitalizar y centralizar la gestión académica, permitiendo:

- Registrar estudiantes y profesores con sus datos clave.
- Gestionar cursos, incluyendo horarios, costos y asignaciones.
- Proveer un entorno seguro para la administración y consulta de información.

---

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **FrontendAtena**: Aplicación frontend desarrollada con Ionic y Vue.js.
- **BackendAtena**: API REST desarrollada con Spring Boot para gestionar las operaciones del backend y la comunicación con la base de datos.
- **DatabaseAtena**: Archivos de configuración relacionados con la base de datos, como `docker-compose.yml` para el contenedor de la base de datos.
- **APK**: Carpeta con el archivo `app-debug.apk` generado para Android.

---

## Implementación del Nuevo Atributo: `porcentajeDescuento`

### 1. **Agregar el nuevo atributo `porcentajeDescuento` en la clase `Cursos`**

El nuevo atributo `porcentajeDescuento` debe ser agregado dentro de la clase `Cursos` en el paquete **Entity**. Esto implica modificar la clase `Cursos.java` para incluir este campo.

**Pasos para agregar el atributo en la clase `Cursos`:**

- Abre el archivo `Cursos.java` en el paquete **Entity**.
- Declara el nuevo atributo:

```java
public class Cursos {
    private Long id;
    private String nombre;
    private Double porcentajeDescuento; // Nuevo atributo

    // Constructor, getters y setters
}
```
![ATRIBUTO](/imagenesbackeng/atrivuto.png)

## Backend
* Entidad Curso: 
En el backend, el atributo porcentajeDescuento fue agregado a la clase de entidad Curso como una columna de la base de datos. Se configuró de la siguiente manera:
![backerng](/imagenesbackeng/cak.png)

## Cambios realizados:
Frontend: Se agregó un campo en el formulario para el descuento
![descuento](/imagenesbackeng/descuento.png)
![descuento](/imagenesbackeng/desc.png)
![descuento](/imagenesbackeng/12.png)

## Backend:

Se incluyó el atributo porcentaje descueto en la entidad Curso.
Se validó que este campo no sea nulo al momento de realizar una operación de inserción o actualización.

* Entity:
![descuento](/imagenesbackeng/7.png)

* Service:
![descuento](/imagenesbackeng/5.png)
