import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import Avatar from './Avatar'
import Metadata from './Metadata'
import Reaction from './Reaction'

class Message extends Component {
    state = {
        showPicker: false,
    }

    togglePicker = () => {
        this.setState({ showPicker: !this.state.showPicker })
    }

    handleEmojiSelect = (emoji) => {
        this.props.addReaction(this.props.message, emoji.colons)
        this.togglePicker()
    }

    render() {
        const { message } = this.props
        const reactions = message.reactions || []

        return (
            <div className={`Message ${css(styles.message)}`}>
                <Avatar user={message.user} />
                <div className={css(styles.details)}>
                    <Metadata message={message} />
                    <div className="body">
                        {message.body}
                    </div>
                    <div className={css(styles.reactionList)}>
                        {
                            Object.keys(reactions).map(
                                emoji => (
                                    <Reaction
                                        key={emoji}
                                        message={message}
                                        emoji={emoji}
                                        addReaction={this.props.addReaction}
                                    />
                                )
                            )
                        }
                    </div>
                    <button
                        className={css(styles.reactionButton)}
                        onClick={this.togglePicker}
                    >
                        <i className="far fa-smile"></i>
                    </button>
                </div>
                {
                    this.state.showPicker &&
                    <Picker
                        showPreview={false}
                        style={pickerStyles}
                        onSelect={this.handleEmojiSelect}
                    />
                }
            </div>
        )
    }
}

const styles = StyleSheet.create({
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '1rem',
        position: 'relative',
        //color: "white",
        color: 'rgba(250,250,250, 0.85)',
        zIndex: 1,

        ':hover': {
           backgroundColor: 'rgba(250,250,250, 0.1)',
        }
    },

    details: {
        flex: 1,
        paddingLeft: '0.5rem',
    },

    reactionButton: {
        border: 0,
        outline: 0,
        backgroundColor: 'transparent',
        padding: 0,
        fontSize: '1rem',
        color: '#ccc',
        cursor: 'pointer',
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',

        ':hover': {
            cursor: 'pointer',
            color: 'white',
        },
    },

    reactionList: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '0.5rem'
    }
})

const pickerStyles = {
    position: 'absolute',
    top: '-20rem',
    right: '2rem',
}

export default Message