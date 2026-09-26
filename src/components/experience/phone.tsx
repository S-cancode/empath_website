import { Compass, MessagesSquare, CircleUserRound, Play, Mic, ArrowUp } from "lucide-react";

/**
 * Recreations of real Empath iOS screens (client/app in the empath repo),
 * drawn in the website's palette. Copy, labels and layout follow the app;
 * the message content is illustrative.
 */

export function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`ph ${className}`}>
      <div className="ph-screen">
        <div className="ph-status" aria-hidden="true">
          <span>9:41</span>
          <span className="ph-island" />
          <span className="ph-status-r">
            <i />
            <i />
            <i />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function TabBar({ active }: { active: "explore" | "chats" }) {
  return (
    <div className="ph-tabs" aria-hidden="true">
      <span className={active === "explore" ? "on" : ""}>
        <Compass />
        Explore
      </span>
      <span className={active === "chats" ? "on" : ""}>
        <MessagesSquare />
        Chats
      </span>
      <span>
        <CircleUserRound />
        Profile
      </span>
    </div>
  );
}

export function PromptScreen() {
  return (
    <div className="ph-view ph-explore">
      <div className="ph-counter">0 of 10 matches used today</div>
      <h4 className="ph-h">What&apos;s weighing on you?</h4>
      <p className="ph-sub">Share what&apos;s on your mind, and we&apos;ll find someone who understands.</p>
      <div className="ph-input" data-focus="prompt">
        <p>
          I&apos;ve been feeling burnt out at work for months and I don&apos;t really know who to talk
          to about it<span className="ph-caret" />
        </p>
        <span className="ph-count">98/500</span>
      </div>
      <div className="ph-btn">Find my match</div>
      <TabBar active="explore" />
    </div>
  );
}

export function MatchScreen() {
  return (
    <div className="ph-view ph-explore ph-dim">
      <div className="ph-counter">1 of 10 matches used today</div>
      <h4 className="ph-h">What&apos;s weighing on you?</h4>
      <div className="ph-sheet">
        <span className="ph-emoji" aria-hidden="true">
          🤝
        </span>
        <h5>We found you a match!</h5>
        <p className="ph-label">Here&apos;s a summary of their situation:</p>
        <span className="ph-badge">Work &amp; Career</span>
        <div className="ph-summary" data-focus="summary">
          Feeling exhausted after months of long hours and finding it hard to switch off.
        </div>
        <p className="ph-note">Would you like to connect with this person?</p>
        <div className="ph-row">
          <span className="ph-btn sm">Start chatting</span>
          <span className="ph-btn sm ghost">Skip</span>
        </div>
      </div>
      <TabBar active="explore" />
    </div>
  );
}

export function VoiceBubble({ mine = false, bars = 26 }: { mine?: boolean; bars?: number }) {
  return (
    <div className={`ph-voice ${mine ? "mine" : ""}`}>
      <span className="ph-play">
        <Play />
      </span>
      <span className="ph-wave" aria-hidden="true">
        {Array.from({ length: bars }, (_, i) => (
          <i
            key={i}
            style={{ height: `${22 + Math.round(70 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.45)))}%` }}
          />
        ))}
      </span>
      <span className="ph-dur">0:24</span>
    </div>
  );
}

export function ChatScreen() {
  return (
    <div className="ph-view ph-chat">
      <div className="ph-chat-head">
        <span className="ph-back">←</span>
        <span className="ph-chat-name">
          Juniper
          <small>tap to rename</small>
        </span>
        <span className="ph-dots">⋮</span>
      </div>
      <div className="ph-msgs">
        <span className="ph-date">Today</span>
        <div className="ph-msg theirs">Long hours got me too last year. What&apos;s been the hardest part?</div>
        <div className="ph-msg mine">
          Honestly? Never switching off. Even at the weekend.
          <small>✓✓</small>
        </div>
        <div className="ph-msg theirs">Same. Send a voice note if that&apos;s easier than typing.</div>
        <div data-focus="voice">
          <VoiceBubble mine />
        </div>
        <div className="ph-checking">Checking and sending your voice note…</div>
      </div>
      <div className="ph-compose">
        <span className="ph-field">Send message...</span>
        <span className="ph-mic">
          <Mic />
        </span>
        <span className="ph-send">
          <ArrowUp />
        </span>
      </div>
    </div>
  );
}
