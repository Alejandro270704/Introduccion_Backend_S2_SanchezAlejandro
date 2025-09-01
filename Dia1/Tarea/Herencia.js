class animal {
    constructor(nombreData,razaData,colorData,pesoData){
        this.nombre=nombreData;
        this.razaData=razaData;
        this.colorData=colorData;
        this.pesoData=pesoData;
        

    }
    herencia (){
        console.log(`El ${this.nombre} es un animal` );
    }
}
A1= new animal("perro","pincher","popo","8kg")
A1.herencia() 
A2= new animal ("gato","criollo","negro","5kg");
A2.herencia() 