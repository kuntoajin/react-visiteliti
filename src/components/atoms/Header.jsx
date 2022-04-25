const Header = () => {
    return (
        <header
        className="fixed-top main-header header-white transparent with-side-panel-ico sticky-nav"
        id="waituk-main-header"
      >
        <div id="nav-section">
          <div
            className="bottom-header container-fluid mega-menus"
            id="mega-menus"
          >
            <nav
              className="navbar navbar-toggleable-md no-border-radius no-margin mega-menu-multiple navbar-hover"
              id="navbar-inner-container"
            >
              <form
                action="mega-menu-5.html"
                id="top-search"
                className="no-margin top-search"
              >
                <div className="form-group no-margin">
                  <input
                    className="form-control no-border"
                    id="search_term"
                    name="search_term"
                    placeholder="Type & Press Enter"
                    type="text"
                  />
                </div>
              </form>
              <button
                type="button"
                className="navbar-toggler navbar-toggler-left"
                data-toggle="collapse"
                data-target="#mega-menu"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-brand mr-auto m-sm-auto" href="index.html">
                <img src="img/logo.svg" alt="roxine" />
                <img src="img/logo-dark.svg" alt="roxine" />
              </a>
              <div
                className="collapse navbar-collapse flex-row-reverse"
                id="mega-menu"
              >
                <ul className="nav navbar-nav">
                  <li className="dropdown" data-animation="fadeIn">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="/"
                      data-title="Home"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="dropdown" data-animation="fadeIn">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="/about"
                      data-title="Home"
                    >
                      Tentang Visi
                    </a>
                  </li>
                  <li className="dropdown" data-animation="fadeIn">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="index.html"
                      data-title="Home"
                    >
                      Produk Riset
                    </a>
                  </li>
                  <li
                    className="dropdown dropdown-full-width-g"
                    data-animation="fadeIn"
                  >
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      data-title="Pages"
                    >
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a href="team.html"> Blog </a>
                  </li>
                  <li>
                    <a href="/visinsight"> Visinsight </a>
                  </li>
                  <li>
                    <a href="contact.html"> Event </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-pos-search with-side-panel">
                <a href="#" className="x-search x-search-trigger navbar-link">
                  <i className="custom-icon-search" />
                </a>
                <a href="#" className="x-search icon-close-round navbar-link">
                  <i className="icon-line-cross" />
                </a>
              </div>
              <div className="nav-trigger navbar-pos-search overlay-trigger">
                <a href="#" className="navbar-link">
                  <i className="icon-sort-1" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
}

export default Header