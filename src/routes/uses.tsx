import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/uses')({
  head: () => ({
    meta: [{ title: 'Uses — Gareth Price' }],
  }),
  component: Uses,
})

function Uses() {
  return (
    <>
      <section style={{ marginTop: 0 }}>
        <h2>hardware</h2>
        <div className="uses-category">
          <div className="uses-item">
            <span className="uses-name">MacBook Pro</span>
            <span className="uses-note">M2, daily driver</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Apple Studio Display</span>
            <span className="uses-note">5K, at home</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">iPhone 15 Pro</span>
            <span className="uses-note">testing GlucOS</span>
          </div>
        </div>
      </section>

      <section>
        <h2>editor & terminal</h2>
        <div className="uses-category">
          <div className="uses-item">
            <span className="uses-name">Cursor</span>
            <span className="uses-note">primary editor</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Ghostty</span>
            <span className="uses-note">terminal</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Amp</span>
            <span className="uses-note">AI coding agent</span>
          </div>
        </div>
      </section>

      <section>
        <h2>languages</h2>
        <div className="uses-category">
          <div className="uses-item">
            <span className="uses-name">Python</span>
            <span className="uses-note">data pipelines, lab automation, analytics</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Go</span>
            <span className="uses-note">CLIs, backend services</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Swift / SwiftUI</span>
            <span className="uses-note">iOS apps</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">TypeScript</span>
            <span className="uses-note">web projects</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">HSL</span>
            <span className="uses-note">Hamilton liquid handler programming</span>
          </div>
        </div>
      </section>

      <section>
        <h2>data & infrastructure</h2>
        <div className="uses-category">
          <div className="uses-item">
            <span className="uses-name">Dagster</span>
            <span className="uses-note">workflow orchestration</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">DuckDB</span>
            <span className="uses-note">local analytics</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Apache Iceberg + Nessie</span>
            <span className="uses-note">lakehouse layer</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">dbt</span>
            <span className="uses-note">data transformations</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">GitHub Enterprise</span>
            <span className="uses-note">~100 repos, admin</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Docker</span>
            <span className="uses-note">containers</span>
          </div>
        </div>
      </section>

      <section>
        <h2>lab</h2>
        <div className="uses-category">
          <div className="uses-item">
            <span className="uses-name">Hamilton STARlet</span>
            <span className="uses-note">liquid handling</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Hamilton CECULA</span>
            <span className="uses-note">cell culture robot</span>
          </div>
          <div className="uses-item">
            <span className="uses-name">Ella</span>
            <span className="uses-note">immunoassay platform</span>
          </div>
        </div>
      </section>
    </>
  )
}
