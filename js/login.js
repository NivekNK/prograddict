$(function () {
    $("form[name='login']").validate({
        rules: {
            correo_electronico: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            correo_electronico: {
                required: "Por favor ingresar correo electronico."
            },
            password: {
                required: "Por favor ingresar contraseña."
            }
        }
    });
});

$("form[name='login']").submit(function(event){
    event.preventDefault();
    if($("form[name='login']").valid()){
        window.location.href = "panel.html";
    }
});


// $(function () {
//     $("form[name='datos']").validate({
//         rules: {
//             nombre: {
//                 required: true,
//                 number: false,
//                 maxlength: 30
//             },
//             telefono: {
//                 required: true,
//                 minlength: 8
//             }
//         },
//         messages: {
//             nombre: {
//                 required: "Por favor ingresar nombre!",
//                 maxlength: "Por favor ingresar nombre menor a 30 caracteres!"
//             },
//             telefono: {
//                 required: "Por favor ingresar telefono!",
//                 minlength: "Por favor ingresar telefono mayor a 8 digitos!"
//             }
//         },
//         submitHandler: function (form) {
//             form.submit();
//         }
//     });
// });