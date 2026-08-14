import { CaseHero, Section, MetaDot, Takeaway, Disclaimer } from "./parts";
import DeckViewer from "./DeckViewer";

export default function EnterpriseBody() {
  return (
    <div className="cs-wrap">
      <CaseHero
        tag="Self-initiated · Channel & messaging strategy"
        title={
          <>
            Same audience. <span className="accent">Different message.</span>
          </>
        }
        lede="After rebranding to Enterprise Mobility, the company stood up an internal startup to grow its car sales side of the business. Nobody yet knew which channels were actually reaching buyers. Over nine weeks I tracked my own queue, pitched a fix to senior leadership, and then scored my own forecast against what happened."
        meta={
          <>
            <span>Michael A. West III</span>
            <MetaDot />
            <span>Business Development / Marketing Intern</span>
            <MetaDot />
            <span>Summer 2026</span>
          </>
        }
      >
        <div className="cs-grid g4" style={{ maxWidth: 720 }}>
          <div className="cs-kpi">
            <div className="n">43%</div>
            <div className="l">Of all appointments came from one touch, the first live call</div>
          </div>
          <div className="cs-kpi">
            <div className="n">1%</div>
            <div className="l">Reply rate on 2,529 emails, and zero appointments</div>
          </div>
          <div className="cs-kpi">
            <div className="n">7,590</div>
            <div className="l">Tasks logged across 2,400+ leads in nine weeks</div>
          </div>
          <div className="cs-kpi">
            <div className="n">~ +14%</div>
            <div className="l">Sales increase after the changes were adopted</div>
          </div>
        </div>
      </CaseHero>

      <Section
        first
        num="01 · The situation"
        title="A new audience, and no read on what reached them"
        sub="I was one of ten interns at an internal startup testing whether a central team could turn the lowest-intent audience we had into interested buyers before handing them to dealership consultants."
      >
        <p className="cs-body">
          The assigned job was outreach. The open questions were which channel reached this audience,
          when they responded, and whether the message landed. None of that was being recorded, so I
          started recording it.
        </p>
      </Section>

      <Section num="02 · The method" title="I tracked every touch myself">
        <p className="cs-body">
          On my own initiative I built a tracker that recorded every contact at the moment its
          outcome was known: which channel it came through, where in the sequence it landed, and what
          the customer did. Replies were time-stamped to the minute and the whole thing was
          reconciled against team data each week.
        </p>
        <div className="cs-grid g3">
          <div className="cs-flatcard">
            <div className="k">Logged at disposition</div>
            <p>Every lead recorded the moment its outcome was known: channel, touch stage, result.</p>
          </div>
          <div className="cs-flatcard">
            <div className="k">Time-stamped replies</div>
            <p>Inbound responses captured to the minute, so reply timing could be read against when leads arrive.</p>
          </div>
          <div className="cs-flatcard">
            <div className="k">Reconciled weekly</div>
            <p>Entries verified against team data and one-on-one recaps, so the numbers held up in a room.</p>
          </div>
        </div>
      </Section>

      <Section
        num="03 · The insight"
        title="Where the effort went, and what it returned"
        sub="Most manual hours went to the channel that converted worst, and the outreach copy was being misread."
      >
        <p className="cs-body">
          Live conversation carried the overwhelming share of real engagements: calls were 23% of
          touches and 65% of outcomes. Email ran the other way, taking 21% of touches for 3% of
          outcomes, with 1,176 sends producing 20 replies and no appointment-level engagements.
          Replies clustered at the start and end of the day, 40% before 11am and 38% after 2pm, while
          the queue loaded heaviest in the morning. The late-stage touches in the cadence returned
          little for the volume they consumed.
        </p>
        <p className="cs-body">
          The message was the other half of it. These are people who rented a car, not people
          shopping for one, and our outreach asked about their &ldquo;potential vehicle needs,&rdquo;
          wording they read as a rental follow-up. 65% of calls went unanswered, and the ones reached
          late had usually bought elsewhere. Taken together, the numbers pointed at targeting and copy
          rather than effort.
        </p>
        <div className="cs-note">
          All figures come from my own tracking, logged at disposition and reconciled weekly. They
          count only leads I actioned first. Enterprise Mobility&apos;s own reporting is measured
          differently and may vary.
        </div>
      </Section>

      <Section
        num="04 · The recommendation"
        title="Move the effort to calls, and fix the copy"
        sub="Four changes, each requiring no new headcount and no new tools."
      >
        <div className="cs-recs">
          {[
            ["01", "Automate the email step", "Workflow automation, no new headcount, freeing the manual email effort for live calls and text."],
            ["02", "Standardize the site-request reply", "One templated email so a customer asking for our site gets a fast, consistent answer."],
            ["03", "Tighten the call talk path", "A short script refinement that confirms market intent quickly and routes real buyers to the dealership."],
            ["04", "Reword the outreach copy", "Clearer purchase language in the email and text templates, cutting the confusion with the rental relationship."],
          ].map(([n, h, p]) => (
            <div key={n} className="cs-rec">
              <div className="rn">{n}</div>
              <div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="cs-body">
          Two of the four are copy changes. All four were written to be adopted without new budget or
          headcount.
        </p>
      </Section>

      <Section
        num="05 · The forecast, scored"
        title="I wrote down what would happen, then checked"
        sub="The recommendation shipped on July 10. That made the prediction falsifiable, so I scored it against eleven weeks of actuals."
      >
        <div className="cs-table cs-forecast">
          <div className="cs-thead">
            <div>Share of daily touches</div>
            <div>Before</div>
            <div>Predicted</div>
            <div>Actual</div>
          </div>
          {[
            ["9–10 AM rush", "47%", "~40%", "41%"],
            ["9 AM hour alone", "35%", "~26%", "26%"],
            ["11 AM – 1 PM trough", "16%", "~41%", "21%"],
            ["4–5 PM", "12%", "~9%", "16%"],
          ].map(([label, before, pred, actual]) => (
            <div key={label} className="cs-trow">
              <div className="lead">{label}</div>
              <div className="dim">{before}</div>
              <div className="dim">{pred}</div>
              <div className="hit">{actual}</div>
            </div>
          ))}
        </div>
        <p className="cs-body">
          The forecast held where the recommendation was adopted and missed where it wasn&apos;t.
          Filling the midday trough depended on moving the first call from four hours to two, which
          didn&apos;t ship, and the trough stayed flat at 21%. The miss is included here because the
          forecast was written down in June and could be checked against the actuals in August.
        </p>
      </Section>

      <Section
        num="06 · The economics"
        title="What a qualified buyer actually costs"
        sub="Nine weeks, 7,590 logged tasks across 2,400+ leads, priced out."
      >
        <div className="cs-grid g4">
          <div className="cs-kpi">
            <div className="n">$208</div>
            <div className="l">SDR labor per car sold, against 328 team cars</div>
          </div>
          <div className="cs-kpi">
            <div className="n">53%</div>
            <div className="l">Of an eight-hour seat used, even after call volume rose 86%</div>
          </div>
          <div className="cs-kpi">
            <div className="n sm">38 of ~140</div>
            <div className="l">Locations covered, so most of the network is unserved</div>
          </div>
          <div className="cs-kpi">
            <div className="n">6 → 4</div>
            <div className="l">Calls per lead under the tuned cadence, same weekly cost</div>
          </div>
        </div>
        <p className="cs-body">
          Cutting two low-yield touches is worth about twelve seats at full national coverage, roughly
          $9,100 a week, because the constraint is reachable leads rather than hours in the seat. Every
          input is labeled actual or estimate on the page it appears. The loaded-rate multiplier and my
          own task timings are mine, not company figures.
        </p>
      </Section>

      <Section
        num="07 · The deck"
        title="What I put in front of leadership"
        sub="Two reports, seven weeks apart. The midpoint report made the case for the change. The final one checked it against the actuals."
      >
        <DeckViewer />
        <p className="cs-body" style={{ fontSize: "14.5px", color: "#A8B0BD" }}>
          Shared with permission. Independently tracked by me during the season; Enterprise
          Mobility&apos;s own reporting may differ.
        </p>
      </Section>

      <Section
        num="08 · Limits"
        title="Where this could be wrong"
        sub="Included in the deck as presented."
      >
        <div className="cs-grid g3">
          <div className="cs-glasscard">
            <h3>Not a randomised test</h3>
            <p>The two cadences ran in sequence, so lead mix, volume and seasonality travel with the change. The largest caveat on the deck.</p>
          </div>
          <div className="cs-glasscard">
            <h3>Thin tail sample</h3>
            <p>The two touches I recommended cutting total 224 attempts. Zero appointments is directional, not decisive; the steady decay across all six call touches is the stronger evidence.</p>
          </div>
          <div className="cs-glasscard">
            <h3>One seat, two months</h3>
            <p>Every operational figure is my own queue across 40 logged days. Team numbers appear only in the economics, where they are labeled.</p>
          </div>
        </div>
        <p className="cs-body">
          These caveats were included in the deck as presented, rather than raised in the room
          afterward.
        </p>
      </Section>

      <Section num="09 · What it shows" title="Marketing that has to answer for itself">
        <p className="cs-body">
          Channel mix, message testing, timing, and the measurement to prove any of it, done from
          inside the funnel rather than from a deck. The changes I pitched in June shipped on July 10.
          The August report closed out every one of them, priced the work at $208 of labor per car
          sold, and showed that cutting two low-yield touches is worth about twelve seats at national
          coverage.
        </p>
      </Section>

      <Takeaway>
        The channel was not the only problem.{" "}
        <span className="accent">The copy was being misread.</span>
      </Takeaway>

      <Disclaimer>
        Describes self-initiated work performed during an internship at Enterprise Mobility, shared
        with permission. All figures come from my own tracking during the season, logged at
        disposition and reconciled weekly; Enterprise Mobility&apos;s internal reporting is measured
        differently and may vary. No customer data is reproduced. Views are the author&apos;s own and
        do not represent Enterprise Mobility.
      </Disclaimer>
    </div>
  );
}
