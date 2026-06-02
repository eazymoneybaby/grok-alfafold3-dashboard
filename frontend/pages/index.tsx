import Head from 'next/head'
import dynamic from 'next/dynamic'
import SequenceEditor from '../components/SequenceEditor'
import MutationPlayground from '../components/MutationPlayground'
import StructureViewer from '../components/StructureViewer'
import ChatAssistant from '../components/ChatAssistant'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <Head>
        <title>Grok AlphaFold3 Dashboard — Interactive UI</title>
      </Head>

      <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-semibold">Grok AlphaFold3 — Interactive IUX</h1>
        <p className="text-sm text-gray-600 mt-1">Sequence editor, mutation playground, structure viewer and agent chat.</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        <section className="col-span-4 bg-white p-4 rounded shadow">
          <SequenceEditor />
          <MutationPlayground />
        </section>

        <section className="col-span-5 bg-white p-4 rounded shadow">
          <StructureViewer pdbUrl="https://files.rcsb.org/view/1CRN.pdb" />
        </section>

        <aside className="col-span-3 bg-white p-4 rounded shadow">
          <ChatAssistant />
        </aside>
      </main>
    </div>
  )
}
