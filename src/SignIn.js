import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import {auth, googleProvider, gitProvider, fbProvider, twitterProvider} from './base'

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

  authenticateTwitter = () => {
    auth
      .signInWithPopup(twitterProvider)
  }

  render() {
    return (
      <div className={`SignIn ${css(styles.signIn)}`}>
        <header className={css(styles.header)}>
          <span className={css(styles.title)}>
           {/* <i className="fas fa-hashtag"></i>*/}
           {/*} WeTalk*/}
           <img src="https://www.freelogodesign.org/download/file?id=5144c9b3-f920-4f0f-9f4a-e4e5f6fa14db.png" alt="" width="60" height="60" className={css(styles.image)}></img>
          </span>
        </header>
        <main className={css(styles.main)}>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <h1 className={css(styles.h1)}>Welcome! Let's talk.</h1>
            <h2 className={css(styles.h2)}>Sign in with</h2>
            <button 
              type = "button" 
              className={css(styles.button, styles.googleButton)} 
              onClick = {this.authenticate}
            >
              <i className = {`fab fa-google ${css(styles.brandIcon)}`}></i>
              Google
            </button>
            <button 
              type = "button" 
              className={css(styles.button, styles.githubButton)} 
              onClick = {this.authenticateGit}
            >
              <i className = {`fab fa-github ${css(styles.brandIcon)}`}></i>
              Github
            </button>
            <button 
              type = "button" 
              className={css(styles.button, styles.fbButton)} 
              onClick = {this.authenticateFb}
            >
              <i className = {`fab fa-facebook ${css(styles.brandIcon)}`}></i>
              Facebook
            </button>

            <button 
              type = "button" 
              className={css(styles.button, styles.twitterButton)} 
              onClick = {this.authenticateTwitter}
            >
              <i className = {`fab fa-twitter ${css(styles.brandIcon)}`}></i>
              Twitter
            </button>

          </form>

         {/* <div className="blurb"> */}
          {/*  <h2 className={css(styles.h2)}>You're in good company.</h2> */}
            {/* <p>Ones of people are already using Chatarang!</p> */}
         {/* </div> */}
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
    backgroundImage: `url('https://images.unsplash.com/photo-1501619757722-90657a99803b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '4rem',
    padding: '0 2rem',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
  },
  image: {
    //padding: "0.5rem",
    display: 'flex',
  },
  title: {
    //color: 'white',
    color: 'whitesmoke',
    fontWeight: 400,
    //textTransform: 'uppercase',
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
    //old form
    // width: '40rem',
    // backgroundColor: '#CEE9FA',
    // boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    //marginBottom: '2rem',
    //  paddingBottom: '1rem'

    //new form
    width: '40rem',
    height: '20rem',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '1.5rem',
    color: 'whitesmoke',
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
    borderBottom: '1px solid black',
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    padding: '0.5rem',
    ':focus': {
      outline: 0,
    },
  },
  h1: {
    color: 'whitesmoke'
  },
  h2: {
    fontWeight: 'normal',
    color: 'whitesmoke'
  },
  button: {
    display: 'inline-block',

    margin: '0 auto',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    borderColor: 'whitesmoke',
    backgroundColor: 'rgb(0, 0, 0, 0.8)',
    color: 'white',
    width: '15rem',
    marginBottom: '1rem',
    marginRight: '1rem',

    transition: 'color 0.25s ease-out',
  },
  googleButton: {
    // display: 'block',
    // margin: '0 auto',
    // padding: '1rem 2rem',
    // fontSize: '1.2rem',
    // borderRadius: '1rem',
    // backgroundColor: '#EA4335',
    // color: 'white',
    // width: '20rem',
    // marginTop: '1rem',
    // marginBottom: "1rem",
    // ':hover': {
    //   cursor: 'pointer'
    // }
    ':hover': {
      cursor: 'pointer',
      backgroundColor: "#EA4335",
    },
  },

  githubButton: {
    // display: 'block',
    // margin: '0 auto',
    // padding: '1rem 2rem',
    // fontSize: '1.2rem',
    // borderRadius: '1rem',
    // backgroundColor: 'black',
    // color: 'white',
    // width: '20rem',
    // marginTop: '1rem',
    // marginBottom: "1rem",
    // ':hover': {
    //   cursor: 'pointer'
    // }
    ':hover': {
      cursor: 'pointer',
      backgroundColor: "DimGray",
    },
  },
  fbButton: {
    // display: 'block',
    // margin: '0 auto',
    // padding: '1rem 2rem',
    // fontSize: '1.2rem',
    // borderRadius: '1rem',
    // backgroundColor: 'rgb(59, 89, 152)',
    // color: 'white',
    // width: '20rem',
    // marginTop: '1rem',
    // marginBottom: "1rem",
    // ':hover': {
    //   cursor: 'pointer'
    // }
    ':hover': {
      cursor: 'pointer',
      backgroundColor: "rgb(59, 89, 152)",
    },
  },
  twitterButton: {
    // display: 'block',
    // margin: '0 auto',
    // padding: '1rem 2rem',
    // fontSize: '1.2rem',
    // borderRadius: '1rem',
    // backgroundColor: 'rgb(29, 161, 242)',
    // color: 'white',
    // width: '20rem',
    // marginTop: '1rem',
    // marginBottom: "1rem",
    // ':hover': {
    //   cursor: 'pointer'
    // },
    ':hover': {
      cursor: 'pointer',
      backgroundColor: "rgb(29, 161, 242)",
    },
  },
  brandIcon: {
    marginRight: "1rem"
  }

})
export default SignIn