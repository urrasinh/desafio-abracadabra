const express = require("express")

// requerimineto 1
// Crear un servidor con Express en el puerto 3000
const app = express()
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000")
})

// requerimineto 2
// Definir la carpeta “assets” como carpeta pública del servidor.

// Ocupa un middleware y el método “static” de Express para declarar la carpeta “assets” como directorio público del servidor.
app.use(express.static("assets"))

// Crea una ruta GET raíz que devuelva el documento index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// requerimineto 3
// Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios.

const usuarios = { "usuarios": ["juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"] }

app.get("/abracadabra/usuarios", (req, res) => {
    res.send(usuarios)
})

app.use("/abracadabra/juego:/usuario", (req, res, next) => {
    const nombre = req.params.usuario
    const usuariosArray = usuarios.usuarios
    const usuarioFiltrado = usuariosArray.find((element) => element === nombre)

    if (usuarioFiltrado) {
        next()
    } else {
        res.redirect(__dirname + '/who.jpg')
    }
})

// Crear una ruta /abracadabra/conejo/:n 
// que valide si el parámetro “n” coincide con el número generado de forma aleatoria.
// En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort

app.get("/abracadabra/juego:/usuario", (req, res) => {
    const nombre = req.params.usuario
    res.redirect("/")
})

app.get("/abracadabra/conejo/:n", (req, res) => {
const numeroSeleccion = req.params.n;
    const numAzar = Math.floor(Math.random() * 4);
        numAzar == numeroSeleccion
        ? res.redirect("/conejito.jpg")
        : res.redirect("/voldemort.jpg");
});


// ruta con * para cualquiera que no exista
app.get("*", (req, res) => {
    
    res.send("<center><h1>Sorry, aquí no hay nada :/ </h1> </center>");
})

