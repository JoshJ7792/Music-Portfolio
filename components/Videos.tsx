"use client";
import { useState } from "react";
import { videos, type Video } from "@/content/site";

/** Shows a YouTube thumbnail and only loads the (heavy) player once clicked. */
function YouTube({ video, feature }: { video: Video; feature: boolean }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className={`video ${feature ? "video--feature" : ""}`}>
      <div className="video__frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="video__poster" onClick={() => setPlaying(true)} aria-label={`Play ${video.title}`}>
            {/* 1280×720 thumbnail; older uploads may lack it, so fall back to the 480×360 one. */}
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.src.includes("hqdefault")) img.src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
              }}
            />
            <span className="video__play" aria-hidden />
          </button>
        )}
      </div>
      <figcaption>
        <strong>{video.title}</strong>
        {video.detail && <span>{video.detail}</span>}
      </figcaption>
    </figure>
  );
}

const PLACEHOLDERS = ["Solo Repertoire", "Chamber Music", "Orchestral Excerpts"];

export default function Videos() {
  if (videos.length === 0) {
    return (
      <div className="videos videos--empty">
        {PLACEHOLDERS.map((label, i) => (
          <figure className={`video ${i === 0 ? "video--feature" : ""}`} key={label}>
            <div className="video__frame video__frame--placeholder">
              <span className="video__play" aria-hidden />
              <span className="video__soon">Recording coming soon</span>
            </div>
            <figcaption>
              <strong>{label}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }
  const [first, ...rest] = videos;
  return (
    <div className="videos">
      <YouTube video={first} feature />
      {rest.length > 0 && (
        <div className="videos__rest">
          {rest.map((v) => (
            <YouTube key={v.youtubeId} video={v} feature={false} />
          ))}
        </div>
      )}
    </div>
  );
}
