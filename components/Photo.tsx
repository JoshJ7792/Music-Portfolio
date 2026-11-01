import manifest from "@/public/photos/manifest.json";

const WIDTHS = [800, 1600, 2400];
type Id = keyof typeof manifest;

export function photoSrc(id: string, width = 1600) {
  return `/photos/${id}-${width}.webp`;
}

/** Responsive <img> for a photo processed by scripts/process-photos.mjs. */
export default function Photo({
  id,
  alt,
  sizes = "100vw",
  className,
  priority = false,
  style,
}: {
  id: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}) {
  const meta = manifest[id as Id];
  if (!meta) throw new Error(`Unknown photo id "${id}". Run \`npm run photos\`.`);
  return (
    <img
      src={photoSrc(id)}
      srcSet={WIDTHS.map((w) => `${photoSrc(id, w)} ${w}w`).join(", ")}
      sizes={sizes}
      width={meta.width}
      height={meta.height}
      alt={alt}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
