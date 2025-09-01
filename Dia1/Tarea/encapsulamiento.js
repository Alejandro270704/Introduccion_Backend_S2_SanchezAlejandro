console.log("encapsulamiento")
class banco {
    #saldo=0;
    constructor (cuenta){
        this.cuenta=cuenta;
    }
    depositar(cantidad){
        if (cantidad>0){
            this.#saldo+=cantidad;
        }
    }
    versaldo(){
        console.log(`su saldo es ${this.#saldo}`)
    }
}
cuentaUsuario=new banco("alejo");
cuentaUsuario.depositar(40);
cuentaUsuario.versaldo();