import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'
import { experiences, education, skills } from '../constants'
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Moutik Patel</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>IT Technologist based in Canada, specializing in web development and cyber security through hand on Learning and building applications.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          
            <p> <span className='blue-gradient_text font-semibold drop-shadow'>IT Support & System Administration :</span>	 Proficient in Windows, macOS, iOS, Linux, Unix; troubleshooting desktops, laptops, and peripherals; hardware installation and upgrades; diagnosing and resolving hardware issues; TCP/IP, DNS, DHCP, LAN/WAN configuration and troubleshooting; router and switch configuration, wireless networking; Microsoft Office Suite, email clients (Outlook, Thunderbird), antivirus and anti-malware solutions, software installation and configuration; remote desktop support, Virtual Private Networks (VPNs), remote assistance tools (e.g., TeamViewer, Any Desk); ServiceNow, Jira Service Desk, Remedy; troubleshooting smartphones and tablets (iOS, Android), Mobile Device Management (MDM) tools; effective communication with non-technical users; documentation of troubleshooting steps; ITIL (Information Technology Infrastructure Library) concepts; basic scripting skills (e.g., PowerShell, Bash), task automation for routine maintenance; Azure, Active Directory; Adobe Photoshop, Swift, Ionic, Xamarin, Flutter, Dart, MS Office, Microsoft Azure, Heroku, Blender, Adobe XD, Adobe Premiere Pro, Microsoft Endpoint Management.
            </p>
            <br></br>
            <p>
  <span className='blue-gradient_text font-semibold drop-shadow'>Web Development:</span> Experienced in full-stack web app development using HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MySQL, MongoDB, jQuery, Bootstrap, AJAX Requests, MERN, MEAN, Three.js. <span className='font-semibold'>Expert in API Development, Deployment, and Maintenance.</span>
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>Database Management:</span> Exceptional ability to work with SQL, PL/SQL, NoSQL, MongoDB, and software like Oracle, MySQL, Db2, and Microsoft SQL Server.
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>Docker:</span> Proficient in writing Dockerfiles, managing Docker images, and orchestrating containers with Docker Compose. <span className='font-semibold'>Skilled in continuous integration/deployment (CI/CD), microservices architecture.</span>
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>Cloud Platforms:</span> Proficient in using AWS and Azure for deploying, managing, Kubernetes, and scaling applications.
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>Software Development:</span> Skilled in planning and executing software application design and development using languages such as C, C++, Java, Python, and Swift.
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>Mobile App Development:</span> Proficient in planning, developing, and testing mobile applications using Android, Java, Kotlin, Swift, Storyboard, and Swift UI, Flutter, and Node.js.
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>Version Control & IDEs:</span> Experience with version controls like Git and GitHub. Proficient in IDEs like Visual Studio, Visual Studio Code, IntelliJ, Eclipse, Android Studio, Xcode.
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>Scripting and Office Tools:</span> Ability to write complex BASH shell scripts. Proficient in Microsoft 365.
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>SDLC & Agile Methodologies:</span> Understanding of SDLC lifecycle. Experienced in working in <span className='font-semibold'>Agile - Scrum and Kanban Teams.</span>
</p>
<br></br>
<p>
  <span className='blue-gradient_text font-semibold drop-shadow'>System Analysis:</span> Deep understanding of system analysis and object-oriented design concepts.
</p>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with many organizations, leveling up my skills and
            teaming up with smart people. Its just the beginning but Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                   
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA/>

      <hr className='border-slate-200' />

      <div className='py-16'>
        <h3 className='subhead-text'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Here's my educational background: My foundations:-
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {education.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                   
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />


    <Footer/>
      
    </section>
  )
}

export default About