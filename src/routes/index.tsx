import { createFileRoute } from '@tanstack/react-router'
import { Socials } from '@/components/Socials'

export const Route = createFileRoute('/')(  {
  head: () => ({
    meta: [{ title: 'Gareth Price' }],
  }),
  component: Home,
})

function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-top">
          <div className="hero-text">
            <p>
              <strong>Gareth Price</strong> is a scientist and software engineer.
            </p>
            <p>
              I'm a Principal Scientist at{' '}
              <strong><a href="https://www.oxb.com" target="_blank" rel="noopener noreferrer">Oxford Biomedica</a></strong>,
              where I build lab automation, data pipelines, and digital infrastructure for gene therapy manufacturing.
            </p>
            <p>
              My postdoctoral research was in diabetic kidney disease — I have 7 peer-reviewed publications and still review
              grants for <strong><a href="https://www.diabetes.org.uk" target="_blank" rel="noopener noreferrer">Diabetes UK</a></strong>.
              In my spare time I build open-source data tools and iOS apps.
            </p>
            <Socials />
          </div>
          <img src="/avatar.jpg" alt="Gareth Price" className="avatar" />
        </div>
      </div>

      <section>
        <h2>work</h2>
        <div className="item-list">
          <a className="item" href="https://www.oxb.com" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#1a2744' }}>OXB</div>
            <div className="item-body">
              <div className="item-title">Oxford Biomedica</div>
              <div className="item-sub">Principal Scientist, Innovation</div>
            </div>
            <span className="item-meta">2021 – Now</span>
          </a>
          <a className="item" href="https://www.lincoln.ac.uk" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#006747' }}>UoL</div>
            <div className="item-body">
              <div className="item-title">University of Lincoln</div>
              <div className="item-sub">Diabetes UK Post-Doctoral Research Fellow</div>
            </div>
            <span className="item-meta">2017 – 2021</span>
          </a>
          <a className="item" href="https://warwick.ac.uk" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#5f2167' }}>UoW</div>
            <div className="item-body">
              <div className="item-title">University of Warwick</div>
              <div className="item-sub">PhD &amp; MSc — Biology, Mathematical Biology</div>
            </div>
            <span className="item-meta">2012 – 2017</span>
          </a>
        </div>
      </section>

      <section>
        <h2>projects</h2>
        <div className="item-list">
          <a className="item" href="https://github.com/phlohouse/phlo" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#2563eb' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M12 3v6m0 0l-4 4m4-4l4 4m-8 4h8m-10 0a2 2 0 002 2h8a2 2 0 002-2"/></svg>
            </div>
            <div className="item-body">
              <div className="item-title">Phlo</div>
              <div className="item-sub">Modern data lakehouse platform — Dagster, DLT, Iceberg, dbt</div>
            </div>
            <span className="tag">Python</span>
          </a>
          <a className="item" href="#">
            <div className="item-icon" style={{ background: '#f97316' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4m0 4a4 4 0 110 8 4 4 0 010-8z"/><path d="M12 16v4"/><path d="M8 12H4m16 0h-4"/></svg>
            </div>
            <div className="item-body">
              <div className="item-title">GlucOS</div>
              <div className="item-sub">Glucose monitoring iOS app — SwiftUI, HealthKit, Go backend</div>
            </div>
            <span className="tag">iOS</span>
          </a>
          <a className="item" href="https://github.com/iamgp/pdfrag" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#0891b2' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><circle cx="11" cy="15" r="3"/><path d="M13.5 17.5L16 20"/></svg>
            </div>
            <div className="item-body">
              <div className="item-title">pdfrag</div>
              <div className="item-sub">Local-first PDF &amp; Markdown indexing with semantic search</div>
            </div>
            <span className="tag">Go</span>
          </a>
          <a className="item" href="https://github.com/iamgp/helm" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#6366f1' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v4m0 10v4M3 12h4m10 0h4"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <div className="item-body">
              <div className="item-title">Helm</div>
              <div className="item-sub">Local project dashboard that discovers and tracks all your git repos</div>
            </div>
            <span className="tag">Go</span>
          </a>
          <a className="item" href="https://github.com/iamgp/cairn" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#059669' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 18h8M7 14h10M9 10h6M10 6h4"/></svg>
            </div>
            <div className="item-body">
              <div className="item-title">Cairn</div>
              <div className="item-sub">GitHub Action that turns CI outputs into historical reports</div>
            </div>
            <span className="tag">Go</span>
          </a>
          <a className="item" href="https://github.com/phlohouse/stencil" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#d946ef' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>
            </div>
            <div className="item-body">
              <div className="item-title">Stencil</div>
              <div className="item-sub">Lay a template over a spreadsheet, extract structured data</div>
            </div>
            <span className="tag">TS / Python</span>
          </a>
          <a className="item" href="https://github.com/iamgp/OpenDiscovery" target="_blank" rel="noopener noreferrer">
            <div className="item-icon" style={{ background: '#dc2626' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="10" r="3"/><circle cx="16" cy="10" r="3"/><path d="M11 10h2"/><path d="M8 13v3a2 2 0 002 2h4a2 2 0 002-2v-3"/></svg>
            </div>
            <div className="item-body">
              <div className="item-title">OpenDiscovery</div>
              <div className="item-sub">Open-source computational drug discovery — J. Chem. Educ.</div>
            </div>
            <span className="tag">Python</span>
          </a>
        </div>
      </section>

      <section>
        <h2>selected publications</h2>
        <div className="pub-list">
          <div className="pub">Roger, E. <em>et al.</em> incl. <span className="me">Price, G. W.</span> — Connexin-43 hemichannels orchestrate NLRP3 inflammasome activation in tubular injury. <em>Cell Commun. Signal.</em> (2023)</div>
          <div className="pub"><span className="me">Price, G. W.</span> <em>et al.</em> — Blocking Connexin-43 mediated hemichannel activity protects against early tubular injury in CKD. <em>Cell Sig. &amp; Comms</em> (2020)</div>
          <div className="pub"><span className="me">Price, G. W.</span> <em>et al.</em> — Connexin-mediated cell communication in the kidney: a potential therapeutic target for DKD. <em>Exp. Physiol.</em> (2019)</div>
          <div className="pub">Hills, C. E. &amp; <span className="me">Price, G. W.</span> — TGF-β1 drives a switch in connexin mediated cell-to-cell communication in the diabetic kidney. <em>Cell Physiol. Biochem.</em> (2018)</div>
          <div className="pub"><span className="me">Price, G. W.</span>, Gould, P. S. &amp; Marsh, A. — Use of freely available tools for in silico screening. <em>J. Chem. Educ.</em> (2014)</div>
        </div>
      </section>

      <section>
        <h2>advisory</h2>
        <p className="text-block">
          Member of the <strong>Diabetes UK Grants Advisory Panel</strong> (2023 – present). I review and score research
          grant applications and participate in RD Lawrence Fellowship interview panels.
        </p>
      </section>
    </>
  )
}
