const corpo = document.querySelector('body');

function myFunction() {
    corpo.setAttribute("class", "classeTeste")
}

const relogio = document.querySelector(".horas");

setInterval( ()=> {
    const horas = new Date(); 
    relogio.innerHTML = horas.toLocaleTimeString();

}

)

const data = document.querySelector(".data");

const dataDate = new Date();
data.innerHTML = dataDate.toLocaleDateString('pt-BR', {day:"2-digit", month: "long", year:"numeric" })
