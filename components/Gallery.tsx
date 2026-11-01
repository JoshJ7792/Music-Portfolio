"use client";
import { useCallback, useEffect, useState } from "react";
import Photo, { photoSrc } from "./Photo";
import { gallery } from "@/content/site";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index === null ? null : gallery[index];

  return (
    <>
      <ul className="gallery">
        {gallery.map((p, i) => (
          <li key={p.id}>
            <button className="gallery__item" onClick={() => setIndex(i)} aria-label={`Open photo: ${p.caption}`}>
              <Photo id={p.id} alt={p.caption} sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw" />
              <span className="gallery__caption">{p.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.caption} onClick={close}>
          <img
            key={current.id}
            src={photoSrc(current.id, 2400)}
            alt={current.caption}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox__caption">
            {current.caption}
            <span>
              {index! + 1} / {gallery.length}
            </span>
          </p>
          <button className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
            ×
          </button>
          <button
            className="lightbox__btn lightbox__prev"
            onClick={(e) => (e.stopPropagation(), step(-1))}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            className="lightbox__btn lightbox__next"
            onClick={(e) => (e.stopPropagation(), step(1))}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
