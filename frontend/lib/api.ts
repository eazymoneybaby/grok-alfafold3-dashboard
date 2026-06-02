// Minimal mock API adapter so the UI is interactive without a backend

export async function submitJob(sequence: string) {
  const id = 'job-' + Math.random().toString(36).slice(2,9)
  const data = { id, sequence, status: 'queued', created_at: new Date().toISOString() }
  // store in localStorage for demo
  const jobs = JSON.parse(localStorage.getItem('mockJobs') || '[]')
  jobs.unshift(data)
  localStorage.setItem('mockJobs', JSON.stringify(jobs))
  // simulate progress
  setTimeout(() => {
    data.status = 'running'
    localStorage.setItem('mockJobs', JSON.stringify(jobs))
  }, 1500)
  setTimeout(() => {
    data.status = 'finished'
    data.result = { pdb: 'https://files.rcsb.org/view/1CRN.pdb', plddt: [] }
    localStorage.setItem('mockJobs', JSON.stringify(jobs))
  }, 6000)
  return data
}

export function listJobs() {
  return JSON.parse(localStorage.getItem('mockJobs') || '[]')
}
