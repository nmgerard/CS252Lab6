import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class DirectMessageForm extends Component {
  state = {
    room: {
        name: '',
        description: 'Direct message',
        public: false,
        dm: true,
        members: [],
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
    this.props.history.goBack()
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
          <h2 className={css(styles.title)}>
            <b>
              DIRECT MESSAGE
            </b>
          </h2>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            {
              !this.state.room.public && (
                <div>
                  <label
                    htmlFor="members"
                    className={css(styles.label)}
                  >
                    Start a conversation
                  </label>
                  <Select
                    multi
                    required
                    name="members"
                    options={this.users()}
                    value={this.state.room.members}
                    onChange={this.handleSelectChange}
                    className={css(styles.input)}
                    placeholder="Invite people..."
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
    backgroundImage: `url('https://images.unsplash.com/photo-1503662549813-28954e75f215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')`,
    backgroundColor: '#272F44',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 1000,
  },

  title: {
    color: 'white',
    fontWeight: 400,
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
    width: '40rem',
  },

  form: {
    //backgroundColor: 'Lavender',
    backgroundColor: 'rgba(250,250,250, 0.4)',
    boxShadow: '0 1px 1px rgba(250,250,250,.1)',
    marginBottom: '2rem',
    padding: '2rem',
    color: "whitesmoke",
  },

  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: 'white',
  },

  input: {
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid whitesmoke',
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
    width: '20rem',
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
    //backgroundColor: '#00BFFF',
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

export default DirectMessageForm