let boton= $("#btn");
$(boton).click(function(){
let nomb= $("#n1").val();
let trab= $("#t1").val();
let fec= $("#fech").val();

let datos= {
    Nombre:nomb,
    Trabajo:trab,
    Fecha:fec,
};

$.ajax({
    method:"POST",
    url:'https://reqres.in/api/users',
    data:datos,
    success:function(data){
        $("#n").html(datos.Nombre);
        $("#t").html(datos.Trabajo);
        $("#f").html(datos.Fecha);
        $("#i").html(data.id);
        alert('Registro Almacenado')
    
    }
})
});
