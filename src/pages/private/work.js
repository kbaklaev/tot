import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatInput from "../../components/chat-input";

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
    <div>
      <section id="messages">
        {messages.length &&
          messages
            .sort((a, b) => a.id - b.id)
            .map((message) => (
              <div className="flex flex-col" key={message.id}>
                <label className="font-bold">{message.username}</label>
                <div>
                  <span>{message.message}</span>
                  <button
                    type="button"
                    onClick={() =>
                      user === message.username &&
                      setMessage({ id: message.id, message: message.message })
                    }
                  >
                    ...
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteWorkMessage(message.id))}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
      </section>
      <div className="flex content-end">
        <ChatInput
          cb={(str, id) =>
            id
              ? dispatch(editWorkMessage(str, user, id))
              : dispatch(setNewWorkMessage(str, user))
          }
          initMessage={message}
        />
      </div>
    </div>
  );
};

export default Work;
