function vermas1() {
  let noticia = document.querySelector(".noticiaFiru");
  if (noticia) {
    textoOriginal =
      "Firulais llegó a nosotros desnutrido y asustado. Gracias al amor del equipo y los voluntarios, hoy vive feliz con una familia que lo adora.....";
    textoNuevo =
      textoOriginal +
      "<br> <strong>¡Además, Firulais ahora tiene un hermanito</strong>";
    if (
      noticia.innerHTML.includes("¡Además, Firulais ahora tiene un hermanito")
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoNuevo;
    }
  }
}

// vacunacion------
function vermas2() {
  let noticia = document.querySelector(".noticiaVacunacion");
  if (noticia) {
    textoOriginal =
      "Participamos en una campaña gratuita para vacunar a más de 80 mascotas sin hogar en la ciudad. Gracias a todos los donantes.";
    textoNuevo =
      textoOriginal +
      "<br> <strong>¡La jornada fue un éxito y muchas mascotas ahora están protegidas!</strong>";
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
function vermas3() {
  let noticia = document.querySelector(".noticiaMishi");
  if (noticia) {
    textoOriginal =
      "Mishi fue rescatada de una caja en la calle. Hoy es una gatita feliz,desparasitada y lista para recibir el amor de una familia adoptiva..";
    textoNuevo =
      textoOriginal +
      "<br> <strong>Su dulzura ha conquistado a todos en el refugio, y esperamos que pronto encuentre un hogar lleno de cariño.</strong>";
    if (
      noticia.innerHTML.includes(
        "Su dulzura ha conquistado a todos en el refugio, y esperamos que pronto encuentre un hogar lleno de cariño."
      )
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoNuevo;
    }
  }
}

// luna------
function vermas4() {
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
function vermas5() {
  let noticia = document.querySelector(".noticiaMax");
  if (noticia) {
    textoOriginal =
      "Max fue abandonado en un parque. Lo rescatamos y hoy está en proceso de socialización, esperando un hogar lleno de cariño.";
    textoNuevo =
      textoOriginal +
      "<br> <strong>Gracias a su progreso, ahora interactúa con otros perritos y está cada vez más listo para una adopción responsable.</strong>";
    if (
      noticia.innerHTML.includes(
        "Gracias a su progreso, ahora interactúa con otros perritos y está cada vez más listo para una adopción responsable."
      )
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoNuevo;
    }
  }
}

// noticiaPelusa------
function vermas6() {
  let noticia = document.querySelector(".noticiaPelusa");
  if (noticia) {
    textoOriginal =
      "Pelusa fue rescatada de una azotea. Luego de semanas de atención médica, ya está lista para ser adoptada.";
    textoNuevo =
      textoOriginal +
      "<br> <strong>Ha demostrado ser una gatita muy cariñosa, ideal para una familia que quiera dar y recibir amor incondicional.</strong>";
    if (
      noticia.innerHTML.includes(
        "Ha demostrado ser una gatita muy cariñosa, ideal para una familia que quiera dar y recibir amor incondicional."
      )
    ) {
      noticia.innerHTML = textoOriginal;
    } else {
      noticia.innerHTML = textoNuevo;
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
function vermas8() {
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
