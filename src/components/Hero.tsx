import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative border-b-4 border-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <h1 className="text-[15vw] font-black uppercase leading-[0.85] tracking-tight sm:text-[9rem] md:text-[10rem]">
            Robin
            <br />
            Thomas
          </h1>
        </div>

        <div className="mt-10 flex flex-wrap items-start gap-6 sm:mt-16">
          <div className="border-2 border-ink bg-yellow px-4 py-2 font-mono text-sm font-bold uppercase text-black">
            {profile.role}
          </div>
          <p className="max-w-lg text-lg leading-relaxed">{profile.blurb}</p>
        </div>
      </div>
    </section>
  );
}
