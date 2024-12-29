import "../assets/css/common.css";
import "../assets/css/details.css";

const DetailsPage = () => {
  return (
    <>
      <div className="loader">
        <div className="spinner">
          <i className="fa-regular fa-circle-notch fa-spin icon"></i>
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll Top Button"
        className="button scroll-top flex flex-ai-c flex-jc-c scale-effect"
      >
        <i className="fa-regular fa-chevron-up icon"></i>
      </button>

      <header className="header">
        <div className="container flex flex-jc-sb flex-ai-c">
          <div className="logo">
            <a href="index.html">
              <h1>Where in the world?</h1>
            </a>
          </div>
          <button
            type="button"
            aria-label="Theme Switcher Button"
            className="theme-toggle flex flex-jc-sb flex-ai-c"
          >
            <i className="fa-regular fa-moon theme-icon"></i>
            <span className="theme-text">Dark Mode</span>
          </button>
        </div>
      </header>

      <div className="back-button">
        <div className="container">
          <a href="index.html" className="btn btn-back btn-with-icon">
            <i className="fa-regular fa-arrow-left icon"></i> back
          </a>
        </div>
      </div>

      <main className="main">
        <div className="container">
          <section className="country-details"></section>
        </div>
      </main>

      <script src="./js/common.js"></script>
      <script src="./js/details.js"></script>
    </>
  );
};

export default DetailsPage;
