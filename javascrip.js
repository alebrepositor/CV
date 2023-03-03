document.addEventListener("DOMContentLoaded", function() {
    $.get({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          console.log(data.result.gender);
        }
    });
});
