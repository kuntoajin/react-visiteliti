const About = () => {
  return (
    <div className="page-wrapper">
      <main>
        <section className="visual py-0">
          <div
            className="visual-inner about-banner dark-overlay parallax"
            data-stellar-background-ratio="0.55"
            style={{
              backgroundImage: "url('/assets/static/images/About.svg')",
              zIndex: 0,
            }}
          >
            <div className="centered">
              <div className="container">
                <div className="visual-text visual-center">
                  <h1 className="visual-title visual-sub-title">DiCari</h1>
                  <h2 className="visual-title visual-sub-title fs-2">
                    Pusat Kajian Visi Teliti Saksama
                  </h2>
                  <div className="breadcrumb-block">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="index.html"> Home </a>
                      </li>
                      <li className="breadcrumb-item active">
                        {" "}
                        About Company{" "}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="content-wrapper">
          <section className="content-block">
            <div className="container text-center">
              <div className="heading bottom-space">
                <h2>
                  Tentang <span>Visi</span>
                </h2>
              </div>
              <div className="description">
                <p>
                  Delightful unreserved impossible few estimating men favourable
                  see entreaties. She propriety immediate was improving. He or
                  entrance humoured likewise moderate. Much nor game son say
                  feel. Fat make met can must form into gate. Me we offending
                  prevailed discovery.{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
