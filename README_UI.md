# Interactive IUX prototype

This branch adds a Next.js-based interactive UI prototype for the Grok AlphaFold3 Dashboard. It contains a mocked frontend that demonstrates:

- Sequence editor with FASTA validation
- Mutation playground for quick single-site edits
- Mol* based structure viewer (CDN loaded)
- Chat assistant mock that can propose mutations

How to run locally (quick):

1. cd to the repo root
2. cd infra && docker compose -f docker-compose.ui.yml up
3. Open http://localhost:3000

Notes:
- This is an interactive prototype wired to a mock client-side API (localStorage). The UI is ready to be wired to your backend endpoints.
- Next steps: connect to backend /api endpoints, add SSE/WebSocket for realtime job updates, integrate LLM provider securely.
