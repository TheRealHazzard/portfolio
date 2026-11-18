import { photoCredits, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <div className="foot-ask">
          <p className="foot-line">
            Let&rsquo;s build
            <br />
            something fast.
          </p>
          <a className="btn btn-inverse" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
        <nav aria-label="Elsewhere" className="foot-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>

      <div className="foot-credits">
        <p>
          Photographs from open collections:{" "}
          {photoCredits.map((c, i) => (
            <span key={c.name}>
              <a href={c.page} target="_blank" rel="noopener noreferrer">
                {c.name}
              </a>{" "}
              by {c.by} ({c.license}){i < photoCredits.length - 1 ? "; " : "."}
            </span>
          ))}
        </p>
        <p>&copy; 2026 Robin Thomas</p>
      </div>

      <p className="foot-mark" aria-hidden="true">
        Robin
      </p>
    </footer>
  );
}
