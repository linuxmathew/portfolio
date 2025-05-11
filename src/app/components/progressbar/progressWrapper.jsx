"use client";

import NextTopLoader from "nextjs-toploader";

export default function NProgressWrapper() {
  return (
    <NextTopLoader
      color="var(--primary-color)"
      height={3}
      easing="ease"
      showSpinner={true}
      crawl={true}
    />
  );
}
