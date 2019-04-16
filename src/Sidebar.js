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
                XTBC 18
            </h1>
            <nav 
                className="RoomList"
                style = {styles.children}
            >
                {/* <h2>Rooms</h2>
                <ul>
                    <li><a href="#">general</a></li>
                    <li><a href="#">random</a></li>
                </ul> */}
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
        </aside>

    )
}

const styles = {
    sidebar: {
        //backgroundColor: "#4c3465",
        backgroundImage: `url('https://images.unsplash.com/photo-1499260320506-8144c5c33ddf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=544e34eab2bbf0f864a6010191f8241d&auto=format&fit=crop&w=1624&q=80')`,
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