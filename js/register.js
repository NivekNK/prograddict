$(function () {
    $("form[name='registro'").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3,
                number: false
            },
            apellido_pat: {
                required: true,
                minlength: 3,
                number: false
            },
            apellido_mat: {
                required: true,
                minlength: 3,
                number: false
            },
            rut: {
                required: true,
                minlength: 8,
                maxlength: 9,
                text: false
            },
            correo_electronico: {
                required: true,
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            nombre: {
                required: "Debe ingresar Nombres",
                minlength: "Debe ingresar un nombre valido",
                number: "Debe ingresar un nombre valido"

            },
            apellido_pat: {
                required: "Debe ingresar apellido",
                minlength: "Debe ingresar un apellido valido",
                number: "Debe ingresar un apellido valido"
            },
            apellido_mat: {
                required: "Debe ingresar apellido",
                minlength: "Debe ingresar un apellido valido",
                number: "Debe ingresar un apellido valido"
            },
            rut: {
                required: "Debe ingresar rut",
                minlength: "Debe ingresar su rut completo con dígito verificador",
                text: "Debe ingresar un rut valido"
            },
            correo_electronico: {
                required: "Debe ingresar un correo electronico valido"
            },
            password: {
                required: "Debe ingresar contraseña",
                minlength: "Contraseña invalida"
            }
        }
    })
})


$("form[name='registro']").submit(function(event){
    event.preventDefault();
    if($("form[name='registro']").valid()){
        window.location.href = "panel.html";
    }
});