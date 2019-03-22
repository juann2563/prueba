'use strict'
// Se crea un objeto controller tipo json
let Project = require("../Models/ProjectModel")
let controller = {
    home: function(req,res){
        return res.status(200).send({
            message: 'soy la home'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message: 'Soy el método test del controlador project'
        });
    },
    inicio: function(req,res){
        return res.status(200).send({
            mensaje: "todo bien inicio"
        });
    },
    saveproject: function(req,res){
        let project = new Project();
        let params = req.body;
        
        project.nombre = params.nombre;
        project.apellido = params.apellido;
        project.ciudad = params.ciudad;
        project.edad = params.edad;
        project.fruta = params.fruta;
        project.save((err,projectStored)=>{
            if(err){
                return res.status(500).send({
                    mensaje: "no se ha podido guardar el documento"
                });
            }
            if(!projectStored){
                return res.status(404).send({
                    mensaje: "No se ha podido guardar el proyecto"
                });
            }
            return res.status(200).send({
                project: projectStored,
                mensaje:"todo bien"
            });
        }); 
    },
    deleteProject:function(req,res){
        Project.find({nombre:req.body.nombre},(err,collection)=>{
            if(err){
                return res.status(500).send({mensaje: "No se pudieron obtener documentos"});
            }
            // En collecion llegan todos los documentos que obtengo desde mongo
            return res.status(200).send(collection);
        }).sort({edad:-1}).limit(1); // sort - 1 de menor a mayor -1 de mayor a menor
    }

};

module.exports = controller;