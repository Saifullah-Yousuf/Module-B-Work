const NavBar = ()=>{
  return(
    <>
    <nav className="navbar navbar-expand-lg xxx">
    <div class="container-fluid bg-body-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" aria-current="page" href="#">Pages</a>
        <a class="nav-link" aria-current="page" href="#">Cources</a>
        <a class="nav-link" aria-current="page" href="#">Blog</a>
        <a class="nav-link" aria-current="page" href="#">Contact</a>
      </div>
    </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar