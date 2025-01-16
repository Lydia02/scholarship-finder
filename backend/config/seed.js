const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const schools = [
  {
    name: "UC Berkeley",
    state: "California",
    scholarships: [
      {
        name: "Berkeley Community Initiative",
        type: "Community-based",
        degreeLevel: "Undergraduate",
        eligibility: "Community service in Bay Area",
        deadline: new Date("2025-07-10"),
        website: "https://berkeley.edu/scholarships/community",
      },
    ],
  },
  {
    name: "MIT",
    state: "Massachusetts",
    scholarships: [
      {
        name: "MIT Research Excellence Scholarship",
        type: "Research-based",
        degreeLevel: "Graduate",
        eligibility: "Innovative research contributions",
        deadline: new Date("2025-02-20"),
        website: "https://research.mit.edu/scholarships",
      },
    ],
  },
  {
    name: "Harvard University",
    state: "Massachusetts",
    scholarships: [
      {
        name: "Harvard Leadership Award",
        type: "Leadership-based",
        degreeLevel: "Undergraduate",
        eligibility: "Leadership in extracurricular activities",
        deadline: new Date("2025-03-15"),
        website: "https://scholarships.harvard.edu/leadership",
      },
    ],
  },
  {
    name: "Stanford University",
    state: "California",
    scholarships: [
      {
        name: "Stanford Tech Pioneers Fund",
        type: "Innovation-based",
        degreeLevel: "Graduate",
        eligibility: "Technology innovation projects",
        deadline: new Date("2025-03-01"),
        website: "https://innovation.stanford.edu/scholarships",
      },
    ],
  },
  {
    name: "University of Texas at Austin",
    state: "Texas",
    scholarships: [
      {
        name: "Texas Tomorrow Leadership Scholarship",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "High school leadership & academic excellence",
        deadline: new Date("2025-11-15"),
        website: "https://admissions.utexas.edu/apply/scholarships",
      },
    ],
  },
  {
    name: "University of Florida",
    state: "Florida",
    scholarships: [
      {
        name: "Florida Scholars Award",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Top 10% of graduating class",
        deadline: new Date("2025-05-30"),
        website: "https://ufl.edu/scholarships",
      },
    ],
  },
  {
    name: "University of Michigan",
    state: "Michigan",
    scholarships: [
      {
        name: "Michigan Future Engineers Scholarship",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Outstanding performance in science subjects",
        deadline: new Date("2025-09-20"),
        website: "https://scholarships.umich.edu/engineering",
      },
    ],
  },
  {
    name: "UCLA",
    state: "California",
    scholarships: [
      {
        name: "UCLA Arts Scholarship",
        type: "Talent-based",
        degreeLevel: "Undergraduate",
        eligibility: "Exceptional talent in visual arts",
        deadline: new Date("2025-01-15"),
        website: "https://arts.ucla.edu/scholarships",
      },
    ],
  },
  {
    name: "Columbia University",
    state: "New York",
    scholarships: [
      {
        name: "Columbia New Media Fellowship",
        type: "Research-based",
        degreeLevel: "Graduate",
        eligibility: "Research in digital media fields",
        deadline: new Date("2025-10-05"),
        website: "https://media.columbia.edu/scholarships",
      },
    ],
  },
  {
    name: "University of Chicago",
    state: "Illinois",
    scholarships: [
      {
        name: "Chicago Scholars Program",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Academic excellence and civic engagement",
        deadline: new Date("2025-12-01"),
        website: "https://scholarships.uchicago.edu",
      },
    ],
  },

  {
    name: "Cornell University",
    state: "New York",
    scholarships: [
      {
        name: "Cornell Emerging Leaders Scholarship",
        type: "Leadership-based",
        degreeLevel: "Undergraduate",
        eligibility: "Demonstrated leadership potential",
        deadline: new Date("2025-08-31"),
        website: "https://admissions.cornell.edu/scholarships/leaders",
      },
    ],
  },
  {
    name: "Georgia Institute of Technology",
    state: "Georgia",
    scholarships: [
      {
        name: "Georgia Tech Research Grant",
        type: "Research-based",
        degreeLevel: "Graduate",
        eligibility: "Significant research in engineering",
        deadline: new Date("2025-06-01"),
        website: "https://gatech.edu/scholarships/research",
      },
    ],
  },
  {
    name: "University of Washington",
    state: "Washington",
    scholarships: [
      {
        name: "Washington Pioneers Scholarship",
        type: "Innovation-based",
        degreeLevel: "Undergraduate",
        eligibility: "Innovative contributions to technology",
        deadline: new Date("2025-10-25"),
        website: "https://uw.edu/scholarships/pioneers",
      },
    ],
  },
  {
    name: "University of Pennsylvania",
    state: "Pennsylvania",
    scholarships: [
      {
        name: "Penn Innovation Scholars",
        type: "Merit-based",
        degreeLevel: "Graduate",
        eligibility: "Contributions to innovative projects",
        deadline: new Date("2025-11-20"),
        website: "https://upenn.edu/scholarships/innovation",
      },
    ],
  },
  {
    name: "Duke University",
    state: "North Carolina",
    scholarships: [
      {
        name: "Duke Leaders in Innovation Fellowship",
        type: "Fellowship",
        degreeLevel: "Graduate",
        eligibility: "Leadership in innovative research",
        deadline: new Date("2025-04-15"),
        website: "https://duke.edu/scholarships/innovation",
      },
    ],
  },
  {
    name: "Vanderbilt University",
    state: "Tennessee",
    scholarships: [
      {
        name: "Vanderbilt Academic Excellence Award",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Top 5% of high school class",
        deadline: new Date("2025-09-30"),
        website: "https://vanderbilt.edu/scholarships/academic",
      },
    ],
  },
  {
    name: "University of Southern California",
    state: "California",
    scholarships: [
      {
        name: "USC Community Impact Award",
        type: "Community-based",
        degreeLevel: "Undergraduate",
        eligibility: "Impact on local communities",
        deadline: new Date("2025-03-30"),
        website: "https://usc.edu/scholarships/community",
      },
    ],
  },
  {
    name: "New York University",
    state: "New York",
    scholarships: [
      {
        name: "NYU Future Leaders Scholarship",
        type: "Leadership-based",
        degreeLevel: "Undergraduate",
        eligibility: "Proven leadership abilities",
        deadline: new Date("2025-01-20"),
        website: "https://nyu.edu/scholarships/leaders",
      },
    ],
  },
  {
    name: "Princeton University",
    state: "New Jersey",
    scholarships: [
      {
        name: "Princeton Research Grant",
        type: "Research-based",
        degreeLevel: "Graduate",
        eligibility: "Outstanding research proposal",
        deadline: new Date("2025-07-22"),
        website: "https://princeton.edu/scholarships/research",
      },
    ],
  },
  {
    name: "University of Illinois at Urbana-Champaign",
    state: "Illinois",
    scholarships: [
      {
        name: "Illinois Innovation Scholarship",
        type: "Innovation-based",
        degreeLevel: "Undergraduate",
        eligibility: "Innovative project or invention",
        deadline: new Date("2025-12-15"),
        website: "https://illinois.edu/scholarships/innovation",
      },
    ],
  },
  {
    name: "Northwestern University",
    state: "Illinois",
    scholarships: [
      {
        name: "Northwestern Creative Minds Scholarship",
        type: "Creative-based",
        degreeLevel: "Undergraduate",
        eligibility: "Exceptional creativity in arts or media",
        deadline: new Date("2025-05-05"),
        website: "https://northwestern.edu/scholarships/creative",
      },
    ],
  },
  {
    name: "Arizona State University",
    state: "Arizona",
    scholarships: [
      {
        name: "ASU Sun Devil Creativity Grant",
        type: "Creativity-based",
        degreeLevel: "Graduate",
        eligibility: "Creative solutions to environmental challenges",
        deadline: new Date("2025-08-15"),
        website: "https://asu.edu/scholarships/creativity",
      },
    ],
  },
  {
    name: "University of Miami",
    state: "Florida",
    scholarships: [
      {
        name: "Miami Service Excellence Scholarship",
        type: "Service-based",
        degreeLevel: "Undergraduate",
        eligibility: "Exceptional community service record",
        deadline: new Date("2025-11-01"),
        website: "https://miami.edu/scholarships/service",
      },
    ],
  },
  {
    name: "Ohio State University",
    state: "Ohio",
    scholarships: [
      {
        name: "Ohio State Innovators Award",
        type: "Innovation-based",
        degreeLevel: "Undergraduate",
        eligibility: "Significant innovation in any field",
        deadline: new Date("2025-09-15"),
        website: "https://osu.edu/scholarships/innovators",
      },
    ],
  },
  {
    name: "University of Colorado Boulder",
    state: "Colorado",
    scholarships: [
      {
        name: "Colorado Boulder Environmental Scholarship",
        type: "Environmental-based",
        degreeLevel: "Undergraduate",
        eligibility: "Active involvement in environmental initiatives",
        deadline: new Date("2025-10-10"),
        website: "https://colorado.edu/scholarships/environmental",
      },
    ],
  },

  {
    name: "The National STEM Foundation",
    state: "Nationwide",
    scholarships: [
      {
        name: "Future Scientists of America Grant",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Outstanding achievement in STEM fields",
        deadline: new Date("2025-03-15"),
        website: "https://nationalstemfoundation.org/scholarships",
      },
    ],
  },
  {
    name: "Artists United Fund",
    state: "Nationwide",
    scholarships: [
      {
        name: "Emerging Artist Scholarship",
        type: "Talent-based",
        degreeLevel: "Undergraduate",
        eligibility: "Exceptional talent in visual or performing arts",
        deadline: new Date("2025-04-01"),
        website: "https://artistsunitedfund.org/scholarships",
      },
    ],
  },
  {
    name: "Women in Technology International",
    state: "Nationwide",
    scholarships: [
      {
        name: "Women Tech Innovators Award",
        type: "Merit-based",
        degreeLevel: "Graduate",
        eligibility: "Female students excelling in technology",
        deadline: new Date("2025-05-20"),
        website: "https://womentech.org/innovators",
      },
    ],
  },
  {
    name: "American Business Leaders Foundation",
    state: "Nationwide",
    scholarships: [
      {
        name: "Future Business Leaders Scholarship",
        type: "Leadership-based",
        degreeLevel: "Undergraduate",
        eligibility:
          "Demonstrated leadership in business-related extracurriculars",
        deadline: new Date("2025-06-30"),
        website: "https://businessleaders.org/scholarships",
      },
    ],
  },
  {
    name: "Environmental Advocates Fund",
    state: "Nationwide",
    scholarships: [
      {
        name: "Green Planet Scholarship",
        type: "Activism-based",
        degreeLevel: "Undergraduate",
        eligibility: "Active in environmental activism",
        deadline: new Date("2025-07-15"),
        website: "https://environmentalfund.org/scholarships",
      },
    ],
  },
  {
    name: "Global Health Foundation",
    state: "Nationwide",
    scholarships: [
      {
        name: "Global Health Scholars Program",
        type: "Merit-based",
        degreeLevel: "Graduate",
        eligibility: "Research in global health issues",
        deadline: new Date("2025-08-01"),
        website: "https://globalhealthfoundation.org/scholarships",
      },
    ],
  },
  {
    name: "American History Enthusiasts Society",
    state: "Nationwide",
    scholarships: [
      {
        name: "Historical Research Award",
        type: "Research-based",
        degreeLevel: "Undergraduate",
        eligibility: "Research projects related to American history",
        deadline: new Date("2025-09-10"),
        website: "https://ahesociety.org/scholarships",
      },
    ],
  },
  {
    name: "Innovation in Education Fund",
    state: "Nationwide",
    scholarships: [
      {
        name: "Education Innovators Grant",
        type: "Innovation-based",
        degreeLevel: "Graduate",
        eligibility: "Innovative teaching methods or educational technology",
        deadline: new Date("2025-10-05"),
        website: "https://ineducationfund.org/scholarships",
      },
    ],
  },
  {
    name: "American Medical Scholars Foundation",
    state: "Nationwide",
    scholarships: [
      {
        name: "Future Medical Leaders Award",
        type: "Merit-based",
        degreeLevel: "Graduate",
        eligibility: "Medical students with outstanding academic records",
        deadline: new Date("2025-11-01"),
        website: "https://amsfoundation.org/scholarships",
      },
    ],
  },
  {
    name: "Cybersecurity Professionals Fund",
    state: "Nationwide",
    scholarships: [
      {
        name: "Cybersecurity Future Leaders Program",
        type: "Career-based",
        degreeLevel: "Graduate",
        eligibility: "Demonstrated interest in pursuing a cybersecurity career",
        deadline: new Date("2025-12-20"),
        website: "https://cyberprofessionalsfund.org/scholarships",
      },
    ],
  },
  {
    name: "Public Policy Scholars Fund",
    state: "Nationwide",
    scholarships: [
      {
        name: "Policy Makers Scholarship",
        type: "Leadership-based",
        degreeLevel: "Graduate",
        eligibility: "Students engaged in public policy",
        deadline: new Date("2026-01-10"),
        website: "https://publicpolicyscholars.org/scholarships",
      },
    ],
  },
  {
    name: "Literary Arts Foundation",
    state: "Nationwide",
    scholarships: [
      {
        name: "Emerging Writers Grant",
        type: "Talent-based",
        degreeLevel: "Undergraduate",
        eligibility: "Promising young writers",
        deadline: new Date("2026-02-15"),
        website: "https://literaryartsfoundation.org/grants",
      },
    ],
  },
  {
    name: "Engineering Tomorrow Fund",
    state: "Nationwide",
    scholarships: [
      {
        name: "Future Engineers Scholarship",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Engineering students with excellent academic records",
        deadline: new Date("2026-03-30"),
        website: "https://engineeringtomorrow.org/scholarships",
      },
    ],
  },
  {
    name: "Cultural Heritage Foundation",
    state: "Nationwide",
    scholarships: [
      {
        name: "Cultural Preservation Scholarship",
        type: "Cultural-based",
        degreeLevel: "Graduate",
        eligibility: "Studies focused on preserving cultural heritage",
        deadline: new Date("2026-04-20"),
        website: "https://culturalheritagefoundation.org/scholarships",
      },
    ],
  },
  {
    name: "American Innovators Fund",
    state: "Nationwide",
    scholarships: [
      {
        name: "Innovators of Tomorrow Award",
        type: "Innovation-based",
        degreeLevel: "Undergraduate",
        eligibility:
          "Students who have developed innovative products or solutions",
        deadline: new Date("2026-05-05"),
        website: "https://innovatorsfund.org/scholarships",
      },
    ],
  },
  {
    name: "Scholarships.com Foundation",
    state: "Nationwide",
    scholarships: [
      {
        name: "Scholars Helping Collars",
        type: "Service-based",
        degreeLevel: "Undergraduate",
        eligibility: "Students who have demonstrated efforts in animal welfare",
        deadline: new Date("2025-02-28"),
        website: "https://scholarships.com/scholars-helping-collars",
      },
    ],
  },
  {
    name: "Fastweb Scholarship Network",
    state: "Nationwide",
    scholarships: [
      {
        name: "Tech Leaders of Tomorrow Award",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility:
          "Students pursuing technology degrees with a GPA of 3.5 or higher",
        deadline: new Date("2025-03-15"),
        website: "https://fastweb.com/tech-leaders",
      },
    ],
  },
  {
    name: "The College Board",
    state: "Nationwide",
    scholarships: [
      {
        name: "College Board Opportunity Scholarships",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Completion of the College Board Opportunity steps",
        deadline: new Date("2025-06-30"),
        website: "https://collegeboard.org/opportunity-scholarships",
      },
    ],
  },
  {
    name: "Cappex Easy College Money Scholarship",
    state: "Nationwide",
    scholarships: [
      {
        name: "Cappex Easy College Money",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "High school or college students with a Cappex profile",
        deadline: new Date("2025-07-01"),
        website: "https://cappex.com/scholarships/easy-money",
      },
    ],
  },
  {
    name: "Chegg Scholarships",
    state: "Nationwide",
    scholarships: [
      {
        name: "Chegg Monthly Scholarship",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Short essay submission",
        deadline: new Date("2025-08-15"),
        website: "https://chegg.com/scholarships/monthly",
      },
    ],
  },
  {
    name: "Unigo Scholarship Experts",
    state: "Nationwide",
    scholarships: [
      {
        name: "Unigo $10K Scholarship",
        type: "Creative-based",
        degreeLevel: "Undergraduate",
        eligibility: "Creative essay on a given topic",
        deadline: new Date("2025-12-31"),
        website:
          "https://unigo.com/scholarships/our-scholarships/10k-scholarship",
      },
    ],
  },
  {
    name: "Peterson’s Scholarship Database",
    state: "Nationwide",
    scholarships: [
      {
        name: "Peterson's Undergraduate Scholarship",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Essay on academic goals and professional aspirations",
        deadline: new Date("2026-01-15"),
        website: "https://petersons.com/scholarship/undergraduate-scholarship",
      },
    ],
  },
  {
    name: "Scholly Platform",
    state: "Nationwide",
    scholarships: [
      {
        name: "Scholly Growth Scholarship",
        type: "Development-based",
        degreeLevel: "Undergraduate",
        eligibility: "Students dedicated to personal development and growth",
        deadline: new Date("2026-03-01"),
        website: "https://myscholly.com/growth-scholarship",
      },
    ],
  },
  {
    name: "Niche Scholarship Search",
    state: "Nationwide",
    scholarships: [
      {
        name: "Niche $2,000 No Essay Scholarship",
        type: "Random-draw",
        degreeLevel: "Undergraduate",
        eligibility: "Monthly random draw for registrants",
        deadline: new Date("2026-04-20"),
        website: "https://niche.com/scholarships/no-essay-scholarship",
      },
    ],
  },
  {
    name: "Bold.org Scholarships",
    state: "Nationwide",
    scholarships: [
      {
        name: "Be Bold No-Essay Scholarship",
        type: "Random-draw",
        degreeLevel: "Undergraduate",
        eligibility:
          "No essay required, based on Bold.org profile completeness",
        deadline: new Date("2026-05-30"),
        website: "https://bold.org/scholarships/be-bold-scholarship",
      },
    ],
  },
  {
    name: "The Scholarship Points Program",
    state: "Nationwide",
    scholarships: [
      {
        name: "ScholarshipPoints $10,000 Scholarship",
        type: "Random-draw",
        degreeLevel: "Undergraduate",
        eligibility: "Earn points by completing activities",
        deadline: new Date("2026-06-30"),
        website: "https://scholarshippoints.com/win10k",
      },
    ],
  },
  {
    name: "Discover Student Loans Scholarship Award",
    state: "Nationwide",
    scholarships: [
      {
        name: "Discover Scholarship Award",
        type: "Random-draw",
        degreeLevel: "Undergraduate",
        eligibility: "Draw for Discover Student Loans customers",
        deadline: new Date("2026-08-15"),
        website: "https://discover.com/student-loans/scholarships/award.html",
      },
    ],
  },
  {
    name: "Education Matters Scholarship",
    state: "Nationwide",
    scholarships: [
      {
        name: "Education Matters $5K Scholarship",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Essay on the importance of education",
        deadline: new Date("2026-11-30"),
        website:
          "https://unigo.com/scholarships/our-scholarships/education-matters-scholarship",
      },
    ],
  },
  {
    name: "The Sallie Mae Fund",
    state: "Nationwide",
    scholarships: [
      {
        name: "The Sallie Mae Plan for College Sweepstakes",
        type: "Sweepstakes",
        degreeLevel: "Undergraduate",
        eligibility: "Random draw for those planning for college",
        deadline: new Date("2026-12-01"),
        website:
          "https://salliemae.com/college-planning/tools/scholarship-search/",
      },
    ],
  },
  {
    name: "Zinch Weekly Scholarship",
    state: "Nationwide",
    scholarships: [
      {
        name: "Zinch $1,000 Weekly Scholarship",
        type: "Merit-based",
        degreeLevel: "Undergraduate",
        eligibility: "Weekly essay contest",
        deadline: new Date("2027-01-01"),
        website: "https://zinch.com/scholarships/weekly-three-sentence-essay",
      },
    ],
  },
];

async function main() {
  for (const school of schools) {
    await prisma.school.create({
      data: {
        name: school.name,
        state: school.state,
        scholarships: {
          create: school.scholarships,
        },
      },
    });
  }
}

main()
  .then(() => {
    console.log("Data seeded successfully");
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
