AOS.init();

const dataDaEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDaEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime()

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs) 
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs)
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) /  minutoEmMs)
    const segundosAteoEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);


    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteoEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteoEvento}s`

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)