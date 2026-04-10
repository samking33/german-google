import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { getContactSubmissionMarker, hasTrackedContactSubmission, markContactSubmissionTracked } from "../lib/contactSubmission";

type DataLayerEvent = Record<string, unknown> | unknown[];

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export default function ContactThankYouPage() {
  const submissionMarker = getContactSubmissionMarker();

  useEffect(() => {
    if (!submissionMarker) {
      return;
    }

    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    if (!hasTrackedContactSubmission(submissionMarker.id)) {
      window.dataLayer.push({
        event: "form_enquiry_submitted",
        enquirySubmissionId: submissionMarker.id,
        enquirySubmittedAt: submissionMarker.submittedAt,
        enquiryDestination: "google_forms",
        enquiryThankYouPage: "/kontakt/danke",
      });

      markContactSubmissionTracked(submissionMarker.id);
    }
  }, [submissionMarker]);

  if (!submissionMarker) {
    return <Navigate to="/kontakt" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-[calc(100vh-8rem)] bg-[#050505] px-8 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2.25rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,_rgba(0,196,179,0.16),_transparent_32%),linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.02))] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-brand-teal/30 bg-brand-teal/10">
            <CheckCircle2 size={30} className="text-brand-teal" />
          </div>

          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-brand-teal">Anfrage gesendet</p>
          <h1 className="font-serif text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">
            Vielen Dank.
            <span className="mt-2 block italic font-normal text-white/30">Wir melden uns schnell bei Ihnen.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/65">
            Ihre Anfrage wurde erfolgreich uebermittelt. Unser Team prueft Ihre Nachricht und meldet sich in der Regel
            innerhalb von 24 Stunden bei Ihnen zurueck.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-dark transition-colors hover:bg-brand-teal"
            >
              Zur Startseite
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:border-brand-teal/40 hover:text-brand-teal"
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
