import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
      <main className="mx-auto max-w-5xl p-6">{children}</main>
  );
}
