import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import {auth, googleProvider, gitProvider, fbProvider} from './base'

class SignIn extends Component {
  state = {
    email: '',
  }

  handleChange = (ev) => {
    this.setState({ email: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
  }

  authenticate = () => {
    auth
      .signInWithPopup(googleProvider)
  }

  authenticateGit = () => {
    auth
      .signInWithPopup(gitProvider)
  }

  authenticateFb = () => {
    auth
      .signInWithPopup(fbProvider)
  }

  render() {
    return (
      <div className={`SignIn ${css(styles.signIn)}`}>
        <header className={css(styles.header)}>
          <span className={css(styles.title)}>
            <i className="fas fa-hashtag"></i>
            Chatarang
          </span>
        </header>
        <main className={css(styles.main)}>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <h1>Welcome!</h1>
            <button 
              type = "button" 
              className={css(styles.googleButton)} 
              onClick = {this.authenticate}
            >
              <i className = {`fab fa-google ${css(styles.brandIcon)}`}></i>
              Sign in with Google
            </button>
            <button 
              type = "button" 
              className={css(styles.githubButton)} 
              onClick = {this.authenticateGit}
            >
              <i className = {`fab fa-github ${css(styles.brandIcon)}`}></i>
              Sign in with Github
            </button>
            <button 
              type = "button" 
              className={css(styles.fbButton)} 
              onClick = {this.authenticateFb}
            >
              <i className = {`fab fa-facebook ${css(styles.brandIcon)}`}></i>
              Sign in with Facebook
            </button>
          </form>

          <div className="blurb">
            <h2 className={css(styles.h2)}>You're in good company.</h2>
            {/* <p>Ones of people are already using Chatarang!</p> */}
          </div>
        </main>
      </div>
    )
  }
}
const styles = StyleSheet.create({
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    // backgroundColor: '#f6f6f6',
    backgroundImage: `url('https://images.unsplash.com/photo-1495583237039-44cb1143f0b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77afd8d4aa023f6449f661f3cf3ce3d0&auto=format&fit=crop&w=2850&q=80')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  header: {
    backgroundColor: '#fff',
    height: '4rem',
    padding: '0 2rem',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
  },
  title: {
    color: '#2CA3F3',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '80px',
    fontSize: '2rem',
  },
  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
  },
  form: {
    width: '40rem',
    // backgroundColor: '#CEE9FA',
    // boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    //marginBottom: '2rem',
    paddingBottom: '1rem'
  },
  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: '#999',
  },
  input: {
    width: '20rem',
    fontSize: '1.5rem',
    border: 0,
    backgroundColor: '#CEE9FA',
    borderBottom: '1px solid black',
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    padding: '0.5rem',
    ':focus': {
      outline: 0,
    },
  },
  h2: {
    fontWeight: 'normal',
    color: 'white'
  },
  googleButton: {
    display: 'block',
    margin: '0 auto',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#db3236',
    color: 'white',
    width: '20rem',
    marginTop: '1rem',
    marginBottom: "1rem",
    ':hover': {
      cursor: 'pointer'
    }
  },
  githubButton: {
    display: 'block',
    margin: '0 auto',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: 'black',
    color: 'white',
    width: '20rem',
    marginTop: '1rem',
    marginBottom: "1rem",
    ':hover': {
      cursor: 'pointer'
    }
  },
  fbButton: {
    display: 'block',
    margin: '0 auto',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#253687',
    color: 'white',
    width: '20rem',
    marginTop: '1rem',
    marginBottom: "1rem",
    ':hover': {
      cursor: 'pointer'
    }
  },
  brandIcon: {
    marginRight: "1rem"
  }

})
export default SignIn