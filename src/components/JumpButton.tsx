"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};
const isMac = () => /Mac|iPhone|iPad/.test(navigator.platform);

/** Header button that opens the command palette, labelled with the right modifier key. */
export default function JumpButton() {
  const mac = useSyncExternalStore(noop, isMac, () => false);
  return (
    <button type="button" className="jump" onClick={() => window.dispatchEvent(new Event("palette:open"))}>
      Jump to <kbd>{mac ? "⌘K" : "Ctrl K"}</kbd>
    </button>
  );
}
