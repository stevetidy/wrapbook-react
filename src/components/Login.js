import React from 'react';
import Header from './Header';
import Dashboard from '../components/dashboard/Dashboard';

const Password = ({ validPassword, handlePasswordChange }) => (
  <div className="login__textfield login__textfield--password">
    <label htmlFor="password" className="visuallyhidden">Password</label>
    <input onChange={handlePasswordChange} className={"textfield" + (validPassword ? ' textfield--active' : '')} id="password" type="password" name="email" autoComplete="off" placeholder="Enter a password" />
  </div>
)

const UsersDashboard = () => (
  <Dashboard />
)

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [validEmail, setValidEmail] = React.useState(false);
  const [validPassword, setValidPassword] = React.useState(false);
  const [showDashboard, setShowDashboard] = React.useState(false);

  const handleEmailChange = (e) => {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value)) {
      setShowPassword(true);
      setValidEmail(true)
    }
  };

  const handlePasswordChange = (e) => {
    if (e.currentTarget.value.length > 3) {
      setValidPassword(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail && validPassword) {
      setShowDashboard(true);
    }
  }

  return (
    <>
      <Header
        showDashboard={showDashboard}
        setShowDashboard={setShowDashboard}
        setShowPassword={setShowPassword}
        setValidPassword={setValidPassword}
        setValidEmail={setValidEmail}
      />
      {showDashboard ? <UsersDashboard /> :
        <main className="main-content">
          <div className="login">
            <h3 className="login__title">Get started with Wrapbook</h3>
            <p className="login__copy">Tackle timecards, payroll, and insurance with Wrapbook, a powerful and easy to use platform for managing productions.</p>
            <form>
              <div className="login__textfield">
                <label htmlFor="email" className="visuallyhidden">Email</label>
                <input onChange={handleEmailChange} className={"textfield" + (validEmail ? ' textfield--active' : '')} id="email" type="email" name="email" autoComplete="off" placeholder="Enter your email address" />
              </div>
              {showPassword ? <Password validPassword={validPassword} handlePasswordChange={handlePasswordChange} /> : null}
              <button onClick={handleSubmit} className={"login__submit button" + (validEmail && validPassword ? ' button--active' : '')}>Continue to Wrapbook</button>
            </form>
          </div>
        </main>
      }
    </>
  )
}

export default Login;