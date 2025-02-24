const singInBtnlink = document.querySelector('.singInBtn-link');
const singUpBtnlink = document.querySelector('.singUpBtn-link');
const wrapper = document.querySelector('.wrapper');

singUpBtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})

singInBtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})

function togglePassword(inputId, icon) {
    var passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.innerHTML = "<i class='bx bxs-lock-open-alt' ></i>"; // Muda o ícone para fechado
    } else {
        passwordInput.type = "password";
        icon.innerHTML = "<i class='bx bxs-lock-alt' ></i>"; // Muda o ícone para aberto
    }
}