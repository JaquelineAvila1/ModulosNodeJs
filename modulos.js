const express = require('express');
const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');

//funcion para que se reconozcan diferentes extensiones de archivos

const storage = multer.diskStorage({
    destination: 'uploads/', 
    filename: function(req, file, cb){
        cb("",Date.now() + "." + mimeTypes.extension(file.mimetype));
    }
})

//funcion que leera los archivos
const archivo = multer({
    storage: storage
})

app.get("/",(req, res)=> {
    console.log(__dirname)
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/files", archivo.single('nombre'), (req,res)=>{
    res.send("Archivo guardado exitosamente");

})

app.listen(8080,()=>console.log("Servidor iniciado"))