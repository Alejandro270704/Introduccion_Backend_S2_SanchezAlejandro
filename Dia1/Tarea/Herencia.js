console.log("herencia")
class animal {
    constructor(nombreData,razaData,colorData,pesoData){
        this.nombre=nombreData;
        this.raza=razaData;
        this.color=colorData;
        this.peso=pesoData;
        

    }
    describir (){
        console.log(`El ${this.nombre} es un animal de raza ${this.raza} con color ${this.color} con peso ${this.peso}` );
    }
}
class perro extends animal {
    ladrar(){
        console.log(`el ${this.nombre} ladra`)
    }
}
class gato extends animal {
    aulla(){
        console.log (`el ${this.nombre} aulla`)
    }
}
A1= new perro("perro","pincher","popo","8kg")
A2= new gato ("gato","criollo","negro","5kg");
A1.describir();
A1.ladrar();
A2.describir();
A2.aulla();