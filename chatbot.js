const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Detectar hora actual con artículo y saludo correcto
function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'un lindo día';
  if (hour >= 12 && hour < 19) return 'una linda tarde';
  return 'una linda noche';
}

userInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const input = userInput.value.trim();
    if (input !== '') {
      addMessage('user', input);
      respond(input.toLowerCase());
      userInput.value = '';
    }
  }
});

function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.innerText = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function respond(input) {
  let response = '';
  const saludo = getTimeGreeting();

  if (input.includes('hola') || input.includes('buenas') || input.includes('saludo')) {
    // Para el saludo inicial está bien decir "Buenos días/tardes/noches"
    const hora = new Date().getHours();
    let saludoFormal = '';
    if (hora >= 6 && hora < 12) saludoFormal = 'Buenos días';
    else if (hora >= 12 && hora < 19) saludoFormal = 'Buenas tardes';
    else saludoFormal = 'Buenas noches';

    response = `${saludoFormal}! Soy CamilaTech, asistente virtual de CC. ¿En qué puedo ayudarte hoy? 🌸`;

  } else if (
    input.includes('informacion') ||
    input.includes('información') ||
    input.includes('info') ||
    input.includes('servicio') ||
    input.includes('que hacen')
  ) {
    response = `En CC brindamos personal especializado en desarrollo para cubrir las necesidades específicas de cada cliente.

Nuestro servicio incluye:
• Diseño y desarrollo personalizado
• Acompañamiento constante durante todo el proceso
• Entrega de soluciones adaptadas a tu proyecto

💰 Valor estimado: desde USD 800 (ajustable según requerimientos)
⏳ Tiempo de desarrollo: entre 2 y 4 semanas, dependiendo del alcance

Trabajamos de forma cercana y profesional, asegurando resultados de calidad que reflejen la esencia de tu marca.

Si estás interesado en que un asesor te contacte, por favor escribí "contactar".
En caso de no estar interesado, no hace falta que respondas.`;

  } else if (
    input.includes('contactar') ||
    input.includes('contratar') ||
    input.includes('contrato') ||
    input.includes('quiero contratar') ||
    input.includes('contratacion')
  ) {
    response = `¡Genial! 🙌

Podés contactarnos directamente por cualquiera de los siguientes medios:

📞 Teléfono / WhatsApp: +54 9 11 5728-3017  
📧 Email: cacciacamila284@gmail.com  
📱 Instagram: https://www.instagram.com/ccstudio.ar  
💼 LinkedIn: https://www.linkedin.com/company/ccstudio

Un asesor estará encantado de ayudarte. ¡Gracias por confiar en CC! 💖`;

  } else if (input.includes('gracias')) {
    response = `¡Un placer ayudarte! Si necesitás algo más, estoy acá para vos. Que tengas ${saludo} 🌷`;

  } else if (input.includes('adios') || input.includes('chau') || input.includes('hasta luego')) {
    response = `¡Hasta pronto! Gracias por confiar en CC Studio. Que tengas ${saludo} 💖`;

  } else {
    response = `No estoy segura de cómo responder eso, pero puedo derivarte con nuestro equipo si lo necesitás. ¿Querés que te conecte con alguien?`;
  }

  setTimeout(() => addMessage('bot', response), 600);
}



