import sdtLogo from "../../images/sdt-logo.png";
import omfLogo from "../../images/openmainframe-logo.png";

function Navbar() {
  return (
    <div class="nav-section">
      <div class="navbar-wrapper">
        <div class="sdt-logo sdt">
          <img class="image-12" src={sdtLogo} alt="image 12" />
        </div>
        <div class="navbar">
          <div class="navbar-link poppins-bold-black-20px">about</div>
          <div class="navbar-link poppins-bold-black-20px">blog</div>
          <div class="navbar-link poppins-bold-black-20px">contact</div>
          <div class="navbar-link poppins-bold-black-20px">documentation</div>
        </div>
      </div>
      <div class="search-bar-wrapper">
        <div class="omf-logo">
          <img class="image-11" src={omfLogo} alt="image 11" />
        </div>
        <div class="searchbox">
          <input
            class="searchbox-input"
            name="rfijidskf"
            placeholder="Search Packages"
            type="text"
          />
        </div>
        <div class="search-button-container">
          <a>
            <button
              class="search-button-container-item"
              alt="search button"
            >
              <p className="text-inside-button">Search</p>
            </button>
          </a>
          <button
            class="search-button-container-item"
            alt="os dropdown"
          >
            <p className="text-inside-button">All distros</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
