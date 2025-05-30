// Configuración de gráficos optimizada
const configuracionesGraficas = [
  { 
    idBarra: 'graficaPresionBarra', 
    idLinea: 'graficaPresionLinea', 
    datos: datos.presion, 
    campo: 'presion', 
    etiqueta: 'Presión',
    unidad: 'bar',
    color: 'rgba(26, 129, 124, 0.7)'
  },
  { 
    idBarra: 'graficaRadiacionBarra', 
    idLinea: 'graficaRadiacionLinea', 
    datos: datos.radiacion, 
    campo: 'radiacion', 
    etiqueta: 'Radiación',
    unidad: 'mSv/h',
    color: 'rgba(220, 50, 50, 0.7)'
  },
  { 
    idBarra: 'graficaTemperaturaBarra', 
    idLinea: 'graficaTemperaturaLinea', 
    datos: datos.temperatura, 
    campo: 'temperatura', 
    etiqueta: 'Temperatura',
    unidad: 'K',
    color: 'rgba(255, 159, 64, 0.7)'
  },
  { 
    idBarra: 'graficaProduccionBarra', 
    idLinea: 'graficaProduccionLinea', 
    datos: datos.produccion, 
    campo: 'produccion', 
    etiqueta: 'Producción',
    unidad: 'MW',
    color: 'rgba(75, 192, 192, 0.7)'
  },
  { 
    idBarra: 'graficaFlujoNeutronesBarra', 
    idLinea: 'graficaFlujoNeutronesLinea', 
    datos: datos.flujoNeutrones, 
    campo: 'flujoNeutrones', 
    etiqueta: 'Flujo de Neutrones',
    unidad: 'n/cm²·s',
    color: 'rgba(153, 102, 255, 0.7)'
  },
  { 
    idBarra: 'graficaNivelAguaBarra', 
    idLinea: 'graficaNivelAguaLinea', 
    datos: datos.nivelAgua, 
    campo: 'nivelAgua', 
    etiqueta: 'Nivel de Agua',
    unidad: 'm',
    color: 'rgba(54, 162, 235, 0.7)'
  },
  { 
    idBarra: 'graficaExposicionPersonalBarra', 
    idLinea: 'graficaExposicionPersonalLinea', 
    datos: datos.exposicionPersonal, 
    campo: 'exposicionPersonal', 
    etiqueta: 'Exposición Personal',
    unidad: 'µSv',
    color: 'rgba(255, 205, 86, 0.7)'
  },
  { 
    idBarra: 'graficaAlarmasBarra', 
    idLinea: 'graficaAlarmasLinea', 
    datos: datos.alarmas, 
    campo: 'alarmas', 
    etiqueta: 'Alarmas',
    unidad: 'cantidad',
    color: 'rgba(255, 99, 132, 0.7)'
  },
  { 
    idBarra: 'graficaTiempoOperacionBarra', 
    idLinea: 'graficaTiempoOperacionLinea', 
    datos: datos.tiempoOperacion, 
    campo: 'tiempoOperacion', 
    etiqueta: 'Tiempo de Operación',
    unidad: 'horas',
    color: 'rgba(201, 203, 207, 0.7)'
  },
  { 
    idBarra: 'graficaConcentracionGasesBarra', 
    idLinea: 'graficaConcentracionGasesLinea', 
    datos: datos.concentracionGases, 
    campo: 'concentracionGases', 
    etiqueta: 'Concentración de Gases',
    unidad: 'ppm',
    color: 'rgba(255, 159, 64, 0.7)'
  }
];