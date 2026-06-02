import React, { useState } from 'react'

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Array<{role:string,text:string}>>([
    { role: 'assistant', text: 'Hi — I can propose mutations, explain confidence, or launch a prediction job (mock).' }
  ])
  const [input, setInput] = useState('')

  function send() {
    if (!input.trim()) return
    setMessages(m => [...m, { role: 'user', text: input }])
    // mock assistant reply
    setTimeout(() => {
      const reply = { role: 'assistant', text: 'Mock proposal: try A10L, G25V, S40T. Use the mutation playground to apply.' }
      setMessages(m => [...m, reply])
    }, 600)
    setInput('')
  }

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700">Chat Assistant (mock)</h3>
      <div className="mt-2 h-80 overflow-auto border rounded p-2 bg-white">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role==='user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded ${m.role==='user' ? 'bg-indigo-50 text-indigo-900' : 'bg-gray-100 text-gray-900'}`}>{m.text}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask the agent..." className="flex-1 border rounded p-2 text-sm" />
        <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={send}>Send</button>
      </div>
    </div>
  )
}
