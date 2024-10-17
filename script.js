document.title = "Iniciar Sesión";
//crear el contenedor principal para el formulario}
const container = document.createElement('div');
container.style.margin = '20px';

//crear el titulo 
const title = document.createElement('h2');
title.textContent = 'Iniciar sesión';
container.appendChild(title);

//crear el formulario 
const form = document.createElement('form');

//crear campo de nombre de usuario
const usernamelabel = document.createElement("label");
usernamelabel.textContent = "Nombre de usuario o usuaria"
const usernameinput = document.createElement("input");
usernameinput.type ='text';
usernameinput.required = 'true';
form.appendChild(usernamelabel);
form.appendChild(usernameinput);

const passwordlabel = document.createElement("label");
passwordlabel.textContent = "Contraseña"
const passwordinput = document.createElement("input");
passwordinput.type ='password';
passwordinput.required = 'true';
form.appendChild(passwordlabel);
form.appendChild(passwordinput);

//crear elemento
const submitButton = document.createElement('button')
submitButton.textContent = 'Iniciar Sesion';
form.appendChild(submitButton);

//Mensaje de respuesta
const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

//agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

//Datos de inicio de sesión predefinida
const validaUser = 'juanito';
const validaPassword = '2589';

//validar el use y el pas
form.addEventListener('submit',(event) => {
    event.preventDefault();
    //validar el nombre y el pass
    if(usernameinput.value === validaUser && passwordinput.value === validaPassword){
        message.textContent = '¡Bienvenido!';
        message.style.color = 'green'  
    }else{
        message.textContent = 'Nombre de usuario o contraseña incorrecto'
        message.style.color = 'red';
    }
    //limpiar los inputs
    usernameinput.value = '';
    passwordinput.value = '';        

}
)




