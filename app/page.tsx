import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import {
  profile,
  bio,
  highlights,
  professional,
  festivals,
  chamber,
  awards,
  education,
  type Role,
} from "@/content/site";

function SectionHead({ index, eyebrow, title }: { index: string; eyebrow: string; title: React.ReactNode }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">
        <span>{index}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
    </Reveal>
  );
}

function RoleList({ title, roles }: { title: string; roles: Role[] }) {
  return (
    <div className="roles">
      <h3>{title}</h3>
      <ul>
        {roles.map((r, i) => (
          <Reveal as="li" key={r.ensemble} delay={i * 60}>
            <div>
              <p className="roles__ensemble">{r.ensemble}</p>
              <p className="roles__role">{r.role}</p>
              {r.note && <p className="roles__note">{r.note}</p>}
            </div>
            <p className="roles__years">{r.years}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Oboist",
    description: bio.lede,
    email: `mailto:${profile.email}`,
    url: profile.siteUrl,
    alumniOf: "Vanderbilt University",
    sameAs: [profile.social.instagram, profile.social.youtube].filter(Boolean),
  };

  return (
    <>
      <Nav />
      <main id="top">
        {/* ── Hero ─────────────────────────────── */}
        <section className="hero">
          <div className="hero__photo">
            <Photo id="trv-0042a" alt={`${profile.name} holding an oboe on a darkened stage`} sizes="(max-width: 900px) 100vw, 55vw" priority />
          </div>
          <div className="hero__text">
            <p className="eyebrow hero__eyebrow">{profile.instruments}</p>
            <h1>
              Joshua
              <br />
              <em>Jung</em>
            </h1>
            <p className="hero__lede">{bio.lede}</p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#media">
                Watch &amp; Listen
              </a>
              <a className="btn" href="#contact">
                Booking Inquiries
              </a>
            </div>
          </div>
          <a href="#about" className="hero__scroll" aria-label="Scroll to biography">
            <span />
          </a>
        </section>

        {/* ── Highlights strip ─────────────────── */}
        <section className="highlights" aria-label="Highlights">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 90} className="highlight">
              <p className="highlight__year">{h.year}</p>
              <p className="highlight__value">{h.value}</p>
              <p className="highlight__label">{h.label}</p>
            </Reveal>
          ))}
        </section>

        {/* ── About ────────────────────────────── */}
        <section id="about" className="section about">
          <div className="about__photo">
            <Reveal>
              <Photo id="joshua-jung-professional-headshot" alt={`Portrait of ${profile.name} with oboe`} sizes="(max-width: 900px) 100vw, 40vw" />
            </Reveal>
          </div>
          <div className="about__text">
            <SectionHead index="01" eyebrow="Biography" title={<>A voice <em>in the winds</em></>} />
            {bio.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={i === 0 ? "about__first" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Quote / full-bleed image ─────────── */}
        <section className="bleed" aria-hidden>
          <Photo id="tag-5445" alt="" sizes="100vw" />
          <div className="bleed__overlay">
            <p>
              Orchestra <span>·</span> Opera <span>·</span> Chamber <span>·</span> Recital
            </p>
          </div>
        </section>

        {/* ── Experience ───────────────────────── */}
        <section id="experience" className="section">
          <SectionHead index="02" eyebrow="Experience" title={<>On stage <em>&amp; in the pit</em></>} />
          <div className="experience">
            <RoleList title="Professional" roles={professional} />
            <RoleList title="Festivals & Orchestras" roles={festivals} />
            <RoleList title="Chamber Music" roles={chamber} />
          </div>
          <Reveal className="resume-cta">
            <p>The full résumé, with every ensemble, teacher and award.</p>
            <a className="btn" href={profile.resumeUrl} download>
              Download Résumé (PDF)
            </a>
          </Reveal>
        </section>

        {/* ── Awards ───────────────────────────── */}
        <section id="awards" className="section section--alt">
          <SectionHead index="03" eyebrow="Awards & Recognition" title={<>Competition <em>honors</em></>} />
          <ol className="awards">
            {awards.map((a, i) => (
              <Reveal as="li" key={a.date + a.title} delay={i * 60}>
                <p className="awards__date">{a.date}</p>
                <div>
                  <p className="awards__result">{a.result}</p>
                  <p className="awards__title">{a.title}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ── Education ────────────────────────── */}
        <section id="education" className="section education">
          <SectionHead index="04" eyebrow="Education & Training" title={<>Teachers <em>&amp; lineage</em></>} />
          <div className="education__grid">
            <Reveal className="card">
              <h3>{education.school}</h3>
              <p className="card__lead">{education.degree}</p>
              <p>{education.secondMajor}</p>
              <p className="muted">{education.graduation}</p>
              <ul className="tags">
                {education.honors.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="card" delay={80}>
              <h3>Primary Teachers</h3>
              <ul className="teachers">
                {education.teachers.map((t) => (
                  <li key={t.name}>
                    <span>{t.name}</span>
                    <span className="muted">{t.years}</span>
                  </li>
                ))}
              </ul>
              <h3 className="card__sub">Masterclasses &amp; Additional Study</h3>
              <ul className="tags">
                {education.masterclasses.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Media ────────────────────────────── */}
        <section id="media" className="section section--alt">
          <SectionHead index="05" eyebrow="Watch & Listen" title={<>Performances <em>on film</em></>} />
          <Videos />
        </section>

        {/* ── Gallery ──────────────────────────── */}
        <section id="gallery" className="section">
          <SectionHead index="06" eyebrow="Gallery" title={<>From the <em>stage</em></>} />
          <Gallery />
        </section>

        {/* ── Contact ──────────────────────────── */}
        <section id="contact" className="contact">
          <Photo id="trv-0050a" alt="" sizes="100vw" className="contact__bg" />
          <div className="contact__inner">
            <Reveal>
              <p className="eyebrow">
                <span>07</span>Contact
              </p>
              <h2>
                Let&rsquo;s make <em>music together</em>
              </h2>
              <p className="contact__text">
                For performances, sub work, chamber collaborations, recording sessions, and lessons, please get in
                touch.
              </p>
              <a className="contact__email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <div className="contact__links">
                <a className="btn" href={profile.resumeUrl} download>
                  Résumé (PDF)
                </a>
                <a className="btn" href={profile.social.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
                <a className="btn" href={profile.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
              <p className="muted">Based in {profile.location}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="muted">{profile.tagline}</p>
        <div className="footer__links">
          {profile.social.instagram && (
            <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          {profile.social.youtube && (
            <a href={profile.social.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          )}
          <a href={profile.resumeUrl} download>
            Résumé
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
