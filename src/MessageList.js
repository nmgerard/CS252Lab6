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
        //backgroundColor: 'rgb(44, 52, 77)',
        backgroundColor: '#272F44',
        // backgroundColor: "white",
   //     backgroundImage: `url('https://images.unsplash.com/photo-1472552944129-b035e9ea3744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flex: 1,
        paddingBottom: "1rem",
        overflowY: "scroll",
        roomAnnouncment: {
            padding: '2rem 1rem 10rem',
            //color: "white",
            color: 'rgba(250,250,250, 0.85)',
            h3: {
                fontSize: "1.5rem",

            }
        }
    }
}

export default MessageList
