"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copiar e-mail");
  const addrRef = useRef<HTMLSpanElement>(null);

  function flash(message: string) {
    setLabel(message);
    setTimeout(() => setLabel("Copiar e-mail"), 1800);
  }

  function selectAddress() {
    const node = addrRef.current;
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    flash("Selecionado, use Ctrl+C");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      flash("E-mail copiado");
    } catch {
      selectAddress();
    }
  }

  return (
    <div className="mail">
      <span className="addr" ref={addrRef}>
        {email}
      </span>
      <button className="btn" type="button" onClick={copy}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
        <span aria-live="polite">{label}</span>
      </button>
    </div>
  );
}
