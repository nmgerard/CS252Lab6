import React from 'react'
import RoomList from './RoomList';
import UserInfo from './UserInfo';
import DirectMessageList from './DirectMessageList';

const Sidebar = ({user, signOut, users, rooms, addRoom}) => {
    return (
        <aside
            className="Sidebar"
            style={styles.sidebar}
        >
            {/* <div
                className="UserInfo"
                style={styles.children}
            >
                <div className="Avatar"><Avatar /></div>
                <div className="user">
                    {props.user.userName}
                </div>
                <a href="#">
                    <i className="fas fa-sign-out-alt"></i>
                </a>    
            </div> */}
            <UserInfo user = {user} signOut={signOut}/>
            <h1 style={{
                ...styles.children,
                ...styles.h1
            }}>
            </h1>
            <nav 
                className="RoomList"
                style = {styles.children}
            >
                <RoomList 
                    users = {users}
                    user = {user} 
                    rooms = {rooms}
                    addRoom = {addRoom}    
                />
                <DirectMessageList
                    users = {users}
                    user = {user} 
                    rooms = {rooms}
                    addRoom = {addRoom}
                />
            </nav>
            <img src="https://www.freelogodesign.org/download/file?id=5144c9b3-f920-4f0f-9f4a-e4e5f6fa14db.png" alt="" width="75" height="70" style={styles.image}></img>
        </aside>

    )
}

const styles = {
    sidebar: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1501619757722-90657a99803b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        //height: '100%',
        color: "rgba(255, 255, 255, 0.8)",
        width: "12rem",
        padding: "1rem 0",
        display: "flex",
        flexDirection: "column"
    },
    image: {
        position: "absolute",
        bottom: "0",
        marginLeft: "auto",
        marginRight: "auto",
        left: "3.35rem",
        padding: "0.5rem 0",
    },
    children: {
        padding: "0 1rem",
    },

    h1: {
        color: "white",
        fontSize: "1.2rem",
        marginTop: "0"
    },
}

export default Sidebar