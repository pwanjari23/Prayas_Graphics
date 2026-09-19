"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

function RouteChangeListenerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    const searchString = searchParams?.toString() ? `?${searchParams.toString()}` : "";
    const fullUrl = `${pathname}${searchString}`;

    // Prevent duplicate firing for the same URL
    if (lastTrackedUrl.current !== fullUrl) {
      lastTrackedUrl.current = fullUrl;
      trackPageView(fullUrl);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function RouteChangeListener() {
  return (
    <Suspense fallback={null}>
      <RouteChangeListenerInner />
    </Suspense>
  );
}
