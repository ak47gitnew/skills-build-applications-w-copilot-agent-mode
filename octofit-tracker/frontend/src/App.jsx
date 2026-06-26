import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          <span className="badge bg-primary-subtle text-primary-emphasis mb-3">
            OctoFit Tracker
          </span>
          <h1 className="display-5 fw-bold mb-3">
            Track workouts, teams, and progress in one place.
          </h1>
          <p className="lead text-muted mb-4">
            A modern multi-tier fitness dashboard for logging activities, managing
            teams, and staying motivated with leaderboards.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="#features">
              Explore features
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="#api">
              View API status
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">What’s ready</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">React 19 + Vite frontend</li>
                <li className="list-group-item px-0">Express + TypeScript backend</li>
                <li className="list-group-item px-0">MongoDB-ready Mongoose setup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="row mt-5 g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Activity Logging</h3>
              <p className="text-muted mb-0">
                Capture workouts and monitor everyday movement trends.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Team Challenges</h3>
              <p className="text-muted mb-0">
                Create and manage fitness teams with shared goals.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Leaderboard Insights</h3>
              <p className="text-muted mb-0">
                Stay motivated with transparent progress comparisons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
