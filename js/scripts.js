const horarioElemento = document.getElementById("horario");
const diaElemento = document.getElementById("dia");

const clockDisplay = document.querySelector(".clock");


const initNow = new Date();
const initHora = initNow.getHours()<10 ? "0"+initNow.getHours().toString() : initNow.getHours().toString();
const initMinutos = initNow.getMinutes()<10 ? "0"+initNow.getMinutes().toString() : initNow.getMinutes().toString();
const initSegundos = initNow.getSeconds()<10 ? "0"+initNow.getSeconds().toString() : initNow.getSeconds().toString();

const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const initDate = initNow.getUTCDate()<10 ? "0"+initNow.getUTCDate().toString() : initNow.getUTCDate().toString();

horarioElemento.innerHTML = `${initHora}:${initMinutos}:${initSegundos}`;
diaElemento.innerHTML = `${diasSemana[initNow.getUTCDay()]}, Dia ${initDate} de ${meses[initNow.getUTCMonth()]} de ${initNow.getUTCFullYear()}`;
document.body.style.background = "var(--bgInit)";
clockDisplay.style.background = "var(--clockInit)";

setInterval(() => {
    const now = new Date();
    // Hora
    const horas = now.getHours()<10 ? "0"+now.getHours().toString() : now.getHours().toString();
    const minutos = now.getMinutes()<10 ? "0"+now.getMinutes().toString() : now.getMinutes().toString();
    const segundos = now.getSeconds()<10 ? "0"+now.getSeconds().toString() : now.getSeconds().toString();
    horarioElemento.innerHTML = `${horas}:${minutos}:${segundos}`;

    // Dia semana
    const dia = diasSemana[now.getDay()];
    // Dia mês
    const date = now.getUTCDate()<10 ? "0"+now.getUTCDate().toString() : now.getUTCDate().toString();
    // Mês
    const mes = meses[now.getUTCMonth()];
    // Ano
    const ano = now.getUTCFullYear().toString();
    
    diaElemento.innerHTML = `${dia}, Dia ${date} de ${mes} de ${ano}`;
    if (horas>=6 && horas<10) {
        // MANHA
        document.body.style.backgroundImage = "var(--bgManha)";
        clockDisplay.style.background = "var(--clockManhaColor)";
    } else if (horas>=10 && horas<16) {
        // DIA
        document.body.style.backgroundImage = "var(--bgDia)";
        clockDisplay.style.background = "var(--clockDiaColor)";
    } else if (horas>=16 && horas<20) {
        // TARDE
        document.body.style.backgroundImage = "var(--bgTarde)";
        clockDisplay.style.background = "var(--clockTardeColor)"
    } else if ((horas>=20 && horas<24) || (horas>=0 && horas<6)) {
        // NOITE
        document.body.style.backgroundImage = "var(--bgNoite)";
        clockDisplay.style.background = "var(--clockNoiteColor)";
    }
}, 1000);
