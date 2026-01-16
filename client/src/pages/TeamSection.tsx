import { Mail, Linkedin } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Mike Podelnyk",
      title: "Founding Partner",
      image: "/images/mike-headshot.jpg",
      bio: "Mike brings extensive experience in private equity and operational excellence. With a proven track record in founder transitions and growth strategy, he is dedicated to building lasting partnerships with exceptional businesses.",
      email: "mike@legacytransitionpartners.com",
      linkedin: "https://www.linkedin.com/in/michael-podelnyk/"
    },
    {
      id: 2,
      name: "Rich Grajewski",
      title: "Founding Partner",
      image: "/images/rich-headshot-final.png",
      bio: "Rich combines deep operational expertise with a collaborative approach to founder partnerships. His background in growth operations and investment strategy enables him to unlock transformational value for portfolio companies.",
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
              <div className="mb-6 overflow-hidden rounded-lg bg-gray-200 h-96">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
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
