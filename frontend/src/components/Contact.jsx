import { MapPin, Phone, MessageCircle, Mail, Clock, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";
import { SITE, waLink } from "@/config/site";

export default function Contact() {
  const { t } = useLanguage();

  const cards = [
    { icon: MapPin, label: t("contact.addressLabel"), content: <span>{SITE.address}</span>, testid: "contact-address" },
    {
      icon: Phone, label: t("contact.phoneLabel"), testid: "contact-phone",
      content: (
        <span className="flex flex-col gap-1">
          {SITE.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, "")}`} data-testid={`contact-tel-${p.replace(/\D/g, "")}`} className="hover:text-[#1E6B4A]">{p}</a>
          ))}
        </span>
      ),
    },
    {
      icon: MessageCircle, label: t("contact.whatsappLabel"), testid: "contact-whatsapp",
      content: <a href={waLink(t("enquiry.waMessage"))} target="_blank" rel="noreferrer" data-testid="contact-whatsapp-link" className="hover:text-[#1E6B4A]">{SITE.whatsappDisplay}</a>,
    },
    {
      icon: Mail, label: t("contact.emailLabel"), testid: "contact-email",
      content: (
        <span className="flex flex-col gap-1">
          <a href={`mailto:${SITE.emailGeneral}`} data-testid="contact-email-general" className="hover:text-[#1E6B4A]">{SITE.emailGeneral}</a>
          <a href={`mailto:${SITE.emailSales}`} data-testid="contact-email-sales" className="hover:text-[#1E6B4A]">{SITE.emailSales} <span className="text-xs text-stone-400">({t("contact.salesEmailLabel")})</span></a>
        </span>
      ),
    },
    { icon: Clock, label: t("contact.hoursLabel"), content: <span>{t("contact.hours")}</span>, testid: "contact-hours" },
    { icon: Users, label: t("contact.contactPersons"), content: <span>{SITE.contacts.join(" · ")}</span>, testid: "contact-persons" },
  ];

  return (
    <section id="contact" className="relative bg-[#FFFFFF] py-24 sm:py-32">
      <SectionLang />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>{t("contact.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0A2F24]">
            <MaskedLine text={t("contact.title")} />
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div data-testid={c.testid} className="h-full rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-sm">
                  <c.icon size={20} className="text-[#F5B301]" />
                  <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#1E6B4A]">{c.label}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-stone-700">{c.content}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl border border-emerald-900/10 shadow-lg shadow-emerald-900/10">
              <iframe
                data-testid="contact-map"
                title="JR Agro Chemicals location — Sangli"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
                className="h-full min-h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
