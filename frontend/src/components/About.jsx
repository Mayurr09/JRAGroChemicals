import { Award, FlaskConical, HeartHandshake, Leaf, ShieldCheck, Compass, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";

const VALUE_ICONS = [ShieldCheck, FlaskConical, HeartHandshake, Leaf, Award];

const IMGS = {
  sprout:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHxfenR8ZW58MHx8fDE3OTA2NjY0OTR8MA&ixlib=rb-4.1.0&q=85",
  lab: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxhZ3JpY3VsdHVyZSUyMGxhYm9yYXRvcnl8ZW58MHx8fDE3OTA2NjY0OTR8MA&ixlib=rb-4.1.0&q=85",
};

export default function About() {
  const { t } = useLanguage();
  const values = t("about.values");

  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF8F3] py-24 sm:py-32">
      <SectionLang />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>{t("about.label")}</Eyebrow>
              <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight text-[#0A2F24]">
                <MaskedLine text={t("about.title")} />
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-stone-700">{t("about.p1")}</p>
              <p className="mt-4 text-base leading-relaxed text-stone-700">{t("about.p2")}</p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="h-full rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-sm">
                  <Target size={22} className="text-[#C59B27]" />
                  <h3 className="mt-3 text-lg font-semibold text-[#0A2F24]">{t("about.missionTitle")}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{t("about.mission")}</p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="h-full rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-sm">
                  <Compass size={22} className="text-[#C59B27]" />
                  <h3 className="mt-3 text-lg font-semibold text-[#0A2F24]">{t("about.visionTitle")}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{t("about.vision")}</p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl rounded-tr-[64px] border-4 border-white shadow-xl shadow-emerald-900/15">
                <img src={IMGS.sprout} alt="Young plant sprouting from healthy soil" loading="lazy" className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="mt-12 overflow-hidden rounded-3xl rounded-bl-[64px] border-4 border-white shadow-xl shadow-emerald-900/15">
                <img src={IMGS.lab} alt="Agricultural laboratory quality testing" loading="lazy" className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-[#0A2F24] px-6 py-4 text-center shadow-2xl">
              <p className="font-display text-lg font-semibold text-[#C59B27]">Sangli · Maharashtra · India</p>
              <p className="text-xs text-emerald-100/70">{t("footer.desc").split("—")[0]}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-center text-xl sm:text-2xl font-semibold text-[#0A2F24]">{t("about.valuesTitle")}</h3>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl border border-emerald-900/10 bg-white/80 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C59B27]/50 hover:shadow-xl hover:shadow-emerald-900/10">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2F24] text-[#C59B27] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <h4 className="mt-4 font-semibold text-[#0A2F24]">{v.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
