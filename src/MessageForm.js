import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

class MessageForm extends Component {
  state = {
    body: '',
    bgColor: '',
    count: ''
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addMessage(this.state.body)
    this.setState({ body: '' })
  }

  handleChange = (ev) => {
    this.setState({ body: ev.target.value })
  }

  boxClick = (e) => {
    if (this.state.count === 'click') {
      this.setState({
        //bgColor: "#FF0000",
        count: 'noclick'
      })  
      document.body.style.backgroundColor = "#FFFFFF"
      } else {
      this.setState({
        //bgColor: "#7FF000",
        count: 'click'
      })
      document.body.style.backgroundColor = "#FF0000"
    }
  }

  render() {
    return (
      <form
        className={`MessageForm ${css(styles.form)}`}
        onSubmit={this.handleSubmit}
      >
        <div className={css(styles.icon)}>
          <i className="fas fa-comment-alt"></i>
        </div>
        <input
          required
          type="text"
          name="body"
          placeholder="Type a message..."
          value={this.state.body}
          onChange={this.handleChange}
          autoFocus
          className={css(styles.input)}
        />
        {/* <input
          type="file"
          accept="image/*"
          onChange={this.handleImg}
        /> */}

        <div className={css(styles.boxClick)} 
          style={{backgroundColor: this.state.bgColor}}
          onClick={this.boxClick}>
          Change Color!
        </div>

        <button type="submit" className={css(styles.button)}>
          <i className="far fa-paper-plane" title="Send"></i>
        </button>

      </form>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    //backgroundColor: 'white',
    backgroundColor: 'rgba(250,250,250, 0.85)',
    height: '3rem',
    display: 'flex',
    alignItems: 'stretch',
    border: '2px solid #999',
    borderRadius: '0.5rem',
    margin: '0.25rem',
    padding: 0,
    //width: '85%',
    //position: 'fixed'
  },

  icon: {
    display: 'flex',
    borderRadius: '0.5rem',
    alignItems: 'center',
    //backgroundColor: 'white',
    backgroundColor: 'rgba(250,250,250, 0.85)',
    color: '#ccc',
    padding: '0 0.5rem',
    fontSize: '1.2rem',
  },

  input: {
    flex: 1,
    fontSize: '1.2rem',
    border: 0,
    backgroundColor: 'rgba(250,250,250, 0.85)',
    ':focus': {
      outline: 0,
    },
  },
  boxClick: {
    fontSize: '1.5rem',
    backgroundColor: '#b3b3b3',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    border: '1px solid white',
  },
  button: {
    fontSize: '1.5rem',
    backgroundColor: '#1A8FE3',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    border: '1px solid white',
  },
})

export default MessageForm