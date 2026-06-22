/**
 * Tiny client-side event bus so server components (Menu, Catering) can keep
 * shipping plain buttons that open the global modals, without each section
 * needing its own React state. ModalTrigger dispatches; Modals subscribes.
 */
export type ModalName = "order" | "catering";

const bus = new EventTarget();

export function openModal(name: ModalName) {
  bus.dispatchEvent(new CustomEvent("eo:open-modal", { detail: name }));
}

export function onOpenModal(cb: (name: ModalName) => void) {
  const handler = (e: Event) => cb((e as CustomEvent<ModalName>).detail);
  bus.addEventListener("eo:open-modal", handler);
  return () => bus.removeEventListener("eo:open-modal", handler);
}
