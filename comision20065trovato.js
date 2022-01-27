//Variables

let producto = 0;
let cantidad = 0;
let envio = 0;
let precio = 0;
let iva = 1.21;
let total = 0;


//Sumo IVA
const generarIva = () => {
    precio = precio * 1.21;
}

const sumarTotal = () => {    
    precio = precio * cantidad;
}

const costoEnvio = () => {       
        if (precio < 10000) {
            envio = envio + 500
        }
}
const pedido = () => {  

    while (producto <= 0 || producto < 4) {
        
        producto = parseInt(prompt('BIENVENIDO A GAMESPABLO Express \n Seleccione el número del producto que desea comprar: \n 1: Memorias RAM 16GB HyperX Fury 3200mhz DDR4 - $9860 \n 2: Disco Solido M.2 Corsair 500GB - $17499 \n 3: Fuente Corsair 650w - $13890 \n 4: GPU Nvidia Geforce RTX TUF GAMING 3070 - $260000 \n PRECIOS SIN IVA INCLUIDO \n COSTO DE ENVIO $600, COMPRA MAYOR A $10000, ENVIO GRATUITO'))

        switch (producto) {
            case 1:
                    producto = "Memorias RAM 16GB HyperX Fury 3200mhz DDR4";
                    precio = 9860;
                break;
            case 2:
                    producto = "Disco Solido M.2 Corsair 500GB" ;
                    precio = 17499 ;
                break;
            case 3:
                    producto = "Fuente Corsair 650w" ;
                    precio = 13890 ;
                break;
            case 4:
                    producto = "GPU Nvidia Geforce RTX TUF GAMING 3070" ;
                    precio = 260000 ;
                break;
        }

        while (cantidad <= 0) {
            cantidad = parseInt(prompt(`¿Cuantas unidades de ${producto} vas a llevar?`));
            
        }
    }
}


pedido();
generarIva();
costoEnvio();
sumarTotal();

//Ticket de salida
alert(`Detalle de su compra:\n${producto}\nCantidad: ${cantidad}\nCosto de envio: $${envio}\nTotal: $${precio}`)