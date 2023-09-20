import React, { useState, useEffect } from 'react'
import styles from '../stylesheets/Chat.module.css'
import { io } from "socket.io-client";
import sendicon from "../assets/send.png";
const SOCKET_URL = "http://localhost:6100";
const socket = io(SOCKET_URL);

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const currentRoom = "ABC"
    const role = "Ministry of Defence"
    const handleChange1 = (event) => {
        setCurrentMessage(event.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentMessage.trim() !== "") {
            socket.emit("send-room", currentRoom, currentMessage, role);
        }
        setCurrentMessage("");
    };
    useEffect(() => {
        socket.emit("join-one", currentRoom)
    }, []);
    socket.off("receive-room").on("receive-room", (message, fromrole, date, time) => {
        setMessages((prevMessages) => [...prevMessages, { content: message, fromrole: fromrole, time: time, date: date }]);
    });

    return (
        <>
            <div className={styles.rightmost}>
                <div>
                    <button className={styles.leftbutton}>
                        <span className={styles.notifications1}>ORGANIZATIONS</span>
                    </button>
                </div>
                <div className={styles.smallcardleft}>
                    <button className={styles.leftbutton}>
                        <span className={styles.notifications}>
                            RAW
                        </span>
                    </button>
                    <button className={styles.leftbutton} >
                        <span className={styles.notifications}>
                            DIA
                        </span>
                    </button>
                    <button className={styles.leftbutton} >
                        <span className={styles.notifications}>
                            DMI
                        </span>
                    </button>
                    <button className={styles.leftbutton} >
                        <span className={styles.notifications}>
                            DNI
                        </span>
                    </button>
                    <button className={styles.leftbutton} >
                        <span className={styles.notifications}>
                            DMI
                        </span>
                    </button>
                    <button className={styles.leftbutton} >
                        <span className={styles.notifications}>
                            DSI
                        </span>
                    </button>
                    <button className={styles.leftbutton} >
                        <span className={styles.notifications}>
                            JCB
                        </span>
                    </button>
                    <button className={styles.leftbutton}>
                        <span className={styles.notifications}>
                            NTRO
                        </span>
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <h3 className={styles.roomname}>RAW</h3>
                <div className={styles.innerchat}>
                    <ul className={styles.chatMessages}>
                        <li className={styles.chatMessage}>
                            <div className={styles.tooltip1} style={{ backgroundColor: "#00055e" }}>
                                <div className={styles.chathead}>
                                    <p className={styles.date}>RAW</p>
                                </div>
                                <span className={styles.message}>We have noticed an increase in suspicious activities in Wagah Border region. More personnel should be deployed.</span>
                                <div className={styles.flextime}>
                                    <p className={styles.time2}>20 Sept 2023</p>
                                    <p className={styles.time}>20:58:51</p>
                                </div>
                            </div>
                        </li>
                        {messages.map((msg, index) => {
                            return (
                                <li className={styles.chatMessage} key={index} style={{ marginLeft: "60%" }}>
                                    <div className={styles.tooltip1} style={{ backgroundColor: "#FF0046" }}>
                                        <div className={styles.chathead}>
                                            <p className={styles.date}>{msg.fromrole}</p>
                                        </div>
                                        <span className={styles.message}>{msg.content}</span>
                                        <div className={styles.flextime}>
                                            <p className={styles.time2}>{msg.date}</p>
                                            <p className={styles.time}>{msg.time}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.outinput}>
                <form onSubmit={handleSubmit} className={styles.chatForm}>
                    <input type="text" name="message" value={currentMessage} onChange={handleChange1} placeholder="Type your message here" className={styles.chatInput} />
                    <button type="submit" className={styles.chatButton}>
                        <img src={sendicon} alt="" />
                    </button>
                </form>
            </div>
        </>
    )
}

export default Chat