import { useState } from "react";
import { toast } from "sonner";
import { Send, MessageCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/data/products";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";
import SectionLang from "@/components/SectionLang";
import { waLink, mailLink } from "@/config/site";

const EMPTY = { name: "", phone: "", email: "", state: "", district: "", city: "", product: "", message: "" };

export default function Enquiry() {
  const { t } = useLanguage();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (form.name.trim().length < 2) errs.name = t("enquiry.errName");
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").replace(/^91/, ""))) errs.phone = t("enquiry.errPhone");
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t("enquiry.errEmail");
    if (form.message.trim().length < 3) errs.message = t("enquiry.errMessage");
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setBusy(true);
    const location = [form.city, form.district, form.state].filter(Boolean).join(", ");
    const subject = form.product
      ? `Product Enquiry: ${form.product} — ${form.name}`
      : `Website Enquiry — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      location ? `Location: ${location}` : null,
      form.product ? `Product Interested In: ${form.product}` : null,
      "",
      form.message,
      "",
      "— Sent from the JR Agro Chemicals website",
    ].filter((l) => l !== null).join("\n");
    window.location.href = mailLink(subject, body);
    toast.success(t("enquiry.mailSuccess"));
    setForm(EMPTY);
    setErrors({});
    setBusy(false);
  };

  const inputCls = (k) =>
    `w-full rounded-xl border bg-white/80 px-4 py-3 text-sm text-emerald-950 outline-none transition-shadow focus:shadow-md focus:shadow-emerald-900/10 ${
      errors[k] ? "border-red-400" : "border-emerald-900/15 focus:border-[#1E6B4A]"
    }`;

  const waText = form.product
    ? `Hello JR Agro Chemicals, I would like to know more about ${form.product}.`
    : t("enquiry.waMessage");

  return (
    <section id="enquiry" className="relative bg-[#0A2F24] py-24 sm:py-32">
      <SectionLang light />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C59B27 0, transparent 45%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow light>{t("enquiry.label")}</Eyebrow>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#FAF8F3]">
            <MaskedLine text={t("enquiry.title")} />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-emerald-100/70">{t("enquiry.sub")}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form data-testid="enquiry-form" onSubmit={submit} noValidate className="mx-auto mt-12 max-w-3xl rounded-3xl border border-emerald-100/10 bg-white/[0.05] p-6 backdrop-blur-md sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input data-testid="enquiry-form-name-input" value={form.name} onChange={set("name")} placeholder={t("enquiry.namePh")} aria-label={t("enquiry.name")} className={inputCls("name")} />
                {errors.name && <p data-testid="enquiry-error-name" className="mt-1 text-xs text-red-300">{errors.name}</p>}
              </div>
              <div>
                <input data-testid="enquiry-form-phone-input" value={form.phone} onChange={set("phone")} placeholder={t("enquiry.phonePh")} aria-label={t("enquiry.phone")} inputMode="tel" className={inputCls("phone")} />
                {errors.phone && <p data-testid="enquiry-error-phone" className="mt-1 text-xs text-red-300">{errors.phone}</p>}
              </div>
              <div>
                <input data-testid="enquiry-form-email-input" value={form.email} onChange={set("email")} placeholder={t("enquiry.emailPh")} aria-label={t("enquiry.email")} type="email" className={inputCls("email")} />
                {errors.email && <p data-testid="enquiry-error-email" className="mt-1 text-xs text-red-300">{errors.email}</p>}
              </div>
              <input data-testid="enquiry-form-state-input" value={form.state} onChange={set("state")} placeholder={t("enquiry.statePh")} aria-label={t("enquiry.state")} className={inputCls("state")} />
              <input data-testid="enquiry-form-district-input" value={form.district} onChange={set("district")} placeholder={t("enquiry.districtPh")} aria-label={t("enquiry.district")} className={inputCls("district")} />
              <input data-testid="enquiry-form-city-input" value={form.city} onChange={set("city")} placeholder={t("enquiry.cityPh")} aria-label={t("enquiry.city")} className={inputCls("city")} />
              <div className="sm:col-span-2">
                <select data-testid="enquiry-form-crop-select" value={form.product} onChange={set("product")} aria-label={t("enquiry.product")} className={inputCls("product")}>
                  <option value="">{t("enquiry.productPh")}</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <textarea data-testid="enquiry-form-message-input" value={form.message} onChange={set("message")} placeholder={t("enquiry.messagePh")} aria-label={t("enquiry.message")} rows={4} className={`${inputCls("message")} resize-none`} />
                {errors.message && <p data-testid="enquiry-error-message" className="mt-1 text-xs text-red-300">{errors.message}</p>}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                data-testid="enquiry-form-submit-button"
                type="submit"
                disabled={busy}
                className="inline-flex items-center gap-2 rounded-full bg-[#C59B27] px-8 py-3.5 text-sm font-bold text-[#0A2F24] transition-all hover:bg-[#D4AF37] disabled:opacity-60"
              >
                {busy ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {busy ? t("enquiry.submitting") : t("enquiry.submit")}
              </button>
              <a
                data-testid="enquiry-whatsapp-button"
                href={waLink(waText)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 px-6 py-3.5 text-sm font-semibold text-[#4ade80] transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle size={16} /> {t("enquiry.whatsapp")}
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
