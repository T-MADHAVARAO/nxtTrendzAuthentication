// Write your JS code here
import './index.css'

const Header = () => (
  <div className="headerCont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="headerLogo"
    />
    <div className="navItems">
      <ul className="listItems">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
      <button type="button">LogOut</button>
    </div>
  </div>
)

export default Header
