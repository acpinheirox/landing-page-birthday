AOS.init();

const dataDoEvento = new Date("dec 7, 2023 19:00"); //data do aniversário
const timeStampDoEvento = dataDoEvento.getTime();   //Obtendo o timestamp da data do aniversário

const contaAsHoras = setInterval(function() {
    const agora = new Date();   //data atual
    const timeStampAtual = agora.getTime(); //Obtendo o timestamp da data do atual

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; //calculando distância até o aniversário
    const diaEmMs = 1000 * 60 * 60 * 24;   
    const horaEmMs = 1000 * 60 * 60;        
    const minutoEmMs = 1000 * 60;           

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);

        document.getElementById("contador").innerHTML = 'Aguarde o próximo aniversário';
    }
}, 1000);