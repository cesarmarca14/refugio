function vermas1() {
  const noticia = document.querySelector(".noticiaFiru");
  if (noticia) {
    const textoOriginal = `
      Firulais fue encontrado en las afueras del mercado central, bajo la lluvia, temblando de frío y con evidentes signos de abandono. 
      Sus costillas eran visibles y su mirada reflejaba miedo y desconfianza. 
      Gracias a una llamada de una vecina solidaria, logramos rescatarlo y llevarlo de inmediato a la veterinaria. 
      Firulais llegó a nosotros desnutrido y asustado. Gracias al amor del equipo y los voluntarios, 
      hoy vive feliz con una familia que lo adora.
    `;

    const textoExtendido = textoOriginal + `
      <span class="texto-extendido"><strong>
        Al principio no confiaba en nadie, se escondía y temblaba con cualquier ruido. Poco a poco, con paciencia y cariño, comenzó a recuperarse. 
        Su salud mejoró, aprendió a confiar de nuevo y a mover la cola con alegría.
      </strong></span>
      <span class="texto-extendido"><strong>
        Actualmente, Firulais disfruta de paseos al parque, juegos con su nueva familia y muchas siestas bajo el sol. 
        ¡Además, ahora tiene un hermanito con quien comparte aventuras!
      </strong></span>
      <span class="texto-extendido"><strong>
        Su historia nos inspira a seguir rescatando vidas y demostrando que el amor transforma. 
        Firulais nos recuerda que incluso los corazones rotos pueden volver a latir con fuerza cuando se sienten seguros y queridos.
      </strong></span>
    `;

    if (noticia.innerHTML.includes("Su historia nos inspira a seguir rescatando vidas")) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoExtendido;
    }
  }
}



// vacunacion------
function vermas5() {
  let noticia = document.querySelector(".noticiaVacunacion");
  if (noticia) {
    textoOriginal =
      "Participamos en una campaña gratuita para vacunar a más de 80 mascotas sin hogar en la ciudad. Gracias a todos los donantes.";
    textoNuevo =
  textoOriginal +
  "<br><strong>¡La jornada fue un éxito y muchas mascotas ahora están protegidas!" +
  "<br>Gracias al trabajo de voluntarios y donantes, logramos vacunar a decenas de animales que nunca antes habían recibido atención médica." +
  "<br>Esta campaña salvó vidas y fortaleció el vínculo entre la comunidad y nuestros refugios." +
  "<br>¡Tu ayuda hace la diferencia!</strong>";


      
    if (
      noticia.innerHTML.includes("¡La jornada fue un éxito y muchas mascotas ahora están protegidas!")
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoNuevo;
    }
  }
}

// mishi------
function vermas9() {
  const noticia = document.querySelector(".noticiaMishi");
  if (noticia) {
    const textoOriginal = `
      Mishi fue rescatada de una caja abandonada en la calle, apenas con unas semanas de vida. 
      Estaba deshidratada, con el pelaje enmarañado y débil por la falta de alimento.
      Gracias a los cuidados del equipo veterinario y el cariño de nuestros voluntarios, 
      poco a poco empezó a recuperar fuerzas y a mostrar su lado juguetón.
      Hoy es una gatita feliz, desparasitada y lista para recibir el amor de una familia adoptiva.
    `;

    const textoExtendido = textoOriginal + `
      <span class="texto-extendido"><strong>
        Su dulzura ha conquistado a todos en el refugio. Le encanta acurrucarse al sol, 
        jugar con ovillos de lana y ronronear cuando la acarician. Esperamos que pronto encuentre un 
        hogar lleno de cariño donde pueda seguir creciendo sana y amada.
      </strong></span>
      <span class="texto-extendido"><strong>
        Mishi también ha demostrado ser muy sociable con otros gatitos del albergue, 
        compartiendo su espacio y hasta su comida sin problemas.
      </strong></span>
      <span class="texto-extendido"><strong>
        Es una compañera ideal para quienes buscan ternura, energía y mucho amor en un pequeño cuerpo peludo.
      </strong></span>
    `;

    if (noticia.innerHTML.includes("Es una compañera ideal")) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoExtendido;
    }
  }
}



// luna------
function vermas6() {
  let noticia = document.querySelector(".noticiaLuna");
  if (noticia) {
    textoOriginal =
      "Luna fue encontrada con una pata fracturada. Luego de una cirugía y cuidados intensivos, ya corre y juega con energía.mos en una campaña gratuita para vacunar a más de 80 mascotas sin hogar en la ciudad. Gracias a todos los donantes.";
    textoNuevo =
      textoOriginal +
      "<br> <strong>Actualmente disfruta de largos paseos y se ha vuelto la favorita de los voluntarios por su energía.</strong>";
    if (
      noticia.innerHTML.includes(
        "Actualmente disfruta de largos paseos y se ha vuelto la favorita de los voluntarios por su energía."
      )
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoNuevo;
    }
  }
}

// max------
function vermas2() {
  const noticia = document.querySelector(".noticiaMax");
  if (noticia) {
    const textoOriginal =
      "Max fue abandonado en un parque, con la mirada triste y el cuerpo cubierto de polvo. " +
      "Lo encontramos acurrucado junto a un banco, temblando y sin fuerzas. Apenas tenía energía para caminar, " +
      "pero aun así movió la cola cuando nos acercamos. Fue evidente que solo necesitaba una mano amiga. " +
      "Desde ese momento, comenzó su camino hacia la recuperación. Gracias al cariño del equipo y al cuidado médico que recibió, " +
      "Max empezó a ganar peso, a confiar nuevamente en las personas y a mostrar su lado más noble y juguetón. " +
      "Hoy está en proceso de socialización, aprende a convivir con otros perritos y a caminar con correa. " +
      "Aunque todavía es un poco tímido con los desconocidos, cada día da un paso más hacia su nuevo futuro. " +
      "Está esperando un hogar lleno de cariño donde pueda ser feliz, correr libre y recibir el amor que tanto merece.";

    const textoExtendido =
      textoOriginal +
      '<br><br><span class="texto-extendido"><strong>' +
      "Últimamente le encanta correr detrás de pelotas y explorar el jardín del refugio. " +
      "Es un perrito muy observador, y cuando ve a otros canes jugar, se les une con cautela y alegría. " +
      "Disfruta las caminatas tranquilas y las caricias en la cabeza. " +
      "Sabemos que cuando llegue a una familia paciente y amorosa, Max florecerá aún más. " +
      "Su historia nos recuerda que, con apoyo y tiempo, todos merecen una segunda oportunidad." +
      "</strong></span>";

    if (
      noticia.innerHTML.includes("Su historia nos recuerda que, con apoyo y tiempo")
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoExtendido;
    }
  }
}



// noticiaPelusa------
function vermas4() {
  let noticia = document.querySelector(".noticiaPelusa");
  if (noticia) {
    const textoOriginal = 
      "Pelusa fue rescatada de una azotea, donde estuvo atrapada durante días sin agua ni comida. " +
      "Cuando la encontramos, estaba débil, con el pelaje enmarañado y los ojos tristes. " +
      "Gracias a la rápida atención veterinaria y al cuidado constante del equipo, " +
      "poco a poco comenzó a recuperar fuerzas y confianza. " +
      "Hoy es una gatita saludable, juguetona y muy cariñosa. " +
      "Se lleva bien con otros gatos, adora las caricias detrás de las orejas y le encanta dormir en lugares soleados. " +
      "Está lista para ser adoptada por una familia que le dé el amor que tanto merece.";

    const textoExtendido = textoOriginal + 
      `<br><br><strong class="texto-extendido">Pelusa ha demostrado ser muy inteligente y sensible. 
      Cada vez que uno de nuestros voluntarios entra al cuarto, corre a saludar con un suave maullido. 
      Le gusta mirar por la ventana y seguir con la vista a las aves. También disfruta de los juguetes con plumas y túneles para esconderse. 
      Es una gatita ideal para personas que buscan una compañera leal y afectuosa. 
      Estamos seguros de que en el hogar adecuado, Pelusa seguirá floreciendo y llenando de ternura cada rincón.</strong>`;

    if (noticia.innerHTML.includes("Pelusa ha demostrado ser muy inteligente")) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoExtendido;
    }
  }
}



// noticiaAbrigo------
function vermas7() {
  let noticia = document.querySelector(".noticiaAbrigo");
  if (noticia) {
    textoOriginal =
      "Junto a voluntarios de la ciudad, repartimos mantas y alimento a perritos sin hogar durante la temporada de frío.";
    textoNuevo = textoOriginal +
      "<br> <strong>La campaña logró aliviar las noches frías de muchos peluditos, y seguimos recibiendo donaciones para continuar.</strong>";
    if (
      noticia.innerHTML.includes(
        "La campaña logró aliviar las noches frías de muchos peluditos, y seguimos recibiendo donaciones para continuar."
      )
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoNuevo;
    }
  }
}

// noticiaDientes------
function vermas3() {
  let noticia = document.querySelector(".noticiaDientes");
  if (noticia) {
    textoOriginal =
      "Realizamos limpiezas dentales gratuitas para mascotas adoptadas durante el mes de abril. ¡Una sonrisa sana para todos!";
    textoNuevo =
      textoOriginal +
      "<br> <strong>Este cuidado preventivo ha mejorado la salud de muchos peluditos que ahora disfrutan de una vida más saludable..</strong>";
    if (
      noticia.innerHTML.includes(
        "Este cuidado preventivo ha mejorado la salud de muchos peluditos que ahora disfrutan de una vida más saludable."
      )
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoNuevo;
    }
  }
}
