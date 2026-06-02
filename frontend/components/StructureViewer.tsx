import React, { useEffect, useRef } from 'react'

export default function StructureViewer({ pdbUrl }: { pdbUrl: string }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Load Mol* from CDN (light-weight loader). In production, install via npm and import properly.
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/molstar/build/viewer/molstar.min.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      const Molstar = (window as any).molstar
      try {
        // Basic viewer - if molstar global is available
        // This is a graceful attempt; if CDN changes, viewer will be empty in mock mode
        if (Molstar && ref.current) {
          // @ts-ignore
          const viewer = new Molstar.Plugin(ref.current, { layoutIsExpanded: true })
          viewer.loadStructureFromUrl(pdbUrl, 'pdb').catch((e: any) => console.warn('Mol* load failed', e))
        }
      } catch (e) {
        console.warn('Mol* init error', e)
      }
    }
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [pdbUrl])

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700">Structure Viewer</h3>
      <div ref={ref} style={{ width: '100%', height: 520 }} className="mt-2 border rounded" />
      <p className="text-xs text-gray-500 mt-2">Mol* viewer (CDN). Use real PDB/mmCIF URLs or integrate local assets via the backend.</p>
    </div>
  )
}
