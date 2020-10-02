import React from "react";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";

const Message = ({
  user,
  message,
  setMessage,
  dispatch,
  deleteWorkMessage,
  deleteFloodMessage,
}) => {
  return (
    <div className="w-full" key={message.id}>
      <div
        className={
          user !== message.username
            ? "bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"
            : "bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"
        }
      >
        <div className="grid">
          <div className="grid justify-items-start">
            <label className="flex justify-center items-center text-gray-800 font-bold">
              {message.username}
            </label>
            <span className="flex justify-center text-gray-800 items-center">
              {message.message}
            </span>
          </div>
          {user === message.username && (
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() =>
                  setMessage({
                    id: message.id,
                    message: message.message,
                  })
                }
              >
                <TiEdit />
              </button>
              <button
                type="button"
                onClick={() =>
                  deleteWorkMessage
                    ? dispatch(deleteWorkMessage(message.id))
                    : dispatch(deleteFloodMessage(message.id))
                }
              >
                <TiDeleteOutline />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
