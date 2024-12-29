
// eslint-disable-next-line react-refresh/only-export-components
export function Scroll() {
    return(
        <button
            type="button"
            aria-label="Scroll Top Button"
            className="button scroll-top flex flex-ai-c flex-jc-c scale-effect"
        >
            <i className="fa-regular fa-chevron-up icon"></i>
        </button>
    );
}

export function Header() {
    return (      
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
    );
  }


  export function Dropdown() {
    return (     
  <div className="dropdown-wrapper">
    <div className="dropdown-header flex flex-jc-sb flex-ai-c">
        <span>Filter by Region</span>
            <i className="fa-regular fa-chevron-down icon"></i>
        </div>
        <div className="dropdown-body">
            <ul>
                <li data-region="all">All</li>
                <li data-region="africa">Africa</li>
                <li data-region="americas">America</li>
                <li data-region="asia">Asia</li>
                <li data-region="europe">Europe</li>
                <li data-region="oceania">Oceania</li>
            </ul>
        </div>
    </div>
  
    );
}