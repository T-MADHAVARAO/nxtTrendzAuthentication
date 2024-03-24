// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isWrong: false, errorMsg: ''}

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  loginUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'post',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({isWrong: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, isWrong, errorMsg} = this.state
    return (
      <div className="loginPage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="loginImg"
        />
        <div className="loginCont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <form className="formCont" onSubmit={this.loginUser}>
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.updateUsername}
              value={username}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.updatePassword}
              value={password}
            />
            <button className="loginBtn" type="submit">
              LogIn
            </button>
            {isWrong && <p className="error">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
