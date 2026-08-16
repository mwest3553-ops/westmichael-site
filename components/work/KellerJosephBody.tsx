import { CaseHero, Section, MetaDot, Takeaway, Disclaimer } from "./parts";

/* eslint-disable @next/next/no-img-element */

export default function KellerJosephBody() {
  return (
    <div className="cs-wrap">
      <CaseHero
        tag="Client work · Brand & web · Hero project"
        title={
          <>
            Building the credibility{" "}
            <span className="accent">a new fund can&apos;t buy.</span>
          </>
        }
        lede="A private investment group I knew brought me on to build their site and their online credibility. I did the work, and later joined them as a co-founder."
        meta={
          <>
            <span>Michael A. West III</span>
            <MetaDot />
            <span>Founder, Westhird → Co-founder, Keller Joseph Capital</span>
            <MetaDot />
            <a href="https://kellerjosephcapital.com" target="_blank" rel="noopener noreferrer">
              kellerjosephcapital.com ↗
            </a>
          </>
        }
      />

      <Section first num="01 · The brief" title="The problem was credibility, not capital.">
        <p className="cs-body">
          In finance, trust is the product. Anyone can start a fund, but with no history behind it
          there is little reason for people to take it seriously. My job was not to make a nice
          website, it was to <strong>build credibility for something new.</strong>
        </p>
      </Section>

      <Section
        num="02 · The insight"
        title="However much we try to avoid it, people judge a book by its cover."
      >
        <p className="cs-body">
          People assess credibility through <strong>signals</strong>. How measured the language is,
          how consistent the design. When you put yourself out there you can sell a product, but at
          the same time <em>restraint</em> sells trust. So we kept it quiet and measured: serif type,
          a narrow palette, unhurried copy.
        </p>
      </Section>

      <Section num="03 · The work" title="A system engineered for trust">
        <div className="cs-figure">
          <img
            src="/images/work/kj-hero.jpg"
            alt="Keller Joseph Capital homepage with the gold KJ monogram, wordmark, and live market ticker"
          />
        </div>
        <div className="cs-caption">
          kellerjosephcapital.com. Identity, copy, and site designed and built by Michael West.
        </div>

        <p className="cs-body">
          <strong>Identity.</strong> A KJ monogram and wordmark in a cream, gold, and navy palette.
          Gold for value, navy for stability, cream for permanence. The palette borrows from firms
          that have been around a long time.
        </p>

        <div className="cs-swatches">
          <div className="cs-swatch">
            <div className="chip" style={{ background: "#0A1628" }} />
            <div className="meta"><b>Navy</b>#0A1628</div>
          </div>
          <div className="cs-swatch">
            <div className="chip" style={{ background: "#C99020" }} />
            <div className="meta"><b>Gold</b>#C99020</div>
          </div>
          <div className="cs-swatch">
            <div className="chip" style={{ background: "#FAF7F0" }} />
            <div className="meta"><b>Cream</b>#FAF7F0</div>
          </div>
        </div>

        <p className="cs-body">
          <strong>Voice.</strong> A restrained, first-person tone:
        </p>
        <div className="cs-quote">
          <p className="serif">
            &ldquo;We pool judgment before capital. We move slowly, decide together, and hold what we
            believe in. Conviction, not noise, is our discipline.&rdquo;
          </p>
          <div className="attr">Keller Joseph Capital</div>
        </div>

        <div className="cs-principles">
          {[
            ["01", "Patience", "Unhurried by design."],
            ["02", "Discipline", "Process over impulse."],
            ["03", "Independence", "Conviction, not consensus."],
            ["04", "Alignment", "Partners invest together."],
          ].map(([n, h, p]) => (
            <div key={n} className="cs-principle">
              <div className="pi serif">{n}</div>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>

        <p className="cs-body">
          <strong>The product surface.</strong> The site isn&apos;t a brochure, it&apos;s an
          instrument. A live market ticker, a growth-of-capital view benchmarked against the S&amp;P,
          and a sector breakdown that lets a partner see concentration as a deliberate choice rather
          than an accident.
        </p>

        <div className="cs-figure tight">
          <img
            src="/images/work/kj-sector-sm.png"
            alt="Keller Joseph Capital sector and theme breakdown module"
          />
        </div>
        <div className="cs-caption">Partner-facing modules from the live site.</div>
      </Section>

      <Section num="04 · The result" title="From building the brand to joining the firm.">
        <div className="cs-result">
          <div className="rule" aria-hidden="true" />
          <p>
            I was brought on to build the site and the firm&apos;s online credibility. Once it was
            live, I joined the group as a co-founder and marketing lead.
          </p>
        </div>
        <p className="cs-body">
          The brand is live and in use today at{" "}
          <a href="https://kellerjosephcapital.com" target="_blank" rel="noopener noreferrer">
            kellerjosephcapital.com
          </a>
          .
        </p>
      </Section>

      <Section num="05 · What it shows" title="Your brand is a tool, not decoration">
        <p className="cs-body">
          The outcome I was designing for was trust, so the brief was psychological before it was
          visual: how the site made people feel, and whether it presented the work the way it needed
          to. Design and marketing were the same job here.
        </p>
      </Section>

      <Takeaway>
        The site had to do{" "}
        <span className="accent">the work a track record usually does.</span>
      </Takeaway>

      <Disclaimer>
        Keller Joseph Capital is a real client project delivered through Westhird; brand, copy, and
        website were designed and built by Michael West. Screenshots show the client&apos;s own live
        site.
      </Disclaimer>
    </div>
  );
}
