import {Link, withRouter} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import './index.css'

const HeaderSearch = () => (
  <nav className="nav-header1">
    <div className="nav-content">
      <div className="nav-bar-large-container">
        <div className="nav-bar-left-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/du7dx5z0y/image/upload/v1707409072/Group_7399_2_dgdr3f.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/popular" className="nav-link">
                Popular
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-bar-right-container">
          <Link to="/search">
            <button
              type="button"
              testid="searchButton"
              className="search-button"
            >
              <HiOutlineSearch color="white" size="20" />
            </button>
          </Link>
          <Link to="/account" className="nav-link">
            <img
              className="profile-logo"
              src="https://res.cloudinary.com/du7dx5z0y/image/upload/v1707403459/Avatar_sgqd40.png"
              alt="profile"
            />
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default withRouter(HeaderSearch)
