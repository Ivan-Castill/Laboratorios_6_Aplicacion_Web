// Ivan Castillo - Laboratorio 6
// LOCAL STORAGE

fetch("https://api.escuelajs.co/api/v1/products") // API falsa de productos utilizada
    .then(r => r.json())
    .then(data => {
        if (data.length > 52) {
            const productoGamer = data[52];
            console.log(productoGamer);
            guardarLocalStorage(productoGamer);
        } else {
            console.warn("No hay suficientes productos en la API.");
        }
    })
    .catch(e => console.log(e));

// Función para guardar en el localStorage
const guardarLocalStorage = (data) => {
    localStorage.setItem("Producto Silla Gamer: ", JSON.stringify(data));
}

// TODO ESTO SE PEGA EN LA CONSOLA DEL NAVEGADOR Y VISUALIZAR SU CONTENIDO EN LA PARTE DE APLICACION - LOCAL STORAGE

// Aqui importamos la funcion login de Autenticar,js
import login from './Autenticar.js' 
login("Ivan_Java", "1593") 