import { asset } from "@/lib/site";
import { backstage } from "@/lib/data";

/**
 * One word stays pinned while four pictures pass behind it. Plain position: sticky.
 * The pictures are found, openly licensed photographs of the world around the work,
 * credited under each one; none of them is presented as Robin's own.
 */
export default function Backstage() {
  return (
    <section id="backstage" aria-labelledby="backstage-title" className="bs" style={{ ["--n" as string]: backstage.length }}>
      <div className="bs-title">
        <h2 id="backstage-title">Backstage</h2>
      </div>
      <div className="bs-list">
        {backstage.map((b, i) => (
          <figure key={b.id} className={`bs-item ${i % 2 ? "right" : "left"}`} data-reveal="0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(b.image)} width={1400} height={1050} alt="" loading="lazy" />
            <figcaption>
              <strong>{b.title}</strong>
              <span>{b.text}</span>
              <small>{b.credit}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
