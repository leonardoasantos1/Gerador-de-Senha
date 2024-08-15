const sliderElement = document.querySelector('#slider');
const buttonElement = document.querySelector('#button');
const password = document.querySelector('.password');
const sizePassword = document.querySelector('#valor');
const containerPassword = document.querySelector('#container-password');

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&.';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha);
}