import { CaseHero, Section, MetaDot, Takeaway, Disclaimer } from "./parts";

export default function RiseBody() {
  return (
    <div className="cs-wrap">
      <CaseHero
        tag="Nonprofit · Earned media plan"
        title={
          <>
            Nine outlets, four angles, <span className="accent">no ad budget.</span>
          </>
        }
        lede="The amplification plan for Rise's Annual Impact Report, written for a volunteer board with no budget, built around the two assets it actually owns: local press relationships and its members' own networks."
        meta={
          <>
            <span>Michael A. West III</span>
            <MetaDot />
            <span>Marketing Subcommittee, Rise Young Professionals Board</span>
            <MetaDot />
            <span>St. Louis, MO · 2025–2026</span>
          </>
        }
      />

      <Section
        first
        num="01 · The challenge"
        title="One launch, and a short window of attention."
        sub="Rise publishes an Annual Impact Report on its work building stronger, more equitable neighborhoods across the St. Louis region. The organization runs its own firmwide rollout."
      >
        <p className="cs-body">
          The question for the Young Professionals Board was{" "}
          <strong>what it could add that the firmwide rollout could not.</strong> Duplicating the
          launch would spend the resource volunteers have least of, which is time. The plan was scoped
          to the channels the board owns.
        </p>
      </Section>

      <Section
        num="02 · The strategy"
        title="Lead with the story, not the report"
        sub="Reporters cover neighborhoods, people, and outcomes. The report is the source, not the headline."
      >
        <p className="cs-body">
          That question set the scope of the plan. Board members have day jobs, professional networks,
          and standing in the community, which is what earned media outreach runs on. Success was
          defined narrowly: the report in front of young professionals, partners and sponsors; at
          least one earned local media mention; and a steady stream of member-driven sharing tied back
          to the mission.
        </p>
        <div className="cs-grid g4">
          {[
            ["Audience 01", "Young professionals", "Emerging leaders drawn to connection, leadership, and community."],
            ["Audience 02", "Prospective members", "People looking for a meaningful way to get involved in the region."],
            ["Audience 03", "Partners & sponsors", "Corporate supporters and community organizations who amplify the work."],
            ["Audience 04", "Local media", "Reporters and neighborhood channels covering community development."],
          ].map(([k, h, p]) => (
            <div key={k} className="cs-flatcard">
              <div className="k">{k}</div>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        num="03 · The plan"
        title="Tactics scoped to a volunteer board"
        sub="Each tactic is limited to what a board member can do between meetings."
      >
        <div className="cs-grid g3">
          {[
            ["Owned", "One tracked link", "The report linked from the board's section of the site, and a single UTM behind everything the board shares, so engagement is measurable at all."],
            ["Email", "Lead item, plus a thank-you", "The report leads the next board newsletter, and partners and sponsors get a short dedicated note that thanks them while it asks."],
            ["Social", "A three-post series", "LinkedIn-first: a launch post, an impact highlight, and a member or partner spotlight, with every board member resharing on day one."],
            ["Activation", "A two-minute share kit", "The link, two caption options, and one graphic, so sharing takes under two minutes."],
            ["Partners", "Ready-made assets", "Sponsors get suggested copy and graphics so amplifying takes no work on their side, and they are recognized publicly when they do."],
            ["Copy", "Written, not briefed", "Boilerplate, the LinkedIn launch post, the sponsor email, and a media pitch template, drafted to Rise's messaging guidelines so no one starts from a blank page."],
          ].map(([k, h, p]) => (
            <div key={h} className="cs-glasscard">
              <div className="k">{k}</div>
              <h3 style={{ margin: "10px 0 8px" }}>{h}</h3>
              <p style={{ marginTop: 0 }}>{p}</p>
            </div>
          ))}
        </div>

        <div className="cs-grid g2">
          <div className="cs-excerpt">
            <div className="k">From the plan · LinkedIn launch post</div>
            <p>
              Rise&apos;s 2025–2026 Annual Impact Report is here. It captures how Rise partners with
              communities to build stronger, more equitable St. Louis area neighborhoods, and the
              outcomes that work is creating across the region.
            </p>
            <p>
              As the Rise Young Professionals (YP) Board, we&apos;re proud to support this mission
              through collaborative project-based work, resource development, and community
              engagement.
            </p>
          </div>
          <div className="cs-excerpt">
            <div className="k">From the plan · Media pitch template</div>
            <p className="muted">
              <span>Subject:</span> Story idea: young professionals backing neighborhood development in
              St. Louis
            </p>
            <p>
              Hi [Reporter], Rise Community Development just released its annual impact report on
              efforts to build stronger, more equitable St. Louis neighborhoods, including [specific
              development or result]. Alongside it, a board of local young professionals is
              volunteering their skills to support that work.
            </p>
          </div>
        </div>
        <p className="cs-body" style={{ fontSize: "14.5px", color: "#A8B0BD" }}>
          Copy written to Rise&apos;s messaging guidelines: full name on first reference,
          &ldquo;developments&rdquo; rather than &ldquo;projects,&rdquo; and a tone that stays
          welcoming without going soft. The copy was pre-written so volunteers edit a draft rather
          than start one.
        </p>
      </Section>

      <Section
        num="04 · The PR list"
        title="Nine outlets, chosen for fit"
        sub="A handful of well-matched St. Louis outlets will outperform a blanket send, and a volunteer team can actually work a list this size."
      >
        <div className="cs-table cs-prlist">
          <div className="cs-thead">
            <div>Outlet</div>
            <div>Type</div>
            <div>The angle</div>
          </div>
          {[
            ["St. Louis Business Journal", "Business weekly", "Neighborhood development milestones and young-professional civic leadership."],
            ["The St. Louis American", "Weekly", "The best fit for equitable, neighborhood-centered development, and high trust in the communities Rise partners with."],
            ["St. Louis Magazine", "City monthly", "Business newsletter home for a young-professional human-interest angle and event listings."],
            ["NextSTL", "Development news", "Civically engaged readership; a natural fit for development updates and impact data."],
            ["St. Louis Public Radio", "NPR member", "Economy and housing coverage with strong reach among partners and sponsors."],
            ["Post-Dispatch · RFT · Nine PBS · neighborhood channels", "Broad + hyperlocal", "Regional metro reach, event and culture coverage, longer-form community storytelling, and association newsletters that reach the neighborhoods directly."],
          ].map(([outlet, type, angle]) => (
            <div key={outlet} className="cs-trow">
              <div className="lead">{outlet}</div>
              <div className="dim">{type}</div>
              <div className="dim">{angle}</div>
            </div>
          ))}
        </div>
        <p className="cs-body">
          A neighborhood milestone framed around the people in it; young professionals volunteering
          their skills; the report&apos;s regional data as a numbers story; and an event tie-in. Then
          a five-step process: approve the angle with Rise&apos;s communications lead, assemble the
          press kit, pitch one outlet at a time with a personalized note, follow up once a week later,
          and log everything in a shared sheet so next year&apos;s board inherits a working list
          instead of starting over.
        </p>
        <div className="cs-note">
          Reporter names and contact details are kept in the internal document, not published here.
          All media contact routes through Rise&apos;s communications lead for approval before
          pitching.
        </div>
      </Section>

      <Section num="05 · Timeline & measurement" title="Six weeks, and four numbers to collect">
        <div className="cs-timeline">
          {[
            ["Weeks −2 to −1", "Link and UTM confirmed; share kit and press kit built; angles approved; copy drafted."],
            ["Launch week", "LinkedIn launch post, full board activation, sponsor note, PR outreach opens."],
            ["Weeks +1 to +2", "Highlight and spotlight posts; media follow-ups; newsletter feature."],
            ["Weeks +3 to +4", "Reshare earned coverage; final push; tie into the next signature event."],
            ["Week +6", "Review results, record one or two lessons for next year's board."],
          ].map(([k, p]) => (
            <div key={k}>
              <div className="k">{k}</div>
              <p>{p}</p>
            </div>
          ))}
        </div>
        <div className="cs-grid g4">
          {[
            ["Tracked clicks", "On the board's UTM link"],
            ["Post reach", "LinkedIn reactions, comments, reshares"],
            ["Who shared", "Members and sponsors who amplified"],
            ["Earned media", "Outlets pitched, replies, published mentions"],
          ].map(([n, l]) => (
            <div key={n} className="cs-kpi">
              <div className="n sm">{n}</div>
              <div className="l">{l}</div>
            </div>
          ))}
        </div>
        <p className="cs-body">
          The plan is with the Marketing Subcommittee for review; the timeline anchors to Rise&apos;s
          confirmed report launch date. Results will be reported here once the window closes, measured
          rather than estimated.
        </p>
      </Section>

      <Section num="06 · What it shows" title="Written to the constraints of a volunteer board">
        <p className="cs-body">
          The plan was written for a group of unpaid volunteers with day jobs, so scope was cut, the
          copy was pre-written, and the measurement was kept small enough to collect. Those
          constraints shaped every section of it.
        </p>
      </Section>

      <Takeaway>
        Scope was the real constraint,{" "}
        <span className="accent">so the plan was built around it.</span>
      </Takeaway>

      <Disclaimer>
        Describes volunteer marketing work for the Rise Young Professionals Board. The underlying
        document is a draft prepared for Marketing Subcommittee review; media contacts and unpublished
        organizational details are not reproduced here. Views are the author&apos;s own.
      </Disclaimer>
    </div>
  );
}
