console.log("polimorfismo");
class persona {
    constructor(nombre,edad,color,peso){
        this.nombre=nombre;
        this.edad=edad;
        this.color=color;
        this.peso=peso;
        

    }
    describir (){
        console.log(`${this.nombre} tiene ${this.edad} años con color ${this.color} y con peso ${this.peso}` );
    }
}
p1= new persona("alejo","18","blanco","64kg")
p2= new persona ("thomasino","12","negro carbon","5kg");
p1.describir();
p2.describir();