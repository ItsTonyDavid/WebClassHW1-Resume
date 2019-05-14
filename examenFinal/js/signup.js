
$('#signup_button').on('click', function(){
  // cargar los valores de password, email, name, age
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  json_to_send = {
    "password" : password,
    "email": email,
    "name": name,
    "age": age
  };

  json_to_send = JSON.stringify(json_to_send);
  console.log(json_to_send);
  $.ajax({
    url: 'https://webexamfinal.herokuapp.com/users',
    // url: 'https://tuapp.herokuapp.com/users',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Usuario creado con exito");
      console.log('success: '+ data);
      window.location = './index.html'
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});
