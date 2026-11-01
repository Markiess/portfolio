import { X } from "lucide-react";
import { useEffect } from "react";

type LightboxProps = {
  src: string;
  alt: string;
  caption: string;
  onClose: () => void;
};

export function Lightbox({ src, alt, caption, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={caption} onClick={onClose}>
      <button type="button" onClick={onClose} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10" aria-label="Close image">
        <X aria-hidden="true" />
      </button>
      <figure className="max-h-[90vh] max-w-[1200px]" onClick={(event) => event.stopPropagation()}>
        <img src={src} alt={alt} className="max-h-[82vh] w-auto rounded-xl bg-white object-contain" />
        <figcaption className="mt-3 text-center text-[13px] text-muted">{caption}</figcaption>
      </figure>
    </div>
  );
}
