// Función para obtener la hora siguiente
function obtenerHoraSiguiente(horaActual) {
  let [h, m] = horaActual.split(':').map(Number);
  h = (h + 1) % 24;
  return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
}

// Función para agregar nuevo dato
function agregarNuevoDato(config) {
  const { datos, campo } = config;
  const ultimoDato = datos[datos.length - 1];
  const nuevaHora = obtenerHoraSiguiente(ultimoDato.hora);
  const nuevaFecha = ultimoDato.fecha;
  const rango = rangosSimulacion[campo];
  
  // Generar valor con tendencia ascendente o descendente
  const ultimoValor = ultimoDato[campo];
  const variacion = (Math.random() - 0.4) * (rango.max - rango.min) * 0.05;
  let nuevoValor = ultimoValor + variacion;
  
  // Asegurar que el valor esté dentro del rango
  nuevoValor = Math.max(rango.min, Math.min(rango.max, nuevoValor));
  
  // Agregar variación más pronunciada ocasionalmente
  if (Math.random() > 0.9) {
    nuevoValor += (Math.random() - 0.5) * (rango.max - rango.min) * 0.2;
  }
  
  // Crear nuevo dato
  const nuevoDato = {
    fecha: nuevaFecha,
    hora: nuevaHora,
    [campo]: parseFloat(nuevoValor.toFixed(2))
  };
  
  // Agregar y mantener solo los últimos 15 datos
  datos.push(nuevoDato);
  if (datos.length > 15) datos.shift();
  
  return nuevoDato;
}

// Función para verificar alertas
function verificarAlertas(config, nuevoDato) {
  const { campo, etiqueta } = config;
  const rango = rangosSimulacion[campo];
  const valor = nuevoDato[campo];
  const umbralAlto = rango.max * 0.9;
  const umbralCritico = rango.max * 0.95;
  const umbralBajo = rango.min * 1.1;
  
  // Verificar si el valor está fuera de los umbrales
  if (valor > umbralCritico) {
    return {
      tipo: 'danger',
      mensaje: `¡CRÍTICO! ${etiqueta} en ${valor} (Máx: ${rango.max})`
    };
  } else if (valor > umbralAlto) {
    return {
      tipo: 'warning',
      mensaje: `Advertencia: ${etiqueta} en ${valor} (Máx: ${rango.max})`
    };
  } else if (valor < umbralBajo) {
    return {
      tipo: 'warning',
      mensaje: `Advertencia: ${etiqueta} en ${valor} (Mín: ${rango.min})`
    };
  }
  
  return null;
}

// Función para mostrar alerta
function mostrarAlerta(alerta) {
  const alertPanel = document.getElementById('alertPanel');
  const alertId = Date.now();
  
  const alertElement = document.createElement('div');
  alertElement.className = `alert ${alerta.tipo}`;
  alertElement.id = `alert-${alertId}`;
  alertElement.innerHTML = `
    <i class="fas fa-exclamation-triangle"></i>
    <span>${alerta.mensaje}</span>
    <button class="close-btn" onclick="document.getElementById('alert-${alertId}').remove()">
      <i class="fas fa-times"></i>
    </button>
  `;
  
  alertPanel.prepend(alertElement);
  
  // Eliminar alerta después de 10 segundos
  setTimeout(() => {
    const alertToRemove = document.getElementById(`alert-${alertId}`);
    if (alertToRemove) alertToRemove.remove();
  }, 10000);
}

// Función para actualizar el tiempo
function actualizarTiempo() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  document.getElementById('last-update').textContent = `${horas}:${minutos}`;
}