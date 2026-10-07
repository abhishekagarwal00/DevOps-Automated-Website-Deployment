import { useState } from "react";

export const STAGES = [
  { id: "push", title: "Push", icon: "⬆️", text: "Developer pushes code to the main branch on GitHub." },
  { id: "trigger", title: "Trigger", icon: "⚡", text: "GitHub Actions detects the push and starts the workflow automatically." },
  { id: "test", title: "Test", icon: "🧪", text: "Automated tests run. If any test fails, the pipeline stops here." },
  { id: "build", title: "Build", icon: "🏗️", text: "Source code is compiled into optimised production files (npm run build)." },
  { id: "deploy", title: "Deploy", icon: "🚀", text: "The new build replaces the live website within seconds." },
];

export default function App() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">60-Day Industrial Training · Helloo my name is abhishek</p>
        <h1>DevOps Based Automated Website Deployment</h1>
        <p className="sub">
          Every push to <code>main</code> is tested, built and deployed by GitHub Actions — no manual steps.
        </p>
      </header>

      <section aria-label="Pipeline stages">
        <h2>The CI/CD Pipeline</h2>
        <ol className="pipeline">
          {STAGES.map((s, i) => (
            <li key={s.id}>
              <button
                className={i === active ? "stage active" : "stage"}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
              >
                <span className="icon">{s.icon}</span>
                <span className="name">{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="detail" data-testid="stage-detail">
          <h3>
            Step {active + 1}: {stage.title}
          </h3>
          <p>{stage.text}</p>
        </div>
      </section>

      <section className="status" aria-label="Deployment status">
        <h2>Deployment Info</h2>
        <p className="live-note">
          This page was built and deployed by the pipeline. These values change on every release.
        </p>
        <dl>
          <div>
            <dt>Commit</dt>
            <dd data-testid="commit">{__COMMIT_SHA__}</dd>
          </div>
          <div>
            <dt>Built at (UTC)</dt>
            <dd data-testid="build-time">{__BUILD_TIME__}</dd>
          </div>
          <div>
            <dt>Deployed by</dt>
            <dd>GitHub Actions</dd>
          </div>
        </dl>
      </section>

      <footer>
        <p>React · Vite · GitHub Actions · GitHub Pages</p>
      </footer>
    </main>
  );
}
