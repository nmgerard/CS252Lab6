import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import OpenWeatherMap from './OpenWeatherMap';

/*const ChatHeader = ( { room, removeRoom } ) => {*/
class ChatHeader extends Component {
    state = {
        location: '',
    }

    handleChange = (ev) => {
        this.setState({ location: ev.target.value })
    }

    handleSubmit = (ev) => {
        const {room} = this.props
        ev.preventDefault()
        this.props.history.push(`/rooms/${room.displayName}/${this.state.location}`)
    }

    render () {
        const {room, removeRoom} = this.props
        return (
            <div className="ChatHeader" style = {styles.chatHeader}>
                <div className="roomInfo">
                    <h2 style = {styles.h2}> #{room.displayName}</h2>
                    <p style = {styles.p}>{room.description}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your zip code"
                                value={this.state.location}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <button type="submit">
                                Look up weather of city
                            </button>
                        </div>
                    </form>
                    <Route path="/rooms/hi/:location" component={OpenWeatherMap} />
                <button
                    style = {styles.button}
                    onClick = {() => removeRoom(room)}
                >
                    <i className = "far fa-trash-alt"></i>
                </button>
            </div>
    )}
}

const styles = {
    chatHeader: {
        //backgroundColor: "#f3f3f3",
        backgroundColor: '#DCDCDC',
        borderBottom: "1px solid #ccc",
        padding: "0.25rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between'
        //width: "100%",
        //position: "fixed"
    },
    h2: {
        fontSize: "1.1rem",
        margin: "0"
    },
    p: {
        color: 'rgb(103, 103, 107)',
        margin: "0",
        fontSize: "1rem"
    },
    button: {
        border: 0,
        outline: 0,
        backgroundColor: 'transparent',
        padding: 0,
        cursor: 'pointer',
        fontSize: '1rem',
        color: 'rgba(0,0,0, 0.4)',
    },
    button2: {
        border: 0,
        outline: 0,
        backgroundColor: 'transparent',
        padding: 0,
        cursor: 'pointer',
        fontSize: '1rem',
        color: '#FF0000',
    }
}

export default ChatHeader
