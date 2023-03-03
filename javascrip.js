document.addEventListener("DOMContentLoaded", function() {
    var datos = 0;
    
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
