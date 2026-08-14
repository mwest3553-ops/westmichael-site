import { CaseHero, Section, MetaDot, Takeaway, Disclaimer } from "./parts";

/* eslint-disable @next/next/no-img-element */

export default function SpotifyBody() {
  return (
    <div className="cs-wrap">
      <CaseHero
        tag="Spec project · Marketing case study"
        title={
          <>
            Spotify sells you <span className="accent">back to yourself.</span>
          </>
        }
        lede="Every streaming service has the same songs. Spotify wins on psychology, not catalog. A teardown of how it turns human behavior into the most efficient growth engine in consumer tech, plus a campaign concept built on the same mechanics."
        meta={
          <>
            <span>Michael A. West III</span>
            <MetaDot />
            <span>Marketing &amp; Psychology</span>
            <MetaDot />
            <span>Independent spec project, not affiliated with Spotify</span>
          </>
        }
      />

      <Section
        first
        num="01 · The premise"
        title="Same catalog, different product"
        sub="Apple Music, YouTube Music, and Spotify license the same catalog, but one of them dominates the cultural conversation every December."
      >
        <p className="cs-body">
          Spotify markets the listener rather than the catalog. Wrapped, Discover Weekly, Blend, and
          Daylist each take listening behavior and return it as identity. This teardown covers the four
          psychological levers that make that work, the growth loop they quietly power, and a campaign
          concept that extends the engine from one spike a year to four.
        </p>
      </Section>

      <Section
        num="02 · The psychology"
        title="Four behavioral levers doing the marketing"
        sub="None of the four are about sound quality."
      >
        <div className="cs-grid g2">
          <div className="cs-glasscard">
            <div className="k">Identity &amp; self-expression</div>
            <h3 style={{ margin: "10px 0 8px" }}>A personality test you didn&apos;t know you took</h3>
            <p style={{ marginTop: 0 }}>
              People share what signals who they are. Wrapped reframes listening data as a statement of
              identity, so posting it reads as self-expression rather than promotion of an app.
            </p>
          </div>
          <div className="cs-glasscard">
            <div className="k">The endowment effect</div>
            <h3 style={{ margin: "10px 0 8px" }}>&ldquo;Your&rdquo; year, &ldquo;your&rdquo; playlist</h3>
            <p style={{ marginTop: 0 }}>
              Ownership language makes the product feel like something to lose. Calling it{" "}
              <em style={{ color: "#fff" }}>your</em> Discover Weekly raises the cost of leaving.
            </p>
          </div>
          <div className="cs-glasscard">
            <div className="k">Variable reward</div>
            <h3 style={{ margin: "10px 0 8px" }}>Every Monday, a new surprise</h3>
            <p style={{ marginTop: 0 }}>
              Discover Weekly refreshes on an unpredictable-payoff schedule, the same intermittent-reward
              pattern behind slot machines, applied to music discovery.
            </p>
          </div>
          <div className="cs-glasscard">
            <div className="k">Social currency</div>
            <h3 style={{ margin: "10px 0 8px" }}>Built to be posted</h3>
            <p style={{ marginTop: 0 }}>
              Wrapped&apos;s format is engineered for the story feed: vertical, screenshot-ready,
              templated. Each share reaches a new audience through a friend rather than an ad.
            </p>
          </div>
        </div>
      </Section>

      <Section
        num="03 · The teardown"
        title="Wrapped functions as an acquisition channel, not only a campaign."
        sub="The loop keeps the cost per new user low."
      >
        <div className="cs-flywheel">
          <div className="row">
            <div className="node"><div className="t">Your data</div><div className="s">a year of listening</div></div>
            <div className="node"><div className="t">Identity artifact</div><div className="s">&ldquo;this is who I am&rdquo;</div></div>
            <div className="node"><div className="t">Social share</div><div className="s">free, trusted reach</div></div>
            <div className="node"><div className="t">Non-user sees it</div><div className="s hit">&ldquo;where&apos;s mine?&rdquo; → signup</div></div>
          </div>
          <div className="loop">
            <span className="ln l" aria-hidden="true" />
            <span>and the new user makes more data ↺</span>
            <span className="ln r" aria-hidden="true" />
          </div>
          <p className="fnote">
            The data makes the artifact, the artifact gets shared, and the share brings in the next
            user. Paid acquisition sits <em style={{ color: "#fff" }}>outside</em> that loop, so most of
            Wrapped&apos;s growth is earned.
          </p>
        </div>
      </Section>

      <Section
        num="04 · The opportunity"
        title="The loop fires once a year. This concept runs it four times."
        sub="Wrapped raises engagement every December, then fades and casual users drift. This concept runs the same loop each season and gives lapsed users a reason to return."
      >
        <div className="cs-concept">
          <div>
            <div className="cs-phone">
              <img src="/images/work/chapters-fall.png" alt="Chapters season recap card concept" />
            </div>
            <div className="cs-mocklabel">Illustrative mockup, not a real Spotify asset</div>
          </div>
          <div>
            <h3>Chapters</h3>
            <p>
              A quarterly, shareable identity moment tied to life&apos;s seasons. Same psychology as
              Wrapped (identity, ownership, social currency) plus the{" "}
              <strong style={{ color: "#fff" }}>fresh-start effect</strong>: people re-evaluate who they
              are at temporal landmarks. Chapters attaches an artifact to those moments.
            </p>
            <div className="cs-bullets">
              <div className="b">
                <span>
                  <strong style={{ color: "#fff" }}>The lever:</strong> identity + fresh-start effect at
                  each seasonal boundary.
                </span>
              </div>
              <div className="b">
                <span>
                  <strong style={{ color: "#fff" }}>The hook for lapsed users:</strong> a push that reads{" "}
                  <em style={{ color: "#fff" }}>&ldquo;Your Fall chapter is ready.&rdquo;</em> Personal,
                  not promotional.
                </span>
              </div>
              <div className="b">
                <span>
                  <strong style={{ color: "#fff" }}>The creative:</strong> a vertical, screenshot-ready
                  recap card showing the four songs that defined the season, plus top genre, minutes
                  listened, and new artists found.
                </span>
              </div>
              <div className="b">
                <span>
                  <strong style={{ color: "#fff" }}>The channels:</strong> in-app takeover, re-engagement
                  push to dormant users, story templates, and a teaser OOH run,{" "}
                  <em style={{ color: "#fff" }}>&ldquo;What&apos;s your chapter?&rdquo;</em>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        num="05 · How I'd measure it"
        title="Planned against KPIs, not vibes"
        sub="Chapters would run against a holdout and be read on four numbers."
      >
        <div className="cs-grid g4">
          {[
            ["Share rate", "Shares per active user, the loop's fuel"],
            ["Signup / share", "Non-user → signup from shared cards"],
            ["Reactivation", "Dormant users returning in the launch window"],
            ["CPA vs paid", "Earned cost-per-user against the paid benchmark"],
          ].map(([n, l]) => (
            <div key={n} className="cs-kpi">
              <div className="n sm">{n}</div>
              <div className="l">{l}</div>
            </div>
          ))}
        </div>
        <p className="cs-body">
          I&apos;d A/B the card creative and the push copy against a holdout, watch DAU lift across the
          launch window, and kill or scale on signup-per-share, which is the number that shows whether
          the artifact works as an acquisition channel.
        </p>
      </Section>

      <Takeaway>
        The starting question is{" "}
        <span className="accent">which human behavior the campaign uses,</span> then the creative and
        the metric are built around it.
      </Takeaway>

      <Disclaimer>
        This is an independent student spec project by Michael A. West III, created to demonstrate
        marketing strategy and consumer-psychology thinking. It is{" "}
        <strong>not affiliated with, endorsed by, or produced for Spotify</strong>. All concepts,
        mockups, and figures are illustrative. &ldquo;Spotify,&rdquo; &ldquo;Wrapped,&rdquo; and related
        marks belong to Spotify AB.
      </Disclaimer>
    </div>
  );
}
