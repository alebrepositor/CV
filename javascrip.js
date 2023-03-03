document.addEventListener("DOMContentLoaded", function() {
    $.get({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          console.log(data.results[0].gender);
        }
    });
});
