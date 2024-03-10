function sidebarToggle() {
  var sidebar = document.getElementById("sidebar")
  var container = document.getElementById("container")
  sidebar.classList.toggle("sbActive")
  container.classList.toggle("cActive")
}