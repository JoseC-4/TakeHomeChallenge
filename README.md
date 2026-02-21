# TakeHomeChallenge
# JobNova Challenge — LiveKit Voice Agent + Frontend UI

This repo contains my submission for the JobNova take-home challenge, split into two parts:

1) **Backend (LiveKit Voice Agent)** — a real-time voice assistant built with LiveKit Agents (STT → LLM → TTS).  
2) **Frontend (JobNova UI)** — a responsive job board + job details experience inspired by the provided designs.


Repo Structure
.
├── BackendChallenge/
│ └── livekit-voice-agent/
│ ├── agent.py
│ ├── pyproject.toml / requirements.txt
│ ├── .env.example
│ └── ...
├── FrontendChallenge/
│ └── frontend/
│ ├── src/
│ ├── index.html
│ ├── package.json
│ └── ...
└── README.md


## Backend — LiveKit Voice Agent

### What it does
- Connects to a LiveKit room and runs a voice agent.
- Uses a standard pipeline:
  - **Speech-to-Text (STT)** → **LLM reasoning** → **Text-to-Speech (TTS)**.
- Supports configurable TTS voices (example: Cartesia Sonic).

### Requirements
- Python 3.10+ recommended
- LiveKit credentials (URL, API key/secret)
- OpenAI API key (or whichever LLM provider is configured)
- (Optional) Cartesia TTS credentials depending on your setup

Setup & Run (example)

From the backend project directory:
    **Common variables used:**
    
    OPENAI_API_KEY
    
    LIVEKIT_URL
    
    LIVEKIT_API_KEY
    
    LIVEKIT_API_SECRET
    
    (If you see a 429 like insufficient_quota, that indicates your OpenAI key has no available quota/billing.)
# create/activate venv (choose one method you use)
python -m venv .venv
# Windows PowerShell:
.\.venv\Scripts\Activate.ps1
# macOS/Linux:
source .venv/bin/activate

# install deps
pip install -r requirements.txt
# OR if using uv/pyproject:
# uv sync

# run the agent (example)
python agent.py
# OR (if you use LiveKit dev runner / uv):
# uv run agent.py dev


Frontend — JobNova UI
What it includes

Sidebar navigation (Jobs, AI Mock Interview, Resume, Profile, etc.)

Top tabs (Matched / Liked / Applied)

Job list cards (responsive)

Job details page layout (responsive; right panel collapses on smaller screens)

“Maximize your interview success” panel

Qualifications chips

Benefits list & Company card sections

Tech

React (Vite)

Tailwind CSS

Setup & Run

From the frontend project directory:

npm install
npm run dev

Build for production:

npm run build
