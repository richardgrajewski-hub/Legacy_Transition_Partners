import { Mail, Linkedin } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Mike Podelnyk",
      title: "Founding Partner",
      image: "/images/mike-headshot.jpg",
      bio: "Mike brings over 17 years of extensive private equity, investment banking, and capital markets experience, having closed more than 40 transactions in partnership with private equity sponsors, management teams, and investors. Previously, Mike was an Investment Professional at Huron Capital Partners ($2Bn+ AUM), where he focused on evaluating and executing LBOs and buy-and-build strategies for both a $600MM buyout fund and a $125MM small-cap fund, holding multiple board roles and driving portfolio company value creation. He also assisted in the development and growth of Hudson Avenue Partners, a startup Investment Bank, where he partnered with PE sponsors and founder-led companies to structure and advise on capital strategies. Prior to his investing roles, Mike advised on over $3 billion of M&A, debt financings, and equity recapitalizations in Bank of America Merrill Lynch's NYC Consumer & Retail Investment Banking group. He also underwrote $1.5 billion of senior secured facilities for founder-owned companies and financial sponsors at Wells Fargo Capital Finance. A former professional minor-league hockey player, Mike brings a competitive, disciplined, and team-oriented approach to leadership and value creation.",
      email: "mike@legacytransitionpartners.com",
      linkedin: "https://www.linkedin.com/in/michael-podelnyk/"
    },
    {
      id: 2,
      name: "Rich Grajewski",
      title: "Founding Partner",
      image: "/images/rich-headshot.jpg",
      bio: "Rich has spent his career at several leading financial institutions and brings a mix of investing, business development, and lending experience to the firm. Prior to joining, Rich was the Head of Business Development at MKH Capital Partners, a $750M AUM single-family office investment fund, where he focused on sourcing and structuring platform investments. He also held roles as a Principal of Business Development at Huron Capital Partners ($2Bn+ AUM) and as a Vice President in the middle-market lending group at Fifth Third Bank, where he managed a portfolio of founder-owned and sponsor-backed companies. Throughout his career, Rich has developed expertise in post-acquisition value creation, including portfolio company operational improvements, management recruitment, and go-to-market strategy optimization. Rich received his MBA from Eastern Michigan University and a BA in Economics from the University of Michigan.",
      email: "rich@legacytransitionpartners.com",
      linkedin: "https://www.linkedin.com/in/richard-grajewski/"
    }
  ];

  return (
    <section id="team" className="section-spacing bg-white">
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
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow" style={{fontSize: '20px'}}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
