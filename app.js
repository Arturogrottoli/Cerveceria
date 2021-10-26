//Funcion del scrolltop

scrollTopButton('.scroll-top-btn');

function scrollTopButton(btn) {
  const $ScrollBtn = $(btn);

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    scrollTop > 350 ? $ScrollBtn.removeClass('hidden') : $ScrollBtn.addClass('hidden');
  })

  $ScrollBtn.click(function () {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  })
}


