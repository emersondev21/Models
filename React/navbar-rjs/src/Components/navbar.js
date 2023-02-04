import { useRef } from "react";

function Navbar() {
  const navRef = useRef();
  const openRef = useRef();
  const closeRef = useRef();

  const showNavbar =  () => {
    navRef.current.classList.toggle("responsive-nav");
    openRef.current.classList.toggle("active");
    closeRef.current.classList.toggle("active");
    
  }

    return(
      <header>
          <h2>RNB</h2>
          <nav className="nav" ref={navRef}>
            <a className="item" href="/.#">Item1</a>
            <a className="item" href="/.#">Item2</a>
            <a className="item" href="/.#">Item3</a>
            <a className="item" href="/.#">Item4</a>
            <a className="item" href="/.#">Item5</a>
          </nav>
          <i id="close-btn" class="icon ion-md-close" onClick={showNavbar} ref={closeRef}></i>
          <i id="open-btn" class="icon ion-md-menu active" onClick={showNavbar} ref={openRef}></i>
      </header>
      );
}

export default Navbar;