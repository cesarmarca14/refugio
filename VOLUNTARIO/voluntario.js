document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector("button[type='submit']");

  boton.addEventListener("click", function (e) {
    e.preventDefault(); // evita que se envíe el formulario

    alert(
      "En breve se contactarán contigo. Atento al móvil, será vía WhatsApp o llamada para confirmar los datos y que te acerques al refugio."
    );
  });
});
