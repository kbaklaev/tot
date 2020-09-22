import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ChatInput from '../../components/chat-input'

import { setNewFloodMessage } from '../../redux/actions/flood-actions'

const Flood = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.flood)

  const user = atob(localStorage.getItem('User'))

  return (
    <div>
      <section id="messages">
        {messages.length &&
          messages.map((message) => (
            <div className="flex flex-col" key={message.id}>
              <label className="font-bold">{message.username}</label>
              <span>{message.message}</span>
            </div>
          ))}
      </section>
      <div className="flex content-end">
        <ChatInput cb={(str) => dispatch(setNewFloodMessage(str, user))} />
      </div>
    </div>
  )
}

export default Flood
