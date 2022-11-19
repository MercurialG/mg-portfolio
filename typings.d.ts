interface SanityBody {
  _createdAt: string;
  _id: string;
  rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: Image;
  profilePic: Image;
  about: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface TSkill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  linkToSrc: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  linkToSrc: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  link: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  jobTitle: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyEmployed: boolean;
  points: string[];
  technologies: Technology[];
}
