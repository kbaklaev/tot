import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatInput from "../../components/chat-input";
import Message from "../../components/message";

import {
  setNewWorkMessage,
  editWorkMessage,
  deleteWorkMessage,
} from "../../redux/actions/work-actions";

const Work = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.work);
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
                  deleteWorkMessage={deleteWorkMessage}
                />
              ))
          : null}
      </section>
      <div className="w-full flex bg-blue-100">
        <ChatInput
          cb={(str, id) =>
            id
              ? dispatch(editWorkMessage(str, user, id))
              : dispatch(setNewWorkMessage(str, user))
          }
          initMessage={message}
        />
      </div>
    </>
  );
};

export default Work;
