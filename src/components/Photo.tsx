"use client";

import { useState } from "react";

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

  return (
    <div className={`photo relative overflow-hidden ${className}`}>
      {state !== "error" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
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
