import React, { useState } from 'react'

export default function SequenceEditor() {
  const [sequence, setSequence] = useState('>example\nMKTAYIAKQRQISFVKSHFSRQDILDLWIYHTQGYFP')
  const [error, setError] = useState('')

  function validateFasta(text: string) {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
    if (!lines.length) return 'Empty sequence'
    if (!lines[0].startsWith('>')) return 'FASTA should start with a \'>\' header line'
    const seq = lines.slice(1).join('').toUpperCase()
    if (!/^[ACDEFGHIKLMNPQRSTVWYBXZJUO*-]+$/.test(seq)) return 'Sequence contains invalid characters'
    return ''
  }

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setSequence(e.target.value)
    setError(validateFasta(e.target.value))
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Sequence (FASTA)</label>
      <textarea value={sequence} onChange={onChange} rows={6} className="mt-2 block w-full rounded border p-2 text-sm font-mono" />
      {error ? <p className="text-red-600 text-sm mt-2">{error}</p> : <p className="text-gray-500 text-sm mt-2">Valid FASTA</p>}
    </div>
  )
}
