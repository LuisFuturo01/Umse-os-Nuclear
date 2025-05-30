// Datos simulados de la base de datos (actualizados con valores realistas)
let datosPresion = [
  { fecha: '2025-05-27', hora: '08:00', presion: 0.75 },
  { fecha: '2025-05-27', hora: '09:00', presion: 0.77 },
  { fecha: '2025-05-27', hora: '10:00', presion: 0.79 },
  { fecha: '2025-05-27', hora: '11:00', presion: 0.78 },
  { fecha: '2025-05-27', hora: '12:00', presion: 0.80 },
  { fecha: '2025-05-27', hora: '13:00', presion: 0.82 },
  { fecha: '2025-05-27', hora: '14:00', presion: 0.81 },
  { fecha: '2025-05-27', hora: '15:00', presion: 0.83 },
  { fecha: '2025-05-27', hora: '16:00', presion: 0.84 },
  { fecha: '2025-05-27', hora: '17:00', presion: 0.82 }
];

let datosRadiacion = [
  { fecha: '2025-05-27', hora: '08:00', radiacion: 0.12 },
  { fecha: '2025-05-27', hora: '09:00', radiacion: 0.15 },
  { fecha: '2025-05-27', hora: '10:00', radiacion: 0.18 },
  { fecha: '2025-05-27', hora: '11:00', radiacion: 0.20 },
  { fecha: '2025-05-27', hora: '12:00', radiacion: 0.22 },
  { fecha: '2025-05-27', hora: '13:00', radiacion: 0.25 },
  { fecha: '2025-05-27', hora: '14:00', radiacion: 0.23 },
  { fecha: '2025-05-27', hora: '15:00', radiacion: 0.21 },
  { fecha: '2025-05-27', hora: '16:00', radiacion: 0.19 },
  { fecha: '2025-05-27', hora: '17:00', radiacion: 0.17 }
];

let datosTemperatura = [
  { fecha: '2025-05-27', hora: '08:00', temperatura: 290 },
  { fecha: '2025-05-27', hora: '09:00', temperatura: 295 },
  { fecha: '2025-05-27', hora: '10:00', temperatura: 300 },
  { fecha: '2025-05-27', hora: '11:00', temperatura: 305 },
  { fecha: '2025-05-27', hora: '12:00', temperatura: 310 },
  { fecha: '2025-05-27', hora: '13:00', temperatura: 315 },
  { fecha: '2025-05-27', hora: '14:00', temperatura: 318 },
  { fecha: '2025-05-27', hora: '15:00', temperatura: 320 },
  { fecha: '2025-05-27', hora: '16:00', temperatura: 318 },
  { fecha: '2025-05-27', hora: '17:00', temperatura: 315 }
];

let datosProduccion = [
  { fecha: '2025-05-27', hora: '08:00', produccion: 500 },
  { fecha: '2025-05-27', hora: '09:00', produccion: 520 },
  { fecha: '2025-05-27', hora: '10:00', produccion: 540 },
  { fecha: '2025-05-27', hora: '11:00', produccion: 560 },
  { fecha: '2025-05-27', hora: '12:00', produccion: 580 },
  { fecha: '2025-05-27', hora: '13:00', produccion: 600 },
  { fecha: '2025-05-27', hora: '14:00', produccion: 620 },
  { fecha: '2025-05-27', hora: '15:00', produccion: 630 },
  { fecha: '2025-05-27', hora: '16:00', produccion: 610 },
  { fecha: '2025-05-27', hora: '17:00', produccion: 590 }
];

let datosFlujoNeutrones = [
  { fecha: '2025-05-27', hora: '08:00', flujoNeutrones: 1.0e12 },
  { fecha: '2025-05-27', hora: '09:00', flujoNeutrones: 1.2e12 },
  { fecha: '2025-05-27', hora: '10:00', flujoNeutrones: 1.4e12 },
  { fecha: '2025-05-27', hora: '11:00', flujoNeutrones: 1.5e12 },
  { fecha: '2025-05-27', hora: '12:00', flujoNeutrones: 1.6e12 },
  { fecha: '2025-05-27', hora: '13:00', flujoNeutrones: 1.7e12 },
  { fecha: '2025-05-27', hora: '14:00', flujoNeutrones: 1.8e12 },
  { fecha: '2025-05-27', hora: '15:00', flujoNeutrones: 1.9e12 },
  { fecha: '2025-05-27', hora: '16:00', flujoNeutrones: 1.7e12 },
  { fecha: '2025-05-27', hora: '17:00', flujoNeutrones: 1.5e12 }
];

let datosNivelAgua = [
  { fecha: '2025-05-27', hora: '08:00', nivelAgua: 4.5 },
  { fecha: '2025-05-27', hora: '09:00', nivelAgua: 4.8 },
  { fecha: '2025-05-27', hora: '10:00', nivelAgua: 5.0 },
  { fecha: '2025-05-27', hora: '11:00', nivelAgua: 5.2 },
  { fecha: '2025-05-27', hora: '12:00', nivelAgua: 5.4 },
  { fecha: '2025-05-27', hora: '13:00', nivelAgua: 5.6 },
  { fecha: '2025-05-27', hora: '14:00', nivelAgua: 5.8 },
  { fecha: '2025-05-27', hora: '15:00', nivelAgua: 6.0 },
  { fecha: '2025-05-27', hora: '16:00', nivelAgua: 5.8 },
  { fecha: '2025-05-27', hora: '17:00', nivelAgua: 5.6 }
];

let datosExposicionPersonal = [
  { fecha: '2025-05-27', hora: '08:00', exposicionPersonal: 150 },
  { fecha: '2025-05-27', hora: '09:00', exposicionPersonal: 160 },
  { fecha: '2025-05-27', hora: '10:00', exposicionPersonal: 170 },
  { fecha: '2025-05-27', hora: '11:00', exposicionPersonal: 180 },
  { fecha: '2025-05-27', hora: '12:00', exposicionPersonal: 190 },
  { fecha: '2025-05-27', hora: '13:00', exposicionPersonal: 200 },
  { fecha: '2025-05-27', hora: '14:00', exposicionPersonal: 210 },
  { fecha: '2025-05-27', hora: '15:00', exposicionPersonal: 220 },
  { fecha: '2025-05-27', hora: '16:00', exposicionPersonal: 210 },
  { fecha: '2025-05-27', hora: '17:00', exposicionPersonal: 200 }
];

let datosAlarmas = [
  { fecha: '2025-05-27', hora: '08:00', alarmas: 2 },
  { fecha: '2025-05-27', hora: '09:00', alarmas: 3 },
  { fecha: '2025-05-27', hora: '10:00', alarmas: 1 },
  { fecha: '2025-05-27', hora: '11:00', alarmas: 0 },
  { fecha: '2025-05-27', hora: '12:00', alarmas: 2 },
  { fecha: '2025-05-27', hora: '13:00', alarmas: 1 },
  { fecha: '2025-05-27', hora: '14:00', alarmas: 3 },
  { fecha: '2025-05-27', hora: '15:00', alarmas: 2 },
  { fecha: '2025-05-27', hora: '16:00', alarmas: 1 },
  { fecha: '2025-05-27', hora: '17:00', alarmas: 0 }
];

let datosTiempoOperacion = [
  { fecha: '2025-05-27', hora: '08:00', tiempoOperacion: 8 },
  { fecha: '2025-05-27', hora: '09:00', tiempoOperacion: 9 },
  { fecha: '2025-05-27', hora: '10:00', tiempoOperacion: 10 },
  { fecha: '2025-05-27', hora: '11:00', tiempoOperacion: 11 },
  { fecha: '2025-05-27', hora: '12:00', tiempoOperacion: 12 },
  { fecha: '2025-05-27', hora: '13:00', tiempoOperacion: 13 },
  { fecha: '2025-05-27', hora: '14:00', tiempoOperacion: 14 },
  { fecha: '2025-05-27', hora: '15:00', tiempoOperacion: 15 },
  { fecha: '2025-05-27', hora: '16:00', tiempoOperacion: 16 },
  { fecha: '2025-05-27', hora: '17:00', tiempoOperacion: 17 }
];

let datosConcentracionGases = [
  { fecha: '2025-05-27', hora: '08:00', concentracionGases: 500 },
  { fecha: '2025-05-27', hora: '09:00', concentracionGases: 520 },
  { fecha: '2025-05-27', hora: '10:00', concentracionGases: 540 },
  { fecha: '2025-05-27', hora: '11:00', concentracionGases: 560 },
  { fecha: '2025-05-27', hora: '12:00', concentracionGases: 580 },
  { fecha: '2025-05-27', hora: '13:00', concentracionGases: 600 },
  { fecha: '2025-05-27', hora: '14:00', concentracionGases: 620 },
  { fecha: '2025-05-27', hora: '15:00', concentracionGases: 640 },
  { fecha: '2025-05-27', hora: '16:00', concentracionGases: 620 },
  { fecha: '2025-05-27', hora: '17:00', concentracionGases: 600 }
];

// Rango de simulación para cada gráfico
const rangosSimulacion = {
  graficaPresionBarra: { min: 120, max: 180 },       // bar
  graficaRadiacionBarra: { min: 0.1, max: 0.5 },    // mSv/h
  graficaTemperaturaBarra: { min: 280, max: 320 },  // Kelvin
  graficaProduccionBarra: { min: 0, max: 1000 },    // MW
  graficaFlujoNeutronesBarra: { min: 1e12, max: 1e14 }, // n/cm²s
  graficaNivelAguaBarra: { min: 3, max: 7 },        // metros
  graficaExposicionPersonalBarra: { min: 100, max: 500 }, // µSv
  graficaAlarmasBarra: { min: 0, max: 50 },         // conteo
  graficaTiempoOperacionBarra: { min: 0, max: 24 }, // horas
  graficaConcentracionGasesBarra: { min: 0, max: 600 }, // ppm
};

// Configuración de gráficos
const configuracionesGraficas = [
  { idBarra: 'graficaPresionBarra', idLinea: 'graficaPresionLinea', datos: datosPresion, campo: 'presion', etiqueta: 'Presión (bar)' },
  { idBarra: 'graficaRadiacionBarra', idLinea: 'graficaRadiacionLinea', datos: datosRadiacion, campo: 'radiacion', etiqueta: 'Radiación (µSv/h)' },
  { idBarra: 'graficaTemperaturaBarra', idLinea: 'graficaTemperaturaLinea', datos: datosTemperatura, campo: 'temperatura', etiqueta: 'Temperatura (°C)' },
  { idBarra: 'graficaProduccionBarra', idLinea: 'graficaProduccionLinea', datos: datosProduccion, campo: 'produccion', etiqueta: 'Producción (MW)' },
  { idBarra: 'graficaFlujoNeutronesBarra', idLinea: 'graficaFlujoNeutronesLinea', datos: datosFlujoNeutrones, campo: 'flujoNeutrones', etiqueta: 'Flujo de Neutrones (n/cm²·s)' },
  { idBarra: 'graficaNivelAguaBarra', idLinea: 'graficaNivelAguaLinea', datos: datosNivelAgua, campo: 'nivelAgua', etiqueta: 'Nivel de Agua (m)' },
  { idBarra: 'graficaExposicionPersonalBarra', idLinea: 'graficaExposicionPersonalLinea', datos: datosExposicionPersonal, campo: 'exposicionPersonal', etiqueta: 'Exposición Personal (µSv)' },
  { idBarra: 'graficaAlarmasBarra', idLinea: 'graficaAlarmasLinea', datos: datosAlarmas, campo: 'alarmas', etiqueta: 'Alarmas (cantidad)' },
  { idBarra: 'graficaTiempoOperacionBarra', idLinea: 'graficaTiempoOperacionLinea', datos: datosTiempoOperacion, campo: 'tiempoOperacion', etiqueta: 'Tiempo de Operación (horas)' },
  { idBarra: 'graficaConcentracionGasesBarra', idLinea: 'graficaConcentracionGasesLinea', datos: datosConcentracionGases, campo: 'concentracionGases', etiqueta: 'Concentración de Gases (ppm)' },
];

const charts = {};

// Función para crear y actualizar las gráficas de barra y línea
function crearActualizarGraficas(idCanvasBarra, idCanvasLinea, datos, campoValor, etiqueta) {
  const canvasBarra = document.getElementById(idCanvasBarra);
  const canvasLinea = document.getElementById(idCanvasLinea);
  const ctxBarra = canvasBarra.getContext('2d');
  const ctxLinea = canvasLinea.getContext('2d');

  const labels = datos.map(d => `${d.fecha} ${d.hora}`);
  const dataValores = datos.map(d => d[campoValor]);

  if (!charts[idCanvasBarra]) {
    charts[idCanvasBarra] = new Chart(ctxBarra, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: etiqueta,
          data: dataValores,
          backgroundColor: 'rgba(26, 129, 124, 0.7)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } else {
    charts[idCanvasBarra].data.labels = labels;
    charts[idCanvasBarra].data.datasets[0].data = dataValores;
    charts[idCanvasBarra].update();
  }

  if (!charts[idCanvasLinea]) {
    charts[idCanvasLinea] = new Chart(ctxLinea, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: etiqueta,
          data: dataValores,
          borderColor: 'rgba(26, 129, 124, 0.7)',
          borderWidth: 2,
          tension: 0.3,
          fill: false,
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } else {
    charts[idCanvasLinea].data.labels = labels;
    charts[idCanvasLinea].data.datasets[0].data = dataValores;
    charts[idCanvasLinea].update();
  }
}

// Función para obtener la hora siguiente en formato "HH:mm"
function obtenerHoraSiguiente(horaActual) {
  let [h, m] = horaActual.split(':').map(Number);
  h = (h + 1) % 24;
  return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
}

// Función para agregar un nuevo dato random al array y actualizar las gráficas
function simularNuevoDato(idCanvasBarra, idCanvasLinea, datos, campoValor, etiqueta, rangoMin, rangoMax) {
  let ultimoDato = datos[datos.length - 1];
  let nuevaHora = obtenerHoraSiguiente(ultimoDato.hora);
  let nuevaFecha = ultimoDato.fecha;
  let valorRandom = parseFloat((Math.random() * (rangoMax - rangoMin) + rangoMin).toFixed(2));

  let nuevoDato = {
    fecha: nuevaFecha,
    hora: nuevaHora,
    [campoValor]: valorRandom
  };

  datos.push(nuevoDato);
  if (datos.length > 15) datos.shift();

  crearActualizarGraficas(idCanvasBarra, idCanvasLinea, datos, campoValor, etiqueta);
}

// Crear todas las gráficas
configuracionesGraficas.forEach(config => {
  crearActualizarGraficas(config.idBarra, config.idLinea, config.datos, config.campo, config.etiqueta);
});

// Simular nuevos datos para todas las gráficas
setInterval(() => {
  configuracionesGraficas.forEach(config => {
    const rango = rangosSimulacion[config.idBarra];
    simularNuevoDato(config.idBarra, config.idLinea, config.datos, config.campo, config.etiqueta, rango.min, rango.max);
  });
}, 3000);
