import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/projet-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - July 2024",
    role: "DevOps/Backend Engineer",
    company: "FeverTokens, France",
    description: `Developed a Web 3.0 application with a hybrid Cloud/Blockchain backend.
    Migrated application code from SDK v2 to SDK v3.`,
    technologies: ["TypeScript", "SDK", "AWS Services", "Jest Framework", "Postman"],
  },
  {
    year: "February 2024 - July 2024",
    role: "DevOps Engineer",
    company: "Inwi, Casablanca, Morocco",
    description: `mplemented and standardized a CI/CD pipeline to modernize the application deployment process.`,
    technologies: ["GitLab CI/CD", "Docker", "EKS", "SonarQube","Trivy","Terraform"],
  },
  {
    year: "July 2023 - September 2023",
    role: "React & MLOps Developer",
    company: "3D SMART FACTORY, Mohammedia, Morocco",
    description: `Developed and maintained web applications using JavaScript and implemented RESTful APIs for data communication for  deploying a Machine Learning model. `,
    technologies: ["PyTorch", "Flask", "React JS"],
  },
  {
    year: "April 2022 - June 2022",
    role: "Laravel Developer",
    company: "TROMBINO SERVICES, Casablanca, Morocco",
    description: `Developed a web-based Human Resource Management application.
. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Laravel", "HTML", "CSS", "Bootstrap"],
  },
  {
    year: "April 2021 - May 2021",
    role: "PHP Developer",
    company: "AGANOV, Agadir, Morocco",
    description: `Developed a web application for managing a dental clinic.`,
    technologies: ["PHP", "HTML", "CSS", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "DevOps Project",
    image: project1,
    description:
      "Implemented a continuous integration and continuous deployment (CI/CD) process.",
    technologies: ["Jenkins", "Docker", "Ansible", "GitHub Webhooks", "AWS"],
  },
  {
    title: "DevOps Project",
    image: project2,
    description:
      "Created a Virtual Private Cloud (VPC) using Terraform as Infrastructure-as-Code (IaC) and GitHub for CI/CD.",
    technologies: ["Terraform", "GitHub Actions", "AWS"],
  },
  {
    title: "Cloud Project",
    image: project3,
    description:
      "Developed a barcode scanning application with Cloud integration.A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Web Scraping", "Azure SQL Database", "EC2", "dart"],
  },
  {
    title: "Mobile Development and Deep Learning Project",
    image: project4,
    description:
      "Vision AI is a mobile application designed specifically for individuals who are blind or visually impaired. It features a user-friendly interface with four main buttons, each serving a different function: text detection, currency prediction, and predicting a person's characteristics.",
    technologies: ["dart", "CSS", "HTML","Deep Learning (CNN)", "Flask","Python"],
  },
];

export const CONTACT = {
  address: "Casablanca ",
  phoneNo: "+212 527272839 ",
  email: "hafsaboussaboun2@gmail.com",
};
