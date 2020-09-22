import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatInput from "../../components/chat-input";
import Message from "../../components/message";

import {
  setNewFloodMessage,
  editFloodMessage,
  deleteFloodMessage,
} from "../../redux/actions/flood-actions";

const Flood = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.flood);
  const [message, setMessage] = useState({});

  const user = atob(localStorage.getItem("User"));

  return (
    <>
      <section id="messages" className="mb-auto overflow-y-auto">
        {messages.length
          ? messages
              .sort((a, b) => a.id - b.id)
              .map((message) => (
                <Message
                  key={message.id}
                  user={user}
                  message={message}
                  setMessage={setMessage}
                  dispatch={dispatch}
                  deleteWorkMessage={deleteFloodMessage}
                />
              ))
          : null}
      </section>
      <div className="w-full flex bg-blue-100">
        <ChatInput
          cb={(str, id) =>
            id
              ? dispatch(editFloodMessage(str, user, id))
              : dispatch(setNewFloodMessage(str, user))
          }
          initMessage={message}
        />
      </div>
    </>
  );
};

export default Flood;
