import { plates } from "@/lib/data";
import { ConfigFigure, HistoryFigure, MfeFigure, SpeedFigure } from "./Figures";

const figures = { config: ConfigFigure, mfe: MfeFigure, speed: SpeedFigure, history: HistoryFigure } as const;

/**
 * Four plates, each a full screen that slides over the last. The figure fills the top half,
 * one row sits at exactly the midline on every plate, and the story runs beneath it.
 */
export default function Plates() {
  return (
    <section id="work" aria-labelledby="work-title" className="plates">
      <h2 id="work-title" className="sr">
        Work at Tekion
      </h2>
      {plates.map((p) => {
        const Figure = figures[p.id];
        return (
          <article key={p.id} className="plate" data-reveal-group>
            <div className="plate-fig" data-reveal="0">
              <Figure />
            </div>
            <div className="plate-row">
              <span>Tekion</span>
              <h3>{p.title}</h3>
              <span>{p.fact}</span>
            </div>
            <p className="plate-text" data-reveal="1">
              {p.text}
            </p>
            <p className="plate-stat" data-reveal="2">
              <strong>{p.stat}</strong>
              <span>{p.statLabel}</span>
            </p>
          </article>
        );
      })}
    </section>
  );
}
