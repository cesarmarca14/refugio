

  const slide = document.querySelector('.carrusel-slide');
  const flechaIzquierda = document.querySelector('.flecha.izquierda');
  const flechaDerecha = document.querySelector('.flecha.derecha');

  let indice = 0;

  flechaDerecha.addEventListener('click', () => {
    if (indice < slide.children.length - 1) {
      indice++;
      actualizarSlide();
    }
  });

  flechaIzquierda.addEventListener('click', () => {
    if (indice > 0) {
      indice--;
      actualizarSlide();
    }
  });

  function actualizarSlide() {
    const anchoSlide = slide.children[0].offsetWidth;
    slide.style.transform = `translateX(-${anchoSlide * indice}px)`;
  }
