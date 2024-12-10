
function App() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="mb-auto">
    <div>
      <h3 className="float-md-start mb-0">Cover</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
        <a className="nav-link fw-bold py-1 px-0" href="#">Features</a>
        <a className="nav-link fw-bold py-1 px-0" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main className="px-3">
    <h1>Cover your page.</h1>
    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
    <p className="lead">
      <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
    </p>
  </main>

  <footer className="mt-auto text-white-50">
    <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
  </footer>
</div>
  );
}

export default App;
