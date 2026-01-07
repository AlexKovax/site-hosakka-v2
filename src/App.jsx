import './App.css'

const projects = [
  {
    title: 'Contournement',
    description: 'Organisme de formation pionnier du mouvement no-code.',
    url: 'https://contournement.io',
  },
  {
    title: 'Le Cercle des Ops',
    description: 'Programme d\'apprentissage par la pratique à destination des no-codeurs·ses.',
    url: 'https://cercledesops.io',
  },
  {
    title: 'Vibe Coding',
    description: 'Plateforme de ressources sur le vibe coding.',
    url: 'https://vibe-coding.tech',
  },
]

const supportedProjects = [
  { title: 'Wikipedia', url: 'https://www.wikipedia.org' },
  { title: 'La Quadrature du Net', url: 'https://www.laquadrature.net' },
  { title: 'Internet Archive', url: 'https://archive.org' },
  { title: 'Framasoft', url: 'https://framasoft.org' },
  { title: 'No-Code France', url: 'https://nocode-france.fr' },
]

function App() {
  return (
    <div className="app">
      <main className="container">
        {/* Header */}
        <header className="header">
          <h1 className="logo">Hosakkā Studio</h1>
          <p className="tagline">Code, no-code, bon sens.</p>
          <p className="subtitle">par <a href="https://alexiskovalenko.fr" target="_blank" rel="noopener noreferrer">Alexis Kovalenko</a></p>
        </header>

        {/* Projects */}
        <section className="section">
          <h2 className="section-title">Projets</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <span className="card-link">
                  Découvrir →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Supported Projects */}
        <section className="section">
          <h2 className="section-title">Projets soutenus</h2>
          <div className="supported-grid">
            {supportedProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="supported-link"
              >
                {project.title}
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <a
            href="https://alexiskovalenko.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            En savoir plus sur Alexis et le contacter
          </a>
        </footer>
      </main>
    </div>
  )
}

export default App
