import React, { useState, useEffect } from 'react'

const ChatInput = ({ cb, initMessage }) => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (initMessage.message) setMessage(initMessage.message)
  }, [initMessage])

  const sendMessageHandleClick = () => {
    cb(message, initMessage.id)
    setMessage('')
  }

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      sendMessageHandleClick()
    }
  };

  return (
    <div className="p-4 w-full border-blue-300 border-width-2 flex gap-1">
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => onKeyDownHandler(e)}
      />
      <button
        type="button"
        onClick={sendMessageHandleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Отправить
      </button>
    </div>
  )
}

export default ChatInput
