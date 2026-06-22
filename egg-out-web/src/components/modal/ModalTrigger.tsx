"use client";

import type { ReactNode } from "react";
import { openModal, type ModalName } from "./modalBus";

/**
 * Styled button that opens one of the global modals. Lets otherwise-static
 * server sections (Menu, Catering) trigger the Order / Catering pop-ups
 * without becoming client components themselves.
 */
export default function ModalTrigger({
  modal,
  className,
  children,
}: {
  modal: ModalName;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" onClick={() => openModal(modal)} className={className}>
      {children}
    </button>
  );
}
