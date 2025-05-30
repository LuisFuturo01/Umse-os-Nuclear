const charts = {};

// Función para crear elementos de gráfica en el DOM
function crearContenedoresGraficas() {
  const gridGraficas = document.querySelector('.grid-graficas');
  
  configuracionesGraficas.forEach(config => {
    const contenedor = document.createElement('div');
    contenedor.className = 'grafica-contenedor';
    
    contenedor.innerHTML = `
      <h3>${config.etiqueta} <span class="unit">(${config.unidad})</span></h3>
      <div class="chart-container">
        <canvas id="${config.idBarra}"></canvas>
      </div>
      <div class="chart-container">
        <canvas id="${config.idLinea}"></canvas>
      </div>
    `;
    
    gridGraficas.appendChild(contenedor);
  });
}

// Función para crear y actualizar las gráficas
function crearActualizarGraficas(config) {
  const { idBarra, idLinea, datos, campo, etiqueta, color, unidad } = config;
  
  const labels = datos.map(d => `${d.fecha} ${d.hora}`);
  const dataValores = datos.map(d => d[campo]);
  
  // Actualizar o crear gráfica de barras
  if (!charts[idBarra]) {
    charts[idBarra] = new Chart(document.getElementById(idBarra), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: `${etiqueta} (${unidad})`,
          data: dataValores,
          backgroundColor: color,
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            min: rangosSimulacion[campo].min,
            max: rangosSimulacion[campo].max,
            ticks: {
              precision: 2
            }
          },
          x: {
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          }
        }
      },
    });
  } else {
    charts[idBarra].data.labels = labels;
    charts[idBarra].data.datasets[0].data = dataValores;
    charts[idBarra].update();
  }
  
  // Actualizar o crear gráfica de línea
  if (!charts[idLinea]) {
    charts[idLinea] = new Chart(document.getElementById(idLinea), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: `${etiqueta} (${unidad})`,
          data: dataValores,
          borderColor: color,
          borderWidth: 2,
          tension: 0.3,
          fill: false,
          pointRadius: 4,
          pointBackgroundColor: color,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            min: rangosSimulacion[campo].min,
            max: rangosSimulacion[campo].max,
            ticks: {
              precision: 2
            }
          },
          x: {
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          }
        }
      },
    });
  } else {
    charts[idLinea].data.labels = labels;
    charts[idLinea].data.datasets[0].data = dataValores;
    charts[idLinea].update();
  }
}

// Inicializar la aplicación
function initApp() {
  // Crear contenedores de gráficas en el DOM
  crearContenedoresGraficas();
  
  // Crear todas las gráficas inicialmente
  configuracionesGraficas.forEach(config => {
    crearActualizarGraficas(config);
  });
  
  // Simular nuevos datos y actualizar gráficas
  setInterval(() => {
    actualizarTiempo();
    
    configuracionesGraficas.forEach(config => {
      const nuevoDato = agregarNuevoDato(config);
      crearActualizarGraficas(config);
      
      // Verificar si hay alertas
      const alerta = verificarAlertas(config, nuevoDato);
      if (alerta) {
        mostrarAlerta(alerta);
      }
    });
  }, 3000);
  
  // Actualizar tiempo inicial
  actualizarTiempo();
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);