import React from 'react'
import Avatar from './Avatar'
import SignOut from './SignOut';

const UserInfo = ({ user, signOut }) => {
    return (
        <div className="UserInfo" style = {styles.userInfo}>
            <Avatar user = {user} style = {styles.avatar}/>
            <div className="user" style = {styles.user}>
                {user.displayName}
            </div>
            <SignOut signOut = {signOut}/>
        </div>
    )
}

const styles = {
    userInfo: {
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        padding: "0 1rem"
    },
    avatar: {
        marginRight: "0.5rem"
    },
    user: {
        flex: "1",
    },
    a: {
        border: "0",
        padding: "0",
        backgroundColor: "transparent",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "1.2rem",
        transition: "color 0.25s ease-out"
    }
}

export default UserInfo