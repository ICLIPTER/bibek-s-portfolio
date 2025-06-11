export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
   
    {
      id: "Sambalpur University",
      degree: "Bachelor in Computer Applications",
      institution: "SRM University - AP",
      location: "Sambalpur, India",
      startDate: "August 2020",
      endDate: "May 2023",
      gpa: "8.3/10.00"
    }
  ];