import { asset } from "@/lib/site";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="contact-photo"
        src={asset("/img/vidhana.webp")}
        width={1920}
        height={1196}
        alt="Vidhana Soudha, the golden government building in Bengaluru, under a dramatic sky"
        loading="lazy"
      />
      <div className="contact-card" data-reveal="1">
        <h2 id="contact-title">Say hello</h2>
        <dl>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                robin-thomas-rj1447
              </a>
            </dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                TheRealHazzard
              </a>
            </dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{profile.place}</dd>
          </div>
        </dl>
        <a className="btn btn-block" href={`mailto:${profile.email}?subject=Hello%20Robin`}>
          Email Robin
        </a>
      </div>
    </section>
  );
}
