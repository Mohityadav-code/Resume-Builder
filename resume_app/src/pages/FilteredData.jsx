import React, { useState, useEffect } from "react";
import ExcelJS from "exceljs";
import Resume from "./Resume";
import Dropdown from "../components/DropDown";
import Table from "../components/Table";

const DummyComponent = () => {
  const dummyData = [
    {
      first_name: "Nainu",
      last_name: "Wadhwa",
      resume_name: "First Resume",
      level: "Internship",
      profession: "Software Engineer",
      email: "nainu@gmail.com",
      phone_number: "861728",
      city: "Cityville",
      country: "Countryland",
      pincode: "124001",
      github: "nainu-github",
      twitter: "nainu-twitter",
      linkedin: "nainu-linkedin",
      portfolio_link: "nainu-portfolio",
      languages: "English, Hindi",
      summary: "Passionate about coding and creating innovative solutions.",
      accomplishment: "Achieved highest score in a coding competition.",
      education: [
        {
          education_id: 1,
          school_name: "Tech University",
          school_location: "Cityville",
          degree: "Bachelor's in Computer Science",
          field_of_study: "Computer Science",
          degree_start_date: "2020-09-01",
          degree_end_date: "2024-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Software Developer",
          company_name: "Tech Solutions Ltd.",
          company_location: "Cityville",
          start_date: "2024-06-01",
          end_date: "2024-12-31",
          Description:
            "Developed web applications and contributed to team projects.",
          currently_work_here: false,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "E-commerce Platform",
          project_link: "ecommerce.example.com",
          description:
            "Built a responsive e-commerce platform using React and Node.js.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "JavaScript, Python",
          technical_skills: "React, Node.js, MongoDB",
          non_technical_skills: "Problem Solving, Teamwork",
          softwares: "VS Code, Git",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "React Fundamentals",
          certi_link: "certificates/react-fundamentals",
          certi_start_date: "2023-01-15",
          certi_end_date: "2023-02-28",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Arya",
      last_name: "Singh",
      resume_name: "Tech Resume",
      level: "Junior",
      profession: "Web Developer",
      email: "arya@example.com",
      phone_number: "9876543210",
      city: "Techtown",
      country: "Techland",
      pincode: "543210",
      github: "aryasingh",
      twitter: "aryatweets",
      linkedin: "aryalinkedin",
      portfolio_link: "aryaportfolio",
      languages: "English",
      summary:
        "Dedicated web developer with a passion for clean and efficient code.",
      accomplishment: "Won first prize in a regional hackathon.",
      education: [
        {
          education_id: 1,
          school_name: "Tech Institute",
          school_location: "Techtown",
          degree: "Bachelor's in Computer Engineering",
          field_of_study: "Computer Engineering",
          degree_start_date: "2019-08-15",
          degree_end_date: "2023-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Web Developer",
          company_name: "Tech Innovators",
          company_location: "Techtown",
          start_date: "2023-06-15",
          end_date: "2023-12-31",
          Description: "Designed and developed user-friendly web applications.",
          currently_work_here: true,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "Portfolio Website",
          project_link: "aryaportfolio.example.com",
          description:
            "Created a responsive portfolio website to showcase skills and projects.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "HTML, CSS, JavaScript",
          technical_skills: "React, Node.js, Express",
          non_technical_skills: "Problem Solving, Communication",
          softwares: "VS Code, Git",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "Responsive Web Design",
          certi_link: "certificates/web-design",
          certi_start_date: "2022-05-01",
          certi_end_date: "2022-06-30",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Alex",
      last_name: "Johnson",
      resume_name: "Software Engineer CV",
      level: "Experienced",
      profession: "Software Engineer",
      email: "alex@example.com",
      phone_number: "5551234567",
      city: "Techburgh",
      country: "Digital Land",
      pincode: "987654",
      github: "alexjohnson",
      twitter: "alex_tweets",
      linkedin: "alex_linkedin",
      portfolio_link: "alex_portfolio",
      languages: "English, French",
      summary:
        "Experienced software engineer focused on delivering high-quality software solutions.",
      accomplishment:
        "Led a team to successfully launch a complex SaaS product.",
      education: [
        {
          education_id: 1,
          school_name: "Digital University",
          school_location: "Techburgh",
          degree: "Master's in Computer Science",
          field_of_study: "Computer Science",
          degree_start_date: "2014-09-01",
          degree_end_date: "2016-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Senior Software Engineer",
          company_name: "Innovative Tech Solutions",
          company_location: "Techburgh",
          start_date: "2016-06-01",
          end_date: "2023-07-15",
          Description: "Architected and developed scalable backend systems.",
          currently_work_here: false,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "SaaS Platform",
          project_link: "saas.example.com",
          description:
            "Led development of a multi-tenant SaaS platform for business management.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "Java, Spring",
          technical_skills: "Microservices, AWS, Kubernetes",
          non_technical_skills: "Leadership, Problem Solving",
          softwares: "IntelliJ, Git",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "AWS Certified Solutions Architect",
          certi_link: "certificates/aws-architect",
          certi_start_date: "2018-03-15",
          certi_end_date: "2023-03-15",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Emily",
      last_name: "Chen",
      resume_name: "Full Stack Developer Profile",
      level: "Mid-Level",
      profession: "Full Stack Developer",
      email: "emily@example.com",
      phone_number: "1239874560",
      city: "Codeville",
      country: "Programland",
      pincode: "543210",
      github: "emilychen",
      twitter: "emily_tweets",
      linkedin: "emily_linkedin",
      portfolio_link: "emily_portfolio",
      languages: "English, Mandarin",
      summary:
        "Full stack developer with expertise in both frontend and backend technologies.",
      accomplishment:
        "Implemented a real-time chat feature for a social media platform.",
      education: [
        {
          education_id: 1,
          school_name: "Code University",
          school_location: "Codeville",
          degree: "Bachelor's in Computer Engineering",
          field_of_study: "Computer Engineering",
          degree_start_date: "2015-09-01",
          degree_end_date: "2019-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Full Stack Developer",
          company_name: "CodeCrafters",
          company_location: "Codeville",
          start_date: "2019-06-01",
          end_date: "2023-07-31",
          Description:
            "Developed and maintained features for a social media platform.",
          currently_work_here: true,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "Real-Time Chat App",
          project_link: "chat.example.com",
          description:
            "Built a real-time chat application using React, Node.js, and Socket.io.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "JavaScript, Python",
          technical_skills: "React, Node.js, Express",
          non_technical_skills: "Problem Solving, Communication",
          softwares: "VS Code, Git",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "Full Stack Web Development",
          certi_link: "certificates/full-stack-dev",
          certi_start_date: "2020-01-15",
          certi_end_date: "2020-02-28",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Daniel",
      last_name: "Williams",
      resume_name: "Frontend Developer CV",
      level: "Junior",
      profession: "Frontend Developer",
      email: "daniel@example.com",
      phone_number: "7894561230",
      city: "Designville",
      country: "UI Land",
      pincode: "987654",
      github: "danielwilliams",
      twitter: "daniel_tweets",
      linkedin: "daniel_linkedin",
      portfolio_link: "daniel_portfolio",
      languages: "English, Spanish",
      summary:
        "Passionate about creating intuitive and visually appealing user interfaces.",
      accomplishment:
        "Redesigned the user interface of a popular news website.",
      education: [
        {
          education_id: 1,
          school_name: "UI Design Institute",
          school_location: "Designville",
          degree: "Bachelor's in Graphic Design",
          field_of_study: "Graphic Design",
          degree_start_date: "2019-08-15",
          degree_end_date: "2023-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Frontend Developer",
          company_name: "UI Innovators",
          company_location: "Designville",
          start_date: "2023-06-15",
          end_date: "2023-12-31",
          Description:
            "Implemented responsive designs and interactive elements.",
          currently_work_here: true,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "News Website Redesign",
          project_link: "news.example.com",
          description:
            "Revamped the user interface of a news website using HTML, CSS, and JavaScript.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "HTML, CSS, JavaScript",
          technical_skills: "React, Sass",
          non_technical_skills: "Design Thinking, Collaboration",
          softwares: "Figma, VS Code, Git",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "UI/UX Design Fundamentals",
          certi_link: "certificates/ui-ux-design",
          certi_start_date: "2022-03-15",
          certi_end_date: "2022-04-30",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Sophia",
      last_name: "Miller",
      resume_name: "Data Scientist Portfolio",
      level: "Experienced",
      profession: "Data Scientist",
      email: "sophia@example.com",
      phone_number: "1234567890",
      city: "Analyticstown",
      country: "Data Land",
      pincode: "543210",
      github: "sophiamiller",
      twitter: "sophia_tweets",
      linkedin: "sophia_linkedin",
      portfolio_link: "sophia_portfolio",
      languages: "English, French",
      summary:
        "Experienced data scientist with a track record of delivering actionable insights.",
      accomplishment:
        "Developed a predictive model for customer churn with high accuracy.",
      education: [
        {
          education_id: 1,
          school_name: "Data Science Institute",
          school_location: "Analyticstown",
          degree: "Master's in Data Science",
          field_of_study: "Data Science",
          degree_start_date: "2015-09-01",
          degree_end_date: "2017-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Data Scientist",
          company_name: "Insightful Data Solutions",
          company_location: "Analyticstown",
          start_date: "2017-06-01",
          end_date: "2023-07-31",
          Description:
            "Analyzed large datasets and developed machine learning models.",
          currently_work_here: true,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "Customer Churn Prediction",
          project_link: "churn.example.com",
          description:
            "Built a predictive model to identify potential customer churn using Python and scikit-learn.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "Python, SQL",
          technical_skills: "Machine Learning, Data Visualization",
          non_technical_skills: "Critical Thinking, Communication",
          softwares: "Jupyter, Tableau, Git",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "Machine Learning Specialist",
          certi_link: "certificates/ml-specialist",
          certi_start_date: "2018-01-15",
          certi_end_date: "2018-02-28",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Liam",
      last_name: "Brown",
      resume_name: "Network Engineer CV",
      level: "Mid-Level",
      profession: "Network Engineer",
      email: "liam@example.com",
      phone_number: "9876543210",
      city: "Connectville",
      country: "Network Land",
      pincode: "543210",
      github: "liambrown",
      twitter: "liam_tweets",
      linkedin: "liam_linkedin",
      portfolio_link: "liam_portfolio",
      languages: "English",
      summary:
        "Experienced network engineer specializing in designing and maintaining robust networks.",
      accomplishment:
        "Upgraded the company's network infrastructure, resulting in improved performance.",
      education: [
        {
          education_id: 1,
          school_name: "Network Institute",
          school_location: "Connectville",
          degree: "Bachelor's in Network Engineering",
          field_of_study: "Network Engineering",
          degree_start_date: "2014-08-15",
          degree_end_date: "2018-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Network Engineer",
          company_name: "ConnectNet Solutions",
          company_location: "Connectville",
          start_date: "2018-06-01",
          end_date: "2023-07-31",
          Description:
            "Designed, implemented, and maintained network infrastructure.",
          currently_work_here: true,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "Network Upgrade",
          project_link: "network-upgrade.example.com",
          description:
            "Led the upgrade of the company's network infrastructure to enhance performance and security.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "Cisco Networking, Routing",
          technical_skills: "Firewalls, Load Balancers, VPNs",
          non_technical_skills: "Problem Solving, Collaboration",
          softwares: "Packet Tracer, Wireshark, Git",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "Cisco Certified Network Associate (CCNA)",
          certi_link: "certificates/ccna",
          certi_start_date: "2019-03-15",
          certi_end_date: "2024-03-15",
          currently_pursuing: 0,
        },
      ],
    },

    {
      first_name: "Ella",
      last_name: "Wilson",
      resume_name: "UX Designer Portfolio",
      level: "Mid-Level",
      profession: "UX Designer",
      email: "ella@example.com",
      phone_number: "9876543210",
      city: "Designville",
      country: "UI Land",
      pincode: "987654",
      github: "ellawilson",
      twitter: "ella_tweets",
      linkedin: "ella_linkedin",
      portfolio_link: "ella_portfolio",
      languages: "English",
      summary: "Passionate about creating intuitive and user-centered designs.",
      accomplishment:
        "Redesigned the user interface of a popular e-commerce platform.",
      education: [
        {
          education_id: 1,
          school_name: "Design Institute",
          school_location: "Designville",
          degree: "Bachelor's in Interaction Design",
          field_of_study: "Interaction Design",
          degree_start_date: "2016-08-15",
          degree_end_date: "2020-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "UX Designer",
          company_name: "DesignCrafters",
          company_location: "Designville",
          start_date: "2020-06-01",
          end_date: "2023-07-31",
          Description:
            "Designed user interfaces and conducted usability testing.",
          currently_work_here: true,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "E-commerce Redesign",
          project_link: "ecommerce-redesign.example.com",
          description:
            "Revamped the user interface of an e-commerce platform for better user experience.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "Sketch, Figma",
          technical_skills: "User Research, Wireframing, Prototyping",
          non_technical_skills: "Design Thinking, Collaboration",
          softwares: "Figma, Adobe XD",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "UX Design Fundamentals",
          certi_link: "certificates/ux-design",
          certi_start_date: "2021-02-15",
          certi_end_date: "2021-03-30",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Oliver",
      last_name: "Davis",
      resume_name: "Business Analyst CV",
      level: "Junior",
      profession: "Business Analyst",
      email: "oliver@example.com",
      phone_number: "7894561230",
      city: "Analyticstown",
      country: "Data Land",
      pincode: "543210",
      github: "oliverdavis",
      twitter: "oliver_tweets",
      linkedin: "oliver_linkedin",
      portfolio_link: "oliver_portfolio",
      languages: "English, Spanish",
      summary:
        "Detail-oriented business analyst with a focus on data-driven insights.",
      accomplishment:
        "Optimized inventory management processes, resulting in cost savings.",
      education: [
        {
          education_id: 1,
          school_name: "Business School",
          school_location: "Analyticstown",
          degree: "Bachelor's in Business Administration",
          field_of_study: "Business Administration",
          degree_start_date: "2019-08-15",
          degree_end_date: "2023-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Business Analyst",
          company_name: "Analytic Solutions",
          company_location: "Analyticstown",
          start_date: "2023-06-15",
          end_date: "2023-12-31",
          Description:
            "Analyzed business processes and identified opportunities for improvement.",
          currently_work_here: true,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "Inventory Optimization",
          project_link: "inventory-optimization.example.com",
          description:
            "Led a project to optimize inventory management processes using data analysis.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "Excel, SQL",
          technical_skills: "Data Analysis, Process Mapping",
          non_technical_skills: "Problem Solving, Communication",
          softwares: "Excel, Tableau",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "Business Analysis Essentials",
          certi_link: "certificates/business-analysis",
          certi_start_date: "2022-04-15",
          certi_end_date: "2022-05-31",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Grace",
      last_name: "Martinez",
      resume_name: "Marketing Specialist Profile",
      level: "Mid-Level",
      profession: "Marketing Specialist",
      email: "grace@example.com",
      phone_number: "1234567890",
      city: "Marketingville",
      country: "Branding Land",
      pincode: "543210",
      github: "gracemartinez",
      twitter: "grace_tweets",
      linkedin: "grace_linkedin",
      portfolio_link: "grace_portfolio",
      languages: "English, Spanish",
      summary:
        "Experienced marketing specialist with a focus on digital marketing strategies.",
      accomplishment:
        "Executed successful social media campaigns, resulting in increased brand visibility.",
      education: [
        {
          education_id: 1,
          school_name: "Marketing Institute",
          school_location: "Marketingville",
          degree: "Bachelor's in Marketing",
          field_of_study: "Marketing",
          degree_start_date: "2016-08-15",
          degree_end_date: "2020-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Marketing Specialist",
          company_name: "Brand Innovators",
          company_location: "Marketingville",
          start_date: "2020-06-01",
          end_date: "2023-07-31",
          Description:
            "Planned and executed digital marketing campaigns to promote brand awareness.",
          currently_work_here: true,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "Social Media Campaign",
          project_link: "social-media-campaign.example.com",
          description:
            "Led a successful social media campaign to engage target audiences and increase brand visibility.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "Social Media Marketing, Google Analytics",
          technical_skills: "Campaign Planning, SEO",
          non_technical_skills: "Creative Thinking, Communication",
          softwares: "Hootsuite, Google Analytics",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "Digital Marketing Fundamentals",
          certi_link: "certificates/digital-marketing",
          certi_start_date: "2021-03-15",
          certi_end_date: "2021-04-30",
          currently_pursuing: 0,
        },
      ],
    },
    {
      first_name: "Lucas",
      last_name: "Taylor",
      resume_name: "Product Manager CV",
      level: "Experienced",
      profession: "Product Manager",
      email: "lucas@example.com",
      phone_number: "9876543210",
      city: "Innovationville",
      country: "Product Land",
      pincode: "543210",
      github: "lucastaylor",
      twitter: "lucas_tweets",
      linkedin: "lucas_linkedin",
      portfolio_link: "lucas_portfolio",
      languages: "English",
      summary:
        "Experienced product manager with a track record of driving successful product launches.",
      accomplishment:
        "Led the development of a new mobile app, resulting in over 1 million downloads.",
      education: [
        {
          education_id: 1,
          school_name: "Business School",
          school_location: "Innovationville",
          degree: "Master's in Business Administration",
          field_of_study: "Business Administration",
          degree_start_date: "2014-08-15",
          degree_end_date: "2016-05-31",
          current_attend_here: 0,
        },
      ],
      work_experience: [
        {
          work_id: 1,
          job_title: "Product Manager",
          company_name: "Innovation Labs",
          company_location: "Innovationville",
          start_date: "2016-06-01",
          end_date: "2023-07-15",
          Description:
            "Managed product lifecycle from ideation to launch, focusing on user needs.",
          currently_work_here: false,
        },
      ],
      projects: [
        {
          project_id: 1,
          project_name: "Mobile App Launch",
          project_link: "mobile-app-launch.example.com",
          description:
            "Led the successful launch of a new mobile app, achieving over 1 million downloads within the first month.",
        },
      ],
      skills: [
        {
          skills_id: 1,
          top_technical_skills: "Product Management, Agile Methodology",
          technical_skills: "User Research, Roadmapping",
          non_technical_skills: "Leadership, Communication",
          softwares: "JIRA, Trello",
        },
      ],
      certificates: [
        {
          certi_id: 1,
          certi_name: "Certified Scrum Product Owner (CSPO)",
          certi_link: "certificates/cspo",
          certi_start_date: "2017-05-15",
          certi_end_date: "2022-05-15",
          currently_pursuing: 0,
        },
      ],
    },
   
    
]
  ;

  //   dummyData[0].work_experience[0].currently_work_here
  console.log(
    "  dummyData[0].work_experience[0].currently_work_here: ",
    dummyData[0].work_experience[0]
  );

  const [filteredData, setFilteredData] = useState(dummyData);
  const [filterCurrentlyWorking, setFilterCurrentlyWorking] = useState("all");
  console.log("filterCurrentlyWorking: ", filterCurrentlyWorking);
  const [filterLevel, setFilterLevel] = useState("all");
  const [filterProfession, setFilterProfession] = useState("all");
  const [filterSkills, setFilterSkills] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let tempFilteredData = dummyData;
    if (filterCurrentlyWorking !== "all") {
      tempFilteredData = tempFilteredData.filter(
        (item) =>
          item.work_experience[0].currently_work_here ===
          (filterCurrentlyWorking === true)
      );
    }

    if (filterLevel !== "all") {
      tempFilteredData = tempFilteredData.filter(
        (item) => item.level === filterLevel
      );
    }

    if (filterProfession !== "all") {
      tempFilteredData = tempFilteredData.filter(
        (item) => item.profession === filterProfession
      );
    }

    if (filterSkills !== "all") {
      tempFilteredData = tempFilteredData.filter(
        (item) =>
          item.skills[0].top_technical_skills.includes(filterSkills) ||
          item.skills[0].technical_skills.includes(filterSkills)
      );
    }

    if (searchQuery.trim() !== "") {
      const searchLowerCase = searchQuery.toLowerCase();
      tempFilteredData = tempFilteredData.filter(
        (item) =>
          item.first_name.toLowerCase().includes(searchLowerCase) ||
          item.last_name.toLowerCase().includes(searchLowerCase)
      );
    }

    setFilteredData(tempFilteredData);
  }, [
    filterCurrentlyWorking,
    filterLevel,
    filterProfession,
    filterSkills,
    searchQuery,
    dummyData,
  ]);

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Filtered Data");

    // Define styles
    const headerFont = { bold: true, color: { argb: "FFFFFF" } };
    const headerFill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "333333" },
    };
    const cellBorder = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };

    worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Level", key: "level", width: 15 },
      { header: "Profession", key: "profession", width: 20 },
      { header: "Skills", key: "skills", width: 30 },
      { header: "Currently Working", key: "currentlyWorking", width: 15 },
    ];

    // Apply header styling
    worksheet.getRow(1).font = headerFont;
    worksheet.getRow(1).fill = headerFill;
    worksheet.getRow(1).border = cellBorder;

    worksheet.columns = [
      { header: "Name", key: "name" },
      { header: "Level", key: "level" },
      { header: "Profession", key: "profession" },
      { header: "Skills", key: "skills" },
      { header: "Currently Working", key: "currentlyWorking" },
    ];

    filteredData.forEach((item) => {
      worksheet.addRow({
        name: `${item.first_name} ${item.last_name}`,
        level: item.level,
        profession: item.profession,
        skills: `${item.skills[0].top_technical_skills}, ${item.skills[0].technical_skills}`,
        currentlyWorking: item.work_experience[0].currently_work_here
          ? "Yes"
          : "No",
      });
    });

    const excelBuffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const fileName = "filtered_data.xlsx";
    const saveAs = require("file-saver");
    saveAs(blob, fileName);
  };

  const [showResume, setShowResume] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState(null);

  // ... your existing code ...

  const handleCreateResume = (userData) => {
    setSelectedUserData(userData);
    setShowResume(true);
  };
  const handleClearFilter=()=>{
    setFilterCurrentlyWorking("all");
    setFilterLevel("all");
    setFilterProfession("all");
    setFilterSkills("all");
    setSearchQuery("");
  }
  const columns = [
    {
      id: "id",
      name: "SR NO.",
      cell: (row) => (
        <div className="text-[#3C4048] text-center py-3 font-medium text-sm font-roboto">
          <span className="text-[#3C4048] uppercase font-medium">
            {`${filteredData.indexOf(row) +1}`}
          </span>
        </div>
      ),
    },
    {
      id: "name",
      name: "Name",
      cell: (row) => (
        <div className="text-[#3C4048] text-left pl-2 py-3 font-medium text-sm font-roboto">
          <span className="text-[#3C4048] uppercase font-medium">
            {`${row.first_name} ${row.last_name}`}
          </span>
        </div>
      ),
    },
    {
      id: "level",
      name: "Level",
      cell: (row) => (
        <div className="text-[#3C4048] text-left font-medium text-sm font-roboto">
          <span className="text-[#3C4048] font-medium">{row.level}</span>
        </div>
      ),
    },
    {
      id: "profession",
      name: "Profession",
      cell: (row) => (
        <div className="text-[#393e46] text-left font-medium text-sm font-roboto">
          {row.profession}
        </div>
      ),
    },
   
    {
      id: "github",
      name: "GitHub ID",
      cell: (row) => (
        <div className="text-[#393e46] text-center font-medium text-sm font-roboto">
          {row.github}
        </div>
      ),
    }, {
      id: "skills",
      name: "Skills",
      cell: (row) => (
        <div className="text-[#393e46] text-center font-medium text-sm font-roboto">
          {`${row.skills[0].top_technical_skills}`}
        </div>
      ),
    },
    {
      id: "currently_working",
      name: "Currently Working",
      cell: (row) => (
        <div className="text-[#393e46] text-center font-medium text-sm font-roboto">
          {row.work_experience[0].currently_work_here ? "Yes" : "No"}
        </div>
      ),
    },
    {
      id: "view_resume",
      name: "View Resume",
      cell: (row) => (
        <button
          onClick={() => handleCreateResume(row)}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          </svg>
        </button>
      ),
    },
  ];
  
  return (
    <div className=" w-screen  relative">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-6xl text-center ">Admin Dashboard</h1>

      <div className="w-auto h-auto p-2 m-2 rounded-md shadow-lg paperEffect shadow-slate-250 mx-10 my-2 ">
        <div className="flex flex-wrap mb-2 items-center justify-around w-full  h-auto md:h-[220px] lg:h-[110px] labelInputContainer">
          <Dropdown
            lableName="Currently Working"
            values={["all", true, false]}
            options={["All", "Currently Working", "Not Currently Working"]}
            updateValue={setFilterCurrentlyWorking}
            placeholder="Select an option"
          />
          <Dropdown
            lableName="Level"
            values={["all", "Junior", "Mid-Level", "Experienced"]}
            options={["All", "Junior", "Mid-Level", "Experienced"]}
            updateValue={setFilterLevel}
            placeholder="Select a level"
          />
          <Dropdown
            lableName="Profession"
            values={[
              "all",
              "Full Stack Developer",
              "Data Scientist",
              "Network Engineer",
              "UX Designer",
            ]}
            options={[
              "All",
              "Full Stack Developer",
              "Data Scientist",
              "Network Engineer",
              "UX Designer",
            ]}
            updateValue={setFilterProfession}
            placeholder="Select a profession"
          />
          <Dropdown
            lableName="Skills"
            values={["all", "Java", "Python", "React", "SQL"]}
            options={["All", "Java", "Python", "React", "SQL"]}
            updateValue={setFilterSkills}
            placeholder="Select a skill"
          />

          <button onClick={()=> handleClearFilter()} className=" w-16 flex justify-center items-center">
            <svg
              className=" w-10 h-10 hover:tex-red-700 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className=" flex px-12 jusify-between items-center  w-full ">
        <form className=" w-full ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name"
              type="search"
              id="default-search"
              class="block border outline-none border-gray-400 w-1/4   p-2 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 "
            />
          </div>
        </form>

        <button
          onClick={exportToExcel}
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          <div className="flex  justify-center items-center">
            <div className=" pr-2">Export</div>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </div>
        </button>
      </div>
            <div className=" px-10 my-4 ">
           <Table
        columns={columns}
  
        rows={filteredData}
        headerStyle={["text-center ", "text-left pl-3" , "text-left pl-0" , "text-left pl-0" ]}
      />
        </div>
   
{/* {showResume && (
  <div className="absolute top-0 left-0  w-screen h-auto bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex="-1"
      className="w-full p-10   bg-gray-200  overflow-x-hidden overflow-y-auto md:inset-0 max-h-full"
    >
      <div className="relative w-full max-h-full ">
        <div className="relative h-full rounded-lg  ">
          <div className="flex items-start justify-between  bg-gray-300 p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Resume
            </h3>
            <button
              onClick={() => {
                setShowResume(false);
              }}
              type="button"
              className="text-gray-800 bg-transparent  hover:text-gray-900 rounded-lg text-sm 10h-810ml-auto inline-flex justify-center items-center  "
              data-modal-hide="staticModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <Resume data={selectedUserData} />
        </div>
      </div>
    </div>
  </div>

)} */}
     {showResume && (
        <div
          className={`  fixed left-0 top-0    bg-[#fff] w-screen  h-full  overflow-y-scroll overflow-scroll overscroll-y-auto py-2  flex justify-center items-center`}
        >
          <div className=" h-full w-40  lg:w-full  flex flex-wrap justify-center items-center  ">
            <div
              class={`w-full h-full    rounded-[8px]  bg-white  shadow-box `}
            >
              <div className="flex relative flex-col p-5 w-full rounded-[8px] h-full   ">
                <div className="flex justify-end mx-[30px] ">
                  <button
                    onClick={()=>setShowResume(false)}
                    className="flex justify-center items-center bg-[#D9D9D985] rounded-full w-[40px] h-[40px]"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1L1 16M1 1L16 16"
                        stroke="#344054"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className=" w-full h-full ">
                <Resume data={selectedUserData} />

             
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DummyComponent;
