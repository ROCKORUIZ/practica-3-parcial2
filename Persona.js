class Persona{
    constructor(){
        this.nombre=null;
        this.apellido=null;
        this.telefono=null;
        this.genero=null;
    }
 update(){
     database.ref('persona').set({
         'nombre': this.nombre,
         'apellido': this.apellido,
         'telefono':this.telefono,
         'genero': this.genero
     })
 }
}