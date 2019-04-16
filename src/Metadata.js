import React from 'react'
import moment from 'moment'

const Metadata = ({ message }) => {
    return (
        <div className="Metadata" style = {styles.metadata}>
            <div className="user" style = {styles.metadata.user}>{message.user.displayName}</div>
            <span title = {moment(message.createdAt).format('D MMM @ h:mm a')}>
                {moment(message.createdAt).format('D MMM @ h:mm a')}
            </span>
        </div>
    )
}

const styles = {
    metadata: {
        display: "flex",
        alignItems: "baseline",

        user: {
            fontWeight: "bold",
            marginRight: "0.5rem"
        },

        time: {
            color: "#999",
            fontSize: "0.8rem"
        }
    }
}

export default Metadata