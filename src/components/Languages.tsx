import javaLogo from "../assets/java.jpg";
import pythonLogo from "../assets/python.jpg";
import DSALogo from "../assets/DSA.jpg";
import mysqlLogo from "../assets/mysql.jpg";
import webDevLogo from "../assets/webDev.jpg";
import "./Languages.css";

function Languages() {
   const languages = [
      {
         id: 0,
         name: "Java Programing(2023-2026)",
         logo: javaLogo,
         description: "Learning Java helps you build strong programming and problem-solving skills while mastering OOP,databases, backend development, and application development. It also creates a strong foundation for advanced technologies like Spring Boot, Microservices, Cloud, AI, and System Design, opening opportunities for careers as a Java Developer, Backend Developer, or Software Engineer."
      
      },
      
      {
         id: 1,
         name: "python Programing(2023-2026)",
         logo: pythonLogo,
         description:"Python programming helps you build strong programming and problem-solving skills with simple and flexible syntax. It provides a foundation for web development, automation, data science, AI, machine learning, and scripting, while opening career opportunities as a Python Developer, Data Analyst, AI/ML Engineer, or Software Developer."

      },

      {
         id: 2,
         name: "Data Structure & Algorithms(2024-2025)",
         logo: DSALogo,
         description:"Data Structures and Algorithms help you develop strong problem-solving and logical thinking skills. They teach you how to organize data efficiently and create faster, optimized solutions, providing a strong foundation for software development, competitive programming, technical interviews, and advanced computer science concepts."
      },
      {
         id: 3,
         name: "MySQL(2024-2026)",
         logo: mysqlLogo,
         description:"MySQL (My Structured Query Language) helps you learn how to store, manage, and retrieve data efficiently using databases. It provides a strong foundation for web and software development, backend applications, data management, and working with technologies like Java, Python, and other programming languages."
         
      },
      {
         id: 4,
         name: "Web Devloper(2025-2026)",
         logo: webDevLogo,
         description:"Web development helps you learn how to create modern, responsive, and interactive websites and web applications. It builds skills in frontend, backend, databases, APIs, and web technologies, opening opportunities as a Web Developer, Frontend Developer, Backend Developer, or Full-Stack Developer."
         
      },
      

      
   ];

   
   
    return(
    <div> 
        
               <div className="chips-container">
                  {languages.map((lang, index) => (
                     <>
                     
                  <span 
                     key={index}
                     className="chip"
                  >
                     <img 
                src={lang.logo} 
                alt={`${lang.name} logo`}
                className="chip-logo" 
              />
                     {lang.name} 
                  </span>
                     </>
                  ))}
               </div>

             {/* <div className="vertical">
                <img src={"python.jpg" }
                 className="python-pic"
                 alt=""
                 /> 
                 <div className="vertical-title">
                    Python Progaraming(2023-2026)
                 </div>
                    <div className="vertical-desc">
                        Python programming helps you build strong programming and problem-solving skills with simple and flexible syntax. 
                        It provides a foundation for web development, automation, data science, AI, machine learning, and scripting, 
                        while opening career opportunities as a Python Developer, Data Analyst, AI/ML Engineer, or Software Developer.
                    </div>
            </div>  
            
            </div>
             <div className="vertical">
                <img src="DSA.jpg"  
                 className="DSA-pic"
                 alt=""/> 
                 <div className="vertical-title">
                    Data Structure & Algorithms(2024-2025)
                 </div>
                    <div className="vertical-desc">
                        Data Structures and Algorithms help you develop strong problem-solving and logical thinking skills. 
                        They teach you how to organize data efficiently and create faster, optimized solutions, 
                        providing a strong foundation for software development, competitive programming, technical interviews, and advanced computer science concepts.
                    </div>
                
            </div>
             <div className="vertical">
                <img src="web-devloper.jpg" 
                 className="web-devloper-pic"
                 alt=""/> 
                 <div className="vertical-title">
                    Website Devloping(2025-2026)
                 </div>
                    <div className="vertical-desc">
                        Web development helps you learn how to create modern, responsive, and interactive websites and web applications. 
                        It builds skills in frontend, backend, databases, APIs, and web technologies, 
                        opening opportunities as a Web Developer, Frontend Developer, Backend Developer, or Full-Stack Developer.
                 <div/>
             </div>
             <div className="vertical">
                <img src="mysql.jpg" 
                 className="mysql-pic"
                 alt=""/> 
                 <div className="vertical-title">
                    MySQL(2024-2026)
                 </div>
                    <div className="vertical-desc">
                        MySQL (My Structured Query Language) helps you learn how to store, manage, and retrieve data efficiently using databases. 
                        It provides a strong foundation for web and software development, backend applications, data management, 
                        and working with technologies like Java, Python, and other programming languages.
                 </div>
            </div>
        </div> */}
    
        
    </div>
    
        
    
    )
}
export default Languages;

