import { createFileRoute, Link } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ApiGatewayIcon, BrainIcon, BrowserIcon, ChartAnalysisIcon, ChartLineIcon, ChartRelationshipIcon, CheckmarkCircle04Icon, CheckmarkSquare04Icon, CloudIcon, CodeCircleIcon, CodeFolderIcon, CodeXmlIcon, ComputerCheckIcon, CpuIcon, DatabaseIcon, DatabaseSearchIcon, DatabaseSyncIcon, FileValidationIcon, FlaskConicalIcon, GitBranchIcon, GitForkIcon, GitGraphIcon, GithubIcon, GitPullRequestIcon, JavaScriptIcon, MicroscopeIcon, PhpIcon, PythonIcon, ReactIcon, RoboticIcon, ServerCogIcon, ServerIcon, ShellIcon, SqlIcon, TailwindcssIcon, TerminalIcon, TestTubeDiagonalIcon, TestTubeIcon, Typescript01Icon, WorkflowIcon, ZapIcon } from '@hugeicons/core-free-icons'
import { Socials } from '@/components/Socials'
// Kept ready for a server-capable host, where the live GitHub GraphQL request can run safely.
// import { GitHubActivity } from '@/components/GitHubActivity'
import { ThemeToggle } from '@/components/ThemeToggle'

export const Route = createFileRoute('/')(  {
  head: () => ({ meta: [{ title: 'Gareth Price' }] }),
  component: Home,
})

const experience = [
  {
    date: 'Jan 2021 — present', role: 'Senior Scientist I → Senior Scientist II → Principal Scientist', organisation: 'Oxford Biomedica',
    summary: 'I build the connective tissue between the lab and the software that makes it scale: automated assays, analytical data products and the engineering practices around them.',
    highlights: ['Turn complex ELISA, qPCR, extraction and cell-culture workflows into dependable automated systems on Hamilton platforms.', 'Help scientific teams adopt the less visible foundations too: data pipelines, GitHub, CI/CD, release practices and practical support across the organisation.'],
  },
  {
    date: 'Sep 2017 — Jan 2021', role: 'Diabetes UK Post-Doctoral Research Fellow', organisation: 'University of Lincoln',
    summary: 'I investigated how connexin and purinergic signalling shapes cell communication, inflammation and fibrosis in the diabetic kidney, with the aim of finding future therapeutic targets.',
    highlights: ['Combined cell culture, molecular biology and functional assays to connect changes at the cell membrane with disease progression.', 'Led several research projects, collaborated internationally and shared the work through publications, conferences and student supervision.'],
  },
  {
    date: '2012 — 2017', role: 'MSc and PhD', organisation: 'University of Warwick & University of Lincoln',
    summary: 'A combined computational and experimental foundation: MOAC MSc training in discovery science, then a Diabetes UK-funded PhD on cell communication in the diabetic kidney.',
    highlights: ['The MSc brought together molecular dynamics, docking and GPU/HPC work with wet-lab biology, and led to OpenDiscovery, an open-source molecular-docking tool.', 'For the PhD, I moved with the research group from Warwick to Lincoln and used experimental biology to study hemichannel purinergic signalling in the diabetic kidney.'],
  },
]

const skills = [
  ['Languages', [['Python', PythonIcon], ['TypeScript', Typescript01Icon], ['JavaScript', JavaScriptIcon], ['Go', CodeCircleIcon], ['SQL', SqlIcon], ['R', ChartAnalysisIcon], ['Rust', CodeCircleIcon], ['Swift/SwiftUI', CodeCircleIcon], ['Objective-C', CodeXmlIcon], ['PHP', PhpIcon], ['C++', CodeXmlIcon], ['VBA', CodeXmlIcon], ['shell', ShellIcon], ['HTML', CodeXmlIcon], ['CSS', CodeXmlIcon]]],
  ['Scientific work', [['cell biology', MicroscopeIcon], ['diabetic kidney disease', TestTubeIcon], ['ELISA', TestTubeIcon], ['qPCR', TestTubeDiagonalIcon], ['Ella/ProteinSimple immunoassays', TestTubeIcon], ['magnetic-bead extraction', TestTubeDiagonalIcon], ['assay development', FlaskConicalIcon], ['experimental design', ChartAnalysisIcon]]],
  ['Automation & robotics', [['Hamilton STAR', RoboticIcon], ['Hamilton STARlet', RoboticIcon], ['Hamilton CECULA', RoboticIcon], ['96-channel head & MPE²', RoboticIcon], ['Hamilton Venus', RoboticIcon], ['Venus simulation', ComputerCheckIcon], ['HSL', CodeXmlIcon], ['C++ HSL extensions', CodeXmlIcon], ['Momentum scheduling', WorkflowIcon], ['QuantStudio', TestTubeDiagonalIcon], ['SpectraMax', ChartAnalysisIcon], ['liquid handling', WorkflowIcon]]],
  ['Data engineering', [['Dagster', WorkflowIcon], ['DLT', WorkflowIcon], ['dbt', DatabaseSyncIcon], ['Apache Iceberg', DatabaseIcon], ['Delta Lake', DatabaseIcon], ['DuckLake', DatabaseIcon], ['Nessie', GitBranchIcon], ['Trino', SqlIcon], ['DuckDB', DatabaseIcon], ['SQLite', DatabaseIcon], ['Pandera', CheckmarkSquare04Icon], ['MinIO', CloudIcon], ['PostgreSQL', DatabaseIcon], ['LIMS/Sapio', DatabaseSearchIcon], ['data lineage', ChartRelationshipIcon]]],
  ['Software engineering', [['React', ReactIcon], ['Next.js', CodeCircleIcon], ['Node.js', ServerIcon], ['Tailwind CSS', TailwindcssIcon], ['FastAPI', ApiGatewayIcon], ['Dash', ChartLineIcon], ['Pydantic', FileValidationIcon], ['pytest', CheckmarkSquare04Icon], ['REST & GraphQL APIs', ApiGatewayIcon], ['browser extensions', BrowserIcon], ['CLI tooling', TerminalIcon], ['CI/CD', GitPullRequestIcon], ['Celery & Redis', ServerCogIcon]]],
  ['AI & agents', [['MCP tools', ApiGatewayIcon], ['governed agent workflows', WorkflowIcon], ['agent evaluations', CheckmarkSquare04Icon], ['Anthropic & OpenAI-compatible models', BrainIcon], ['Ollama local models', BrainIcon], ['RAG & embeddings', DatabaseSearchIcon], ['semantic search', DatabaseSearchIcon], ['skills, agents & subagents', TerminalIcon]]],
  ['Scientific computing', [['molecular docking', MicroscopeIcon], ['molecular dynamics', WorkflowIcon], ['CUDA', CpuIcon], ['GROMACS', ZapIcon], ['HPC workflows', CpuIcon]]],
  ['Quality & validation', [['GxP qualification', CheckmarkCircle04Icon], ['GAMP 5', CheckmarkCircle04Icon], ['21 CFR Part 11', FileValidationIcon], ['SDLC & ADLC authoring', FileValidationIcon], ['URS/FDS & test scripts', FileValidationIcon], ['validation & data integrity risk assessments', CheckmarkSquare04Icon], ['data integrity, deviations & CAPA', FileValidationIcon]]],
  ['Platforms & infrastructure', [['GitHub Enterprise', GithubIcon], ['GitHub Actions', GithubIcon], ['Docker', ServerIcon], ['Docker Compose', ServerIcon], ['Linux', ComputerCheckIcon], ['Caddy/Nginx', ServerCogIcon], ['S3/object storage', CloudIcon], ['OpenTelemetry', ChartLineIcon], ['Grafana', ChartLineIcon], ['Prometheus', ChartLineIcon], ['Loki', ChartLineIcon], ['Alloy', WorkflowIcon]]],
  ['Developer workflows', [['terminal tooling', TerminalIcon], ['release automation', GitPullRequestIcon], ['MDX/Fumadocs', CodeFolderIcon], ['Phlo', GitForkIcon], ['Stencil', CodeFolderIcon], ['PDFRag', GitGraphIcon], ['Cairn', GitBranchIcon], ['pymdx', CodeXmlIcon], ['OpenDiscovery', MicroscopeIcon]]],
]

function MiniMark({ code, calendar }: { code?: string, calendar?: string }) {
  if (calendar) return <span className="date-token" aria-label={calendar}><b>{calendar.slice(0, 3)}</b><em>{calendar.slice(3)}</em></span>
  return <span className="mini-preview project-mark">{code}</span>
}

function Home() {
  return <>
    <div className="home-intro">
      <div className="identity"><div className="identity-main"><img src="/avatar.jpg" alt="Gareth Price" className="avatar" /><div><h1>Gareth Price</h1><span>biology · automation/robotics · data engineering · software engineering</span></div></div><div className="identity-actions"><Socials /><ThemeToggle /></div></div>
      <div className="intro-copy">
        <p>I’m a Principal Scientist at <a className="inline-link" href="https://www.oxb.com" target="_blank" rel="noreferrer">Oxford Biomedica</a>, where I build laboratory automation, analytical data products and the digital infrastructure around them for cell and gene therapy.</p>
        <p>I’ve been programming for over 25 years, starting as a freelance web developer building websites for clients under the name Rhinoe Development.</p>
        <p>I’m currently exploring data engineering by building <a className="inline-link" href="https://github.com/phlohouse/phlo" target="_blank" rel="noreferrer">Phlo</a>, an open-source framework for building and operating data lakehouses. I use agentic coding workflows extensively in its development.</p>
        <p>Before that, I researched cell communication in diabetic kidney disease. I have seven peer-reviewed publications and continue to contribute to <a className="inline-link" href="https://www.diabetes.org.uk" target="_blank" rel="noreferrer">Diabetes UK</a> as a Grants Advisory Panel member.</p>
      </div>
    </div>

    {/* <GitHubActivity /> */}

    <section className="home-section"><div className="section-heading"><h2>Experience</h2></div><div className="experience-list">{experience.map((item) => <article className="experience-item" key={item.role}><div className="experience-top"><div><h3>{item.organisation}</h3><p>{item.role}</p></div><time>{item.date}</time></div><p className="experience-summary">{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article>)}</div></section>

    <section className="home-section"><div className="section-heading"><h2>Skills</h2></div><div className="skills-list">{skills.map(([category, items]) => <div className="skills-row" key={category}><h3>{category}</h3><div>{items.map(([label, icon]) => <span className="skill" key={label}><HugeiconsIcon icon={icon} size={15} strokeWidth={1.9} aria-hidden="true" />{label}</span>)}</div></div>)}</div></section>

    <section className="home-section"><h2>Writing</h2><div className="list"><Link className="list-row" to="/blog/hello-world"><MiniMark calendar="Mar26" /><span className="row-text"><span className="row-title">Hello, world</span><span className="badge">New</span><span className="row-detail">March 2026</span></span></Link></div></section>
  </>
}
