import { Mail, Linkedin } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Team Member Name",
      title: "Title / Role",
      image: "/images/team-member-1.jpg",
      bio: "Add a compelling bio that highlights their background, experience, and value-add approach to founder partnerships. Include relevant achievements and investment philosophy.",
      email: "email@legacytransitionpartners.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 2,
      name: "Team Member Name",
      title: "Title / Role",
      image: "/images/team-member-2.jpg",
      bio: "Add a compelling bio that highlights their background, experience, and value-add approach to founder partnerships. Include relevant achievements and investment philosophy.",
      email: "email@legacytransitionpartners.com",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section id="team" className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Team</h2>
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
              <p className="text-lg font-semibold text-muted-foreground mb-4">{member.title}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {member.bio}
              </p>
              <div className="flex gap-6">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors font-semibold"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
