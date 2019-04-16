import React, { Component } from 'react'
import Message from './Message';

class MessageList extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps.messages.length < this.props.messages.length) {
            this.scrollToBottom()
        }
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
    }
    render () {
        const {messages, room} = this.props
    return (
        <div className="MessageList" style = {styles.messageList}>
            <div className = "roomAnnouncement" style = {styles.messageList.roomAnnouncment}>
                <h3 style = {styles.messageList.roomAnnouncment.h3}>
                    #{room.displayName}
                </h3>
                {
                    room.dm
                        ? <p>This is the very beginning of the direct message.</p>
                        : <p>This is the very beginning of the #{room.displayName} room.</p>
                }
            </div>
            {
                messages.map(msg =>
                    <Message key={msg.id} message={msg} addReaction={this.props.addReaction}/>
                )
            }
            <div ref = {el => this.messagesEnd = el}></div>
        </div>
    )
}
}

const styles = {
    messageList: {
        // backgroundColor: "white",
        backgroundImage: `url('https://images.unsplash.com/photo-1519229560282-5c6d4a11e474?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb6548e69b2812cd4008d56825cd94c9&auto=format&fit=crop&w=1649&q=80')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flex: 1,
        paddingBottom: "1rem",
        overflowY: "scroll",
        roomAnnouncment: {
            padding: '2rem 1rem 10rem',
            color: "white",
            h3: {
                fontSize: "1.5rem",

            }
        }
    }
}

export default MessageList
