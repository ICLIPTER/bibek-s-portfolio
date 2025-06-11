// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership';
  }
  
  export const experiences: Experience[] = [
    // Regular job positions
    {
      id: "full-stack-dev",
      title: "Full Stack Web Developer",
      company: "Freelance",
      location: "Remote",
      startDate: "January 2021",
      endDate: "Present",
      description: "Developed and maintained web applications for various clients, focusing on full-stack development.",
      achievements: [
        "Designed and implemented responsive web applications using React.js, Node.js, and MongoDB",
        "Enhanced user experience by optimizing application performance, achieving a 50% reduction in load times",
        "Collaborated with clients to gather requirements and deliver tailored solutions, resulting in a 95% client satisfaction rate",
        "Integrated third-party APIs to enhance functionality and streamline workflows"
      ],
     
      type: 'work'
    },
    {
      id: "tech-intern",
      title: "Technical Intern",
      company: "SRM University - AP",
      location: "Vijayawada, India",
      startDate: "October 2023",
      endDate: "June 2024",
      description: "Directed technical operations for university events, encompassing website development and promotional materials.",
      achievements: [
        "Orchestrated technical operations for 30+ university events, designing and deploying websites with integrated payment gateways",
        "Increased event participation by 25% through effective technical solutions",
        "Engineered dashboards and automated flows, increasing user satisfaction by 75% and cutting coordination time by 60%",
        "Ensured smooth execution through cross-functional collaboration, achieving 95% client satisfaction"
      ],
      type: 'work'
    },
    // Research positions
    
   
    {
        id: "technical-executive",
        title: "Technical Executive",
        company: "Student Council SRM University - AP",
        location: "Vijayawada, India",
        startDate: "August 2023",
        endDate: "May 2024",
        description: "Oversaw technical operations for university events and initiatives as part of the Student Council.",
        achievements: [
          "Oversaw technical operations, utilizing advanced methodologies to achieve project milestones",
          "Engineered and enhanced event websites for cultural festivals, ensuring top-tier performance with creative designs",
          "Managed audiovisual equipment, software applications, and ensured seamless online and offline interactions",
          "Resolved technical issues promptly, minimizing disruptions and maintaining high standards of execution"
        ],
        type: 'leadership'
      },
     
      {
        id: "student-council-member",
        title: "Member",
        company: "Student Council SRM University - AP",
        location: "Andhra Pradesh, India",
        startDate: "May 2021",
        endDate: "May 2022",
        description: "Served as an active member of the university's student council, contributing to student initiatives.",
        achievements: [
          "Played a pivotal role in organizing and executing various student events and initiatives",
          "Collaborated effectively with peers and faculty ensuring the smooth execution of events",
          "Enhanced the overall student experience through meticulous planning and coordination",
          "Contributed to website development and technical aspects of student programs"
        ],
        type: 'leadership'
      },
      {
        id: "student-council-affiliate",
        title: "Affiliate",
        company: "Student Council SRM University - AP",
        location: "Vijayawada, India",
        startDate: "November 2020",
        endDate: "May 2021",
        description: "Started as an affiliate member in the student council, supporting various initiatives.",
        achievements: [
          "Assisted in the organization and execution of student events",
          "Supported the technical team with website and digital content",
          "Contributed to planning and logistics for university programs",
          "Participated in student engagement activities and feedback collection"
        ],
        type: 'leadership'
      }
  ];