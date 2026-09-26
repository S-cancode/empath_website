import { ArrowUpRight } from "lucide-react";
import { TESTFLIGHT_LABEL, TESTFLIGHT_URL } from "@/lib/site";
import { ChatScreen, MatchScreen, Phone, PromptScreen, VoiceBubble } from "./phone";

function BetaCta({ className = "" }: { className?: string }) {
  return (
    <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className={`x-cta ${className}`}>
      <span>Join the TestFlight beta</span>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

function LivePill({ className = "" }: { className?: string }) {
  return (
    <p className={`x-pill ${className}`}>
      <span className="x-pulse" aria-hidden="true" />
      The beta is live
    </p>
  );
}

/* ACT 1: the signal ----------------------------------------------------- */

export function HeroScene() {
  return (
    <section id="hero" data-scene="hero" className="x-scene x-hero x-dark" aria-labelledby="hero-title">
      <div className="x-sticky">
        <p className="x-hero-meta" aria-hidden="true">
          <span>Peer support</span>
          <span>Matched by AI</span>
          <span>UK · 18+</span>
        </p>
        <div className="x-hero-grid">
          <div className="x-hero-title-wrap">
            <LivePill />
            <h1 id="hero-title" className="x-hero-title">
              <span>Talk to</span>
              <span>someone who&apos;s</span>
              <span>
                <em>been there.</em>
              </span>
            </h1>
          </div>
          <div className="x-hero-side">
            <p>
              Empath matches you with a real person who&apos;s been through something similar. Not a
              therapist. Not a bot. A real person, matched by AI.
            </p>
            <BetaCta />
            <p className="x-fine">{TESTFLIGHT_LABEL} · iPhone</p>
          </div>
        </div>
        <div className="x-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}

/* ACT 2: the product comes into focus ----------------------------------- */

const steps = [
  {
    title: "Say it in your own words.",
    body: "Tell us what’s weighing on you. No clinical labels. No diagnosis. Just your experience, in up to 500 characters.",
  },
  {
    title: "Matched to your experience, not a category.",
    body: "AI reads what you wrote and finds someone who’s been through something similar. You see a short summary of their situation, and you both choose whether to connect.",
  },
  {
    title: "Talk it through, in text or voice.",
    body: "A private one-to-one chat with your match. Every message and voice note is safety-checked before it’s delivered.",
  },
];

function Loupes() {
  return (
    <div className="x-loupes" aria-hidden="true">
      <div className="x-loupe" data-i="0">
        <div className="x-loupe-card">
          <p className="x-loupe-type">
            I&apos;ve been feeling burnt out at work<span className="ph-caret" />
          </p>
          <span className="x-loupe-meta">98/500</span>
        </div>
        <span className="x-loupe-cap">In your own words</span>
      </div>
      <div className="x-loupe" data-i="1">
        <div className="x-loupe-card">
          <span className="ph-badge">Work &amp; Career</span>
          <p>Feeling exhausted after months of long hours and finding it hard to switch off.</p>
        </div>
        <span className="x-loupe-cap">A summary, never your name</span>
      </div>
      <div className="x-loupe" data-i="2">
        <div className="x-loupe-card x-loupe-voice">
          <VoiceBubble mine bars={30} />
          <p className="ph-checking">Checking and sending your voice note…</p>
        </div>
        <span className="x-loupe-cap">Checked before delivery</span>
      </div>
    </div>
  );
}

export function StageScene() {
  return (
    <section
      id="how-it-works"
      data-scene="stage"
      data-step="0"
      className="x-scene x-stage x-dark"
      aria-labelledby="stage-title"
    >
      <div className="x-sticky x-stage-motion">
        <div className="x-stage-copy">
          <p className="x-kicker" id="stage-title">
            How it works
          </p>
          <div className="x-rail" aria-hidden="true">
            <i />
          </div>
          <ol className="x-steps">
            {steps.map((s, i) => (
              <li key={s.title} className="x-step" data-i={i}>
                <span className="x-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="x-stage-device">
          <Phone className="x-phone">
            <div className="x-scr x-scr-1">
              <PromptScreen />
            </div>
            <div className="x-scr x-scr-2">
              <MatchScreen />
            </div>
            <div className="x-scr x-scr-3">
              <ChatScreen />
            </div>
          </Phone>
          <Loupes />
        </div>
        <p className="x-stage-note">Screens from the Empath iPhone app. Conversation shown is illustrative.</p>
      </div>

      {/* Reduced motion: the same three steps as a calm, static sequence. */}
      <div className="x-stage-static">
        <p className="x-kicker">How it works</p>
        <ol>
          {steps.map((s, i) => (
            <li key={s.title}>
              <div>
                <span className="x-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <Phone className="x-phone-static">
                {i === 0 ? <PromptScreen /> : i === 1 ? <MatchScreen /> : <ChatScreen />}
              </Phone>
            </li>
          ))}
        </ol>
        <p className="x-stage-note">Screens from the Empath iPhone app. Conversation shown is illustrative.</p>
      </div>
    </section>
  );
}

/* ACT 3: connection ------------------------------------------------------ */

function Person({ who, intent, side }: { who: string; intent: string; side: "left" | "right" }) {
  return (
    <div className={`x-person x-person-${side}`}>
      <span className="x-avatar" aria-hidden="true" />
      <span className="x-person-who">{who}</span>
      <span className="x-person-q">Right now I&apos;m…</span>
      <span className="x-person-chip">{intent}</span>
    </div>
  );
}

export function ConnectScene() {
  return (
    <section id="about" data-scene="connect" className="x-scene x-connect x-dark" aria-labelledby="connect-title">
      <div className="x-sticky">
        <div className="x-c-intro">
          <p className="x-kicker">Why Empath</p>
          <p className="x-c-lede">
            We all go through things that are hard to put into words.{" "}
            <span>Grief. Anxiety. Loneliness. Life transitions. Relationship breakdowns.</span> The kind
            of pain that feels impossible to explain to the people around you, even the ones who love
            you.
          </p>
        </div>

        <div className="x-c-people">
          <Person side="left" who="You" intent="Looking for support" />
          <Person side="right" who="Your match" intent="Able to support" />
        </div>

        <h2 id="connect-title" className="x-c-title">
          <span>Finally, someone</span>
          <span>
            <em>who gets it.</em>
          </span>
        </h2>

        <div className="x-c-states">
          <p className="x-c-s x-c-s1">
            Not a professional. Not someone who will judge you.{" "}
            <strong>Just someone who understands.</strong>
          </p>
          <p className="x-c-s x-c-s2">
            No social profiles. No followers. <strong>Just two people, talking honestly.</strong>
          </p>
          <p className="x-c-s x-c-s3">
            Peers support each other. <strong>No one here gives professional advice.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ACT 4: a change of atmosphere ----------------------------------------- */

export function RevealScene() {
  const inner = (
    <div className="x-rv-inner">
      <p className="x-kicker">Safety</p>
      <h2>
        Built to feel <em>safe.</em>
      </h2>
    </div>
  );
  return (
    <section data-scene="reveal" className="x-scene x-reveal" aria-labelledby="reveal-title">
      <div className="x-sticky">
        <div className="x-rv x-rv-dark" aria-hidden="true">
          {inner}
        </div>
        <div className="x-rv x-rv-light">
          <div className="x-rv-inner">
            <p className="x-kicker">Safety</p>
            <h2 id="reveal-title">
              Built to feel <em>safe.</em>
            </h2>
            <p className="x-rv-sub">Here&apos;s exactly how Empath looks after you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const assurances = [
  {
    k: "Checked before it arrives",
    body: "Every message, and every voice note, is safety-checked before it’s delivered. Harmful content is blocked. Voice notes are transcribed for the check, then the transcript is discarded.",
  },
  {
    k: "Only your nickname",
    body: "Your match sees the nickname you choose. Never your name, your email or your Apple ID.",
  },
  {
    k: "Gone after 7 days",
    body: "Messages are encrypted at rest and deleted automatically after 7 days, unless a report is open or a safeguarding review is under way. They’re not end-to-end encrypted; that’s what makes the safety checks possible.",
  },
  {
    k: "Report or block, from any chat",
    body: "Report a message or block anyone from inside a conversation. Reports are reviewed within 24 hours, and there’s zero tolerance for abuse.",
  },
  {
    k: "Adults only",
    body: "Empath is for people aged 18 and over. Your age is checked when you sign up.",
  },
];

export function SafetyScene() {
  return (
    <section id="safety" data-scene="safety" data-mode="enter" className="x-scene x-safety x-light">
      <ol className="x-ed">
        {assurances.map((a, i) => (
          <li key={a.k} className="x-ed-row" data-i={i} data-reveal>
            <span className="x-ed-n" aria-hidden="true">
              0{i + 1}
            </span>
            <h3>{a.k}</h3>
            <p>{a.body}</p>
          </li>
        ))}
      </ol>

      <aside className="x-help" aria-labelledby="help-title" data-reveal>
        <h3 id="help-title">Not therapy. Not a crisis service.</h3>
        <p>
          Empath is peer support. If you or someone else is in immediate danger, call{" "}
          <a href="tel:999">999</a>. For free, 24/7 emotional support in the UK, call Samaritans on{" "}
          <a href="tel:116123">116 123</a>. Crisis resources are always in the app under Profile → Crisis
          Support.
        </p>
      </aside>
    </section>
  );
}

/* ACT 5: resolution ------------------------------------------------------ */

export function FinaleScene() {
  return (
    <section id="join" data-scene="finale" data-mode="enter" className="x-scene x-finale x-light" aria-labelledby="join-title">
      <div className="x-fin-core" data-rings-anchor>
        <LivePill className="x-pill-light" />
        <h2 id="join-title">
          Find someone
          <br />
          <em>who gets it.</em>
        </h2>
        <p>Empath is in beta on iPhone. Join through TestFlight and try it now.</p>
        <BetaCta className="x-cta-light" />
        <p className="x-fine">{TESTFLIGHT_LABEL} · Adults 18+</p>
      </div>
    </section>
  );
}
