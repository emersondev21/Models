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
