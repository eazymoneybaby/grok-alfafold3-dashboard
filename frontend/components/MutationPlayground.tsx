import React, { useState } from 'react'

function applyMutation(sequence: string, mutation: string) {
  // mutation e.g. A23L
  const match = mutation.match(/^([A-Z])([0-9]+)([A-Z])$/i)
  if (!match) return sequence
  const [, from, posStr, to] = match
  const pos = parseInt(posStr, 10) - 1
  const seq = sequence.replace(/\s|>/g, '').split('\n').slice(1).join('')
  if (pos < 0 || pos >= seq.length) return sequence
  const arr = seq.split('')
  arr[pos] = to.toUpperCase()
  return '>' + 'mutant' + '\n' + arr.join('')
}

export default function MutationPlayground() {
  const [mutation, setMutation] = useState('A10L')
  const [exampleSeq] = useState('>example\nMKTAYIAKQRQISFVKSHFSRQDILDLWIYHTQGYFP')
  const [result, setResult] = useState('')

  function onApply() {
    const mutated = applyMutation(exampleSeq, mutation)
    setResult(mutated)
  }

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700">Mutation Playground</h3>
      <div className="mt-2 flex gap-2">
        <input className="border rounded p-2 text-sm" value={mutation} onChange={e => setMutation(e.target.value)} />
        <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm" onClick={onApply}>Apply</button>
      </div>

      <div className="mt-3">
        <label className="block text-xs text-gray-500">Result FASTA</label>
        <pre className="mt-1 p-2 bg-gray-100 rounded text-xs font-mono">{result || exampleSeq}</pre>
      </div>
    </div>
  )
}
