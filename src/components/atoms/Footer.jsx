const Footer = () => {
  return (
    <section className="wrapper__section p-0 mt-5">
      <div className="wrapper__section__components">
        <footer>
          <div className="wrapper__footer bg__footer-dark pb-0">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="widget__footer">
                    <img
                      src="/assets/static/images/Logo.png"
                      className="image-fluid"
                    />
                    <p>
                      Gedung Menara 165 Lantai 21 Unit B1 Jl TB. Simatupang Kav
                      1 Cilandak, Timur,Pasar, RT.3/RW.3, East Cilandak, Pasar
                      Minggu, jakarta, Jakarta 12560
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <form>
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-transparent text-white border-white p-2"
                    />
                  </form>
                  <p className="text-white mt-3">Subscribe kami</p>
                </div>
                <div className="col-md-3">
                  <div className="widget__footer">
                    <div className="dropdown-footer">
                      <h4 className="footer-title">
                        Services
                        <span className="fa fa-angle-down"></span>
                      </h4>
                    </div>
                    <div className="row w-75">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent">
                          <a href="/" className="text-white">
                            Tentang Kami
                          </a>
                        </li>
                        <li className="list-group-item bg-transparent">
                          <a href="/" className="text-white">
                            Redaksi
                          </a>
                        </li>
                        <li className="list-group-item bg-transparent">
                          <a href="/" className="text-white">
                            Pedoman Siber
                          </a>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <a href="/" className="text-white">
                              Disclaimer
                            </a>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <a href="/" className="text-white">
                              Privacy Policy
                            </a>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <a href="/" className="text-white">
                              Kontak
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="widget__footer">
                    <div className="dropdown-footer">
                      <h4 className="footer-title">
                        Berita
                        <span className="fa fa-angle-down"></span>
                      </h4>
                    </div>
                    <div className="row w-75">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent">
                            <a href='/' className="text-white">
                              <p>Kajian</p>
                            </a>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <a href='/' className="text-white">
                              <p>Survei</p>
                            </a>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <a className="text-white">
                              <p>Catatan Valid</p>
                            </a>
                        </li>
                        <li className="list-group-item bg-transparent">
                            <a className="text-white">
                              <p>Infografis</p>
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center d-flex flex-row justify-content-center">
                <p className="text-white mr-3">
                  Copyright 2022 - Visi Teliti Saksama
                </p>
                <div className="col-md-3 ml-3">
                  <div className="widget__footer">
                    <div className="row w-75">
                      <div className="col">
                        <i className="bi bi-facebook sosmed-icons"></i>
                      </div>
                      <div className="col">
                        <i className="bi bi-twitter sosmed-icons"></i>
                      </div>
                      <div className="col">
                        <i className="bi bi-instagram sosmed-icons"></i>
                      </div>
                      <div className="col">
                        <i className="bi bi-youtube sosmed-icons"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
