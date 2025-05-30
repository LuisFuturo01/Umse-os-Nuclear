// Datos simulados optimizados
const datos = {
  presion: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    presion: 0.75 + i * 0.01 + Math.random() * 0.02
  })),
  radiacion: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    radiacion: 0.12 + i * 0.01 + Math.random() * 0.02
  })),
  temperatura: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    temperatura: 290 + i * 3 + Math.random() * 2
  })),
  produccion: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    produccion: 500 + i * 15 + Math.random() * 10
  })),
  flujoNeutrones: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    flujoNeutrones: (1.0e12) + (i * 0.2e12) + Math.random() * 0.1e12
  })),
  nivelAgua: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    nivelAgua: 4.5 + i * 0.15 + Math.random() * 0.1
  })),
  exposicionPersonal: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    exposicionPersonal: 150 + i * 8 + Math.random() * 5
  })),
  alarmas: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    alarmas: Math.floor(Math.random() * 4)
  })),
  tiempoOperacion: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    tiempoOperacion: 8 + i
  })),
  concentracionGases: Array.from({length: 10}, (_, i) => ({
    fecha: '2025-05-27', 
    hora: `${8 + i}:00`, 
    concentracionGases: 500 + i * 15 + Math.random() * 10
  }))
};

// Rangos de simulación optimizados
const rangosSimulacion = {
  presion: { min: 120, max: 180 },
  radiacion: { min: 0.1, max: 0.5 },
  temperatura: { min: 280, max: 320 },
  produccion: { min: 0, max: 1000 },
  flujoNeutrones: { min: 1e12, max: 1e14 },
  nivelAgua: { min: 3, max: 7 },
  exposicionPersonal: { min: 100, max: 500 },
  alarmas: { min: 0, max: 50 },
  tiempoOperacion: { min: 0, max: 24 },
  concentracionGases: { min: 0, max: 600 }
};