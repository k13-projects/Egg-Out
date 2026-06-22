"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { onOpenModal, type ModalName } from "./modalBus";

/* Shared shell: backdrop + centred panel, escape-to-close, scroll lock. */
function Shell({
  title,
  kicker,
  onClose,
  children,
}: {
  title: string;
  kicker: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="absolute inset-0 bg-grill/55 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-[2rem] bg-offwhite p-8 text-grill shadow-2xl sm:rounded-[2rem] sm:p-10"
        initial={{ y: 40, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 30, scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-grill/5 text-xl leading-none text-grill/60 transition-colors hover:bg-grill/10 hover:text-grill"
        >
          ×
        </button>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-farmer">
          {kicker}
        </p>
        <h3 className="text-3xl font-light leading-tight tracking-tight">
          {title}
        </h3>
        <div className="mt-7">{children}</div>
      </motion.div>
    </motion.div>
  );
}

/* "Order online" — the brief lists its options as "TO CONFIRM", so this
   presents the likely channels and flags clearly that they are unconfirmed. */
function OrderBody() {
  const channels = [
    { label: "Order for pickup", note: "In-store / online · TBC" },
    { label: "DoorDash", note: "Delivery partner · TBC" },
    { label: "Uber Eats", note: "Delivery partner · TBC" },
  ];
  return (
    <div>
      <p className="text-base leading-relaxed text-grill/70">
        Pick how you want your eggs. Ordering channels are still being set up;
        these are placeholders until the brief confirms them.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {channels.map((c) => (
          <button
            key={c.label}
            type="button"
            className="flex items-center justify-between rounded-2xl bg-grill px-6 py-4 text-left text-offwhite transition-transform duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span className="text-lg font-bold">{c.label}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-offwhite/50">
              {c.note}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-5 text-sm text-grill/40">
        Ordering options to be confirmed.
      </p>
    </div>
  );
}

const FIELD =
  "w-full rounded-xl border-0 bg-grill/5 px-4 py-3 text-base text-grill outline-none ring-1 ring-transparent transition placeholder:text-grill/35 focus:bg-grill/[0.07] focus:ring-farmer";

/* "Order catering" — the full custom-order form from the brief. No backend
   yet, so submit composes an email (address TBC). */
function CateringBody({ onClose }: { onClose: () => void }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email")}`,
      `Number of people: ${f.get("people")}`,
      `Date: ${f.get("date")}`,
      `Time: ${f.get("time")}`,
      `Occasion: ${f.get("occasion")}`,
      `Service: ${f.get("service")}`,
      "",
      `${f.get("description")}`,
    ].join("\n");
    // Destination address is to be confirmed.
    window.location.href = `mailto:hello@eggandout.com?subject=${encodeURIComponent(
      "Catering custom order"
    )}&body=${encodeURIComponent(body)}`;
    onClose();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <p className="-mt-2 mb-1 text-sm font-medium uppercase tracking-[0.2em] text-grill/50">
        Email us for any custom orders
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className={FIELD} />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          className={FIELD}
        />
      </div>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className={FIELD}
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <input
          name="people"
          type="number"
          min={1}
          required
          placeholder="People"
          aria-label="Number of people"
          className={FIELD}
        />
        <input
          name="date"
          type="date"
          required
          aria-label="Date"
          className={FIELD}
        />
        <input
          name="time"
          type="time"
          required
          aria-label="Time"
          className={FIELD}
        />
      </div>
      <select name="occasion" required defaultValue="" className={FIELD}>
        <option value="" disabled>
          Select occasion
        </option>
        <option>Team morning</option>
        <option>Beach gathering</option>
        <option>Family celebration</option>
        <option>Corporate event</option>
        <option>Other</option>
      </select>
      <select name="service" required defaultValue="" className={FIELD}>
        <option value="" disabled>
          Catering type
        </option>
        <option>Pickup</option>
        <option>Delivery</option>
      </select>
      <textarea
        name="description"
        rows={3}
        placeholder="Description / requests"
        className={FIELD}
      />
      <button
        type="submit"
        className="mt-2 rounded-full bg-farmer px-7 py-3.5 text-base font-bold text-offwhite transition-transform duration-300 hover:scale-[1.02] active:scale-95"
      >
        Send catering request
      </button>
      <p className="text-center text-xs text-grill/40">
        Contact email to be confirmed.
      </p>
    </form>
  );
}

export default function Modals() {
  const [open, setOpen] = useState<ModalName | null>(null);

  useEffect(() => onOpenModal(setOpen), []);

  const close = () => setOpen(null);

  return (
    <AnimatePresence>
      {open === "order" && (
        <Shell key="order" kicker="Order online" title="Order your eggs" onClose={close}>
          <OrderBody />
        </Shell>
      )}
      {open === "catering" && (
        <Shell
          key="catering"
          kicker="Catering"
          title="Bring the eggs to the party"
          onClose={close}
        >
          <CateringBody onClose={close} />
        </Shell>
      )}
    </AnimatePresence>
  );
}
