var originalTitle = document.title;

// adiciona um listener para o evento visibilitychange
document.addEventListener("visibilitychange", function() {
  // verifica se a página está oculta (usuário mudou de aba)
  if (document.hidden) {
    // muda o título da página
    document.title = "Smooth Criminal EHEE!";
  } else {
    // restaura o título original da página
    document.title = originalTitle;
  }
});

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
};

document.getElementById("scroll-to-top").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
