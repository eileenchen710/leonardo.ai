"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
};

/** Remote photograph on a dark base; if the image fails, the base stays. */
export default function Photo({ src, alt, className = "", imgClassName = "", eager }: Props) {
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const ref = useRef<HTMLImageElement>(null);

  // A server-rendered <img> can finish loading before hydration, so onLoad/onError
  // never fire — check the element directly once mounted.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete) setState(img.naturalWidth > 0 ? "ready" : "error");
  }, [src]);

  return (
    <div className={`photo relative overflow-hidden ${className}`}>
      {state !== "error" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setState("ready")}
          onError={() => setState("error")}
          className={`absolute inset-0 h-full w-full object-cover ${
            state === "ready" ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
