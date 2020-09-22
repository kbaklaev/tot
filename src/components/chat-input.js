import React, { useState } from 'react'

const ChatInput = ({ cb }) => {
  const [message, setMessage] = useState('')

  const sendMessageHandleClick = () => {
    cb(message)
    setMessage('')
  }

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      cb(message)
      setMessage('')
    }
  };

  return (
    <div className="p-4 w-full border-blue-300 border-width-2 flex">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => onKeyDownHandler(e)}
      />
      <button
        type="button"
        onClick={sendMessageHandleClick}
        className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
      >
        Отправить
      </button>
    </div>
  )
}

export default ChatInput
