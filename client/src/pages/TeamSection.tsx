import { Mail, Linkedin } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Mike Podelnyk",
      title: "Founding Partner",
      image: "/images/mike-headshot.jpg",
      bio: "Mike has spent his career across private equity, investment banking, and capital markets, bringing a blend of investing, transaction execution, and value-creation experience to Legacy Transition Partners. Prior to founding LTP, Mike was an Investment Professional at Huron Capital Partners ($2Bn+ AUM), where he evaluated and executed leveraged buyouts and buy-and-build strategies across both a $600M buyout fund and a $125M small-cap fund, serving in portfolio company board and operating roles.\n\nMike also helped build Hudson Avenue Partners' investment banking platform, working with private equity sponsors and founder-led businesses on capital strategy and growth initiatives. Earlier in his career, Mike worked in Bank of America Merrill Lynch's Consumer & Retail Investment Banking group in New York, advising founders and management teams on mergers and acquisitions, debt financings, and equity recapitalizations. He began his career at Wells Fargo Capital Finance, underwriting senior secured credit facilities for founder-owned businesses and financial sponsors.\n\nA former professional minor-league hockey player, Mike brings a disciplined, competitive, and team-oriented approach to building and leading businesses.\n\nMike earned his MBA with Distinction from the University of Michigan's Ross School of Business and holds a BBA in Finance from Western Michigan University.\n\nMike is a Michigan native and lives there with his wife and two children. Outside of work, he enjoys spending time with his family, shepherding them to their many activities, playing hockey, snowboarding, and spending time on the lake in Northern Michigan.",
      email: "mike@legacytransitionpartners.com",
      linkedin: "https://www.linkedin.com/in/michael-podelnyk/"
    },
    {
      id: 2,
      name: "Rich Grajewski",
      title: "Founding Partner",
      image: "/images/rich-headshot.jpg",
      bio: "Rich has spent his career across private equity, business development, and lending, bringing extensive experience in sourcing, structuring, and value creation to Legacy Transition Partners. Prior to founding LTP, Rich was the Head of Business Development at MKH Capital Partners ($750M AUM), a single-family office investment fund, where he sourced and structured platform investments and managed the investment lifecycle. He also served as a Principal of Business Development at Huron Capital Partners ($2Bn+ AUM) and as a Vice President in the middle-market lending group at Fifth Third Bank, where he built and managed a portfolio of founder-owned and sponsor-backed companies.\n\nThroughout his career, Rich has developed deep expertise in post-acquisition value creation, including operational improvements, management recruitment, market strategy optimization, and building sustainable competitive advantages for portfolio companies.\n\nRich earned his MBA from Eastern Michigan University and holds a BA in Economics from the University of Michigan.\n\nRich was born and raised in the Metro Detroit area and currently lives there with his wife and two children. Outside of work, Rich is actively involved in his kids' various activities, plays hockey, and is working toward becoming a single-digit handicap golfer.",
      email: "rich@legacytransitionpartners.com",
      linkedin: "https://www.linkedin.com/in/richard-grajewski/"
    }
  ];

  return (
    <section id="team" className="section-spacing bg-white pattern-diagonal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#2c4a7c'}}>Team</h2>
          <div className="accent-divider mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              <div className="mb-6 overflow-hidden rounded-lg bg-gray-200 h-96 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain" style={{backgroundColor: '#ffffff'}}
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-lg font-semibold text-muted-foreground mb-4" style={{fontSize: '20px'}}>{member.title}</p>
              <div className="flex gap-6 mb-6">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors font-semibold" style={{fontSize: '20px'}}
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors font-semibold" style={{fontSize: '20px'}}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow whitespace-pre-wrap" style={{fontSize: '20px'}}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
