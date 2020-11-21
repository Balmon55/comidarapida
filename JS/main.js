var app = new Vue({
     // Brayan Marin
     el: "#app",
     data: {
    cliente:"",
    adiP:false,
    adiT:false,
    adiQ:false,
    adiC:false,
    producto:"",
    preH:12000,
    preP:8000,
    preQ:1400,
    preT:1200,
    prePS:4000,
    preC:7000,
    cambio:0,
    efectivo:0,
    total:0,
    mensaje:"",
    arrayDatos:[],
     },
     
     methods: {
       cambio:function(){
        alert(`El cliente es : ${this.cliente}`);
       }
          
       },
       
      
     
   });
     //     Brayan Marin