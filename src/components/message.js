//---- import / export ----//
import React from 'react'
// import { useParams } from 'react-router'
function Message(props) {
    console.log(props);
    /**
     * 
     * @returns Рендерит сообщения в основное окно сообщений
     */
    return (
        <>
            <h1>WTF!</h1>
            {/* {props.messages.map(message => {
                return(
                    <div className="message" key={message.id}>
                        <p className="auhtor_name">{ message.name }</p>
                        <p className="auhtor_text">{ message.message }</p>
                        <p className="time_message">{ message.time }</p>
                    </div>
                )
            })
            } */}
        </>  
    )
}
export default Message;
