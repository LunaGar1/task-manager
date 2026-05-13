# Task Manager

Aplicación web para la gestión y administración de tareas, desarrollada con Node.js, Express, MongoDB Atlas y XML. El sistema permite crear, visualizar, actualizar y eliminar tareas mediante una interfaz sencilla e intuitiva.

---

## Descripción del Proyecto

El proyecto consiste en el desarrollo de un sistema de gestión de tareas que facilita el seguimiento y organización de actividades. Cada tarea puede contener información como:

- Título
- Descripción
- Estado
- Prioridad

La aplicación implementa una arquitectura cliente-servidor y utiliza una base de datos NoSQL en la nube para el almacenamiento de información. Además, el sistema incorpora el manejo y visualización de estructuras XML para representar y organizar datos jerárquicos dentro de la aplicación.

---

## Objetivo General

Desarrollar una aplicación web que permita administrar tareas de manera eficiente mediante operaciones CRUD, almacenamiento en la nube y representación de datos en XML.

---

## Objetivos Específicos

- Registrar nuevas tareas.
- Visualizar tareas almacenadas.
- Actualizar información de tareas.
- Eliminar tareas existentes.
- Implementar representación de datos mediante XML.
- Conectar la aplicación con MongoDB Atlas.
- Desplegar el sistema en Render.

---

## Arquitectura del Sistema

El proyecto utiliza una arquitectura cliente-servidor compuesta por:

### Frontend

Tecnologías utilizadas:
- HTML
- CSS
- JavaScript
- Tailwind CSS

Funciones:
- Mostrar tareas
- Crear tareas
- Editar tareas
- Eliminar tareas
- Visualizar estructuras XML
- Consumir la API REST

---

### Backend

Tecnologías utilizadas:
- Node.js
- Express.js

Funciones:
- Procesar solicitudes HTTP
- Gestionar operaciones CRUD
- Generar y procesar XML
- Conectar con MongoDB
- Exponer endpoints REST

---

### Base de Datos

Tecnología:
- MongoDB Atlas

Función:
- Almacenar la información de las tareas en la nube.

---

## Flujo de Funcionamiento

```txt
Usuario
   │
   ▼
Frontend (HTML/CSS/JS)
   │
   ▼
Backend (Node.js + Express)
   │
   ▼
MongoDB Atlas
```

---

## Tecnologías Utilizadas

| Tecnología | Función |
|---|---|
| HTML | Estructura |
| CSS / Tailwind | Diseño |
| JavaScript | Interactividad |
| XML | Representación jerárquica de datos |
| Node.js | Backend |
| Express.js | Servidor |
| MongoDB Atlas | Base de datos |
| Render | Despliegue |
| GitHub | Control de versiones |

---

## Despliegue

### Aplicación en línea

https://task-manager-i8xa.onrender.com/

---

## Instalación y Ejecución

### Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

### Instalar dependencias

```bash
npm install
```

---

### Configurar variables de entorno

Crear un archivo `.env`:

```env
MONGO_URI=tu_uri_de_mongodb
```

---

### Ejecutar el proyecto

```bash
npm start
```

---

## Características

- Gestión de tareas
- Persistencia de datos
- API REST
- Representación de datos mediante XML
- Interfaz responsiva
- Arquitectura escalable
- Despliegue en la nube

---

## Autor

Luna Penagos Garcia

Juan Jose Alzate Garcia
