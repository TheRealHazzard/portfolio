import { asset } from "@/lib/site";
import { more } from "@/lib/data";

/** Three more apps as large tiles. Each opens its code. */
export default function More() {
  return (
    <section id="more" aria-labelledby="more-title" className="more">
      <h2 id="more-title" data-reveal="0">
        Also built
      </h2>
      <div className="more-grid">
        {more.map((m, i) => (
          <a key={m.id} className="more-tile" href={m.code} target="_blank" rel="noopener noreferrer" data-reveal={String(i + 1)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(m.image)} width={1400} height={900} alt={`${m.name}, running`} loading="lazy" />
            <span className="more-name">{m.name}</span>
            <span className="more-text">{m.text}</span>
            <span className="more-go">Read the code</span>
          </a>
        ))}
      </div>
    </section>
  );
}
