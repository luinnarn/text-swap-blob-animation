import React from "react";
import '../signin.css'

class Signin extends React.Component {
  componentDidMount() {
    Array.from(document.querySelectorAll('.Form input')).forEach(i => {
      i.addEventListener('invalid', () => {
        i.dataset.touched = 'true'
      });
      i.addEventListener('blur', () => {
        if (i.value !== '') i.dataset.touched = true
      });
    })

  }


  render() {
    return (
      <div className="Signin">
        <h2>Sign In</h2>
        <form className="Form">
          <label className="Label">
            <input className="Input" type="text"
                   placeholder="Username" name="username"
                   required minLength={4}/>
              <svg viewBox="0 0 20 20" className="Icon">
                <path d="M0 0 L10 10 L0 20"/>
              </svg>
            <svg className="Line" viewBox="0 0 40 2"
                 preserveAspectRatio="none">
              <path d="M0 1 L40 1"/>
              <path d="M0 1 L40 1" className="focus"/>
              <path d="M0 1 L40 1" className="invalid"/>
              <path d="M0 1 L40 1" className="valid"/>
            </svg>
          </label>
          <label className="Label">
            <input className="Input" type="password"
                   placeholder="Password" name="password"
                   required minLength={8}/>
              <svg viewBox="0 0 20 20" className="Icon">
                <path d="M0 0 L10 10 L0 20"/>
              </svg>
            <svg className="Line" viewBox="0 0 40 2"
                 preserveAspectRatio="none">
              <path d="M0 1 L40 1"/>
              <path d="M0 1 L40 1" className="focus"/>
              <path d="M0 1 L40 1" className="invalid"/>
              <path d="M0 1 L40 1" className="valid"/>
            </svg>
          </label>
          <button className="Button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    )
  }
}

export default Signin;