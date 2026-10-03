import { useRef, type RefObject } from "react";

/** Returns true immediately - scroll animations disabled */
export function useInView<T extends HTMLElement>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  return [ref, true];
}
