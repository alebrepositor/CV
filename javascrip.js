document.addEventListener("DOMContentLoaded", function() {
    let datos;
    $.get({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          datos = data;
        }
    });
    console.log(datos);
});
