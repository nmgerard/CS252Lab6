import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class RoomForm extends Component {
  state = {
    room: {
        name: '',
        description: '',
        public: true,
        dm: false,
        members: []
    },
  }

  users = () => {
    const { users } = this.props
    delete users[this.props.user.uid]

    return Object.keys(users).map(
      uid => {
        const user = users[uid]
        return {
          value: uid,
          label: `${user.displayName} (${user.email})`,
        }
      }
    )
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addRoom(this.state.room)
    this.props.history.push(`/rooms/${this.state.room.name}`)
  }

  handleChange = (ev) => {
    const room = {...this.state.room}
  
    const target = ev.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    
    room[target.name] = value

    this.setState({ room })
  }

  handleSelectChange = (selectedOption) => {
    const room = {...this.state.room}
    room.members = selectedOption

    this.setState({ room })
  }

  render() {
    return (
      <div className={`RoomForm ${css(styles.roomForm)}`}>
        <main className={css(styles.main)}>
          <h2 className={css(styles.title)}><b>CREATE A ROOM</b></h2>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <p>
              <label className={css(styles.label)}>
                <input
                  type="checkbox"
                  name="public"
                  checked={this.state.room.public}
                  onChange={this.handleChange}
                />
                Public
              </label>
            </p>
            <p>
              <label htmlFor="name" className={css(styles.label)}>
                Room Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={this.state.room.name}
                className={css(styles.input, styles.textInput)}
                onChange={this.handleChange}
                autoFocus
              />
            </p>
            <p>
              <label htmlFor="description" className={css(styles.label)}>
                Description
              </label>
              <input
                type="text"
                name="description"
                value={this.state.room.description}
                className={css(styles.input, styles.textInput)}
                onChange={this.handleChange}
              />
            </p>
            {
              !this.state.room.public && (
                <div>
                  <label
                    htmlFor="members"
                    className={css(styles.label)}
                  >
                    Members
                  </label>
                  <Select
                    multi
                    name="members"
                    options={this.users()}
                    value={this.state.room.members}
                    onChange={this.handleSelectChange}
                    className = {css(styles.input)}
                    placeholder = "Invite people ..."
                  />
                </div>
              )
            }
            <div className={css(styles.buttonContainer)}>
              <button
                type="button"
                className={css(styles.button, styles.cancel)}
                onClick={this.props.history.goBack}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={css(styles.button)}
              >
                Create Room
              </button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  roomForm: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundImage: `url('https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')`,
    backgroundColor: '#272F44',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 1000,
  },

  title: {
    color: 'whitemoke',
    backgroundColor: "transparent",
    fontWeight: 400,
    lineHeight: '80px',
    fontSize: '2rem',
    marginBottom: '2rem',
    marginTop: '1rem',
  },

  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
    width: '40rem',
  },

  form: {
    //backgroundColor: 'Gainsboro',
    backgroundColor: 'rgba(0,0,0, 0.6)',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    padding: '0 2rem 2rem',
    color: "whitesmoke",
  },

  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: 'whitesmoke',
  },

  input: {
    width: '20rem',
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid black',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '0.5rem',
    backgroundColor: "transparent",
    color: "whitesmoke",
    ':focus': {
      outline: 0,
    },
  },

  textInput: {
    width: '20rem'
  },

  h2: {
    fontWeight: 'normal',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    display: 'block',
    padding: '1rem',
    margin: '0 1rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    //backgroundColor: 'CornflowerBlue',
    backgroundColor: 'rgb(49, 109, 63, 0.7)',
    color: 'whitesmoke',
    width: '10rem',
    cursor: 'pointer',
    outline: 0,
    transition: 'color 0.25s ease-out',
    ':hover': {
      backgroundColor: 'rgb(49,109,63)',
    }
  },

  cancel: {
    //backgroundColor: 'white',
    backgroundColor: 'rgb(250, 250, 250, 0.6)',
    color: '#666',

    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      backgroundColor: 'rgb(150,31,31)',
      color: "whitesmoke",
    }
  },
})

export default RoomForm