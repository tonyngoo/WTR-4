import React from 'react';
import styled from 'styled-components';

// Import logo and components
import logo from './assets/logo.jpg';
import showcase from './assets/showcase.png';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {

  return (
      <div class="container">
        <Header/>

        <Logo>
          <a href="https://www.rbcroyalbank.com/personal.html" class="logo" target="_blank" rel="noreferrer"><img src={logo} alt="Logo"/></a>
        </Logo>
        <div>
          <Subheading>May 2024 - August 2024</Subheading>

          <Section>
          <Text class="text" id="intro-section">

            In the past 4 months at RBC, I continued to work as a Developer on the Data & AI team. My experience at RBC has been amazing! I've been surrounded by a positive and supportive work environment with coworkers and mentors who have helped me along the way.
            I learned a lot throughout this work term, learning many new skills, lessons and insight on the industry which I will carry with me into my future endeavours.

          </Text>
        </Section>
        </div>



        <Section>
          <Heading>About RBC</Heading>
          <Text>
            Royal Bank of Canada (RBC) is a financial service corporation that has existed since the 19th century. RBC is one of the largest banks in North America, competing with banks such as TD Bank,
            Bank of Montreal (BMO), and Bank of America. The services provided by RBC consist of banking, investing and insurance, and is delivered to individuals, businesses, and institutions alike.
            RBC is well-known for its reliable banking, customer service, and their commitment toward innovating new technology into banking.
          </Text>
          <Subheading>What is Data & AI?</Subheading>
          <Text>
            Data & AI is a restructured team that is involved in many projects. After successfully handling the HSBC acquisition, Data & AI was formed to shift focus onto big data and the use of AI both internally and externally.
            The team is comprised of more than 400 employees who all work on big data, as well as the development and integration of AI. One of the major focuses from the Data & AI department is NOVA, which is the team that I work on!
            NOVA is a migration service used internally from other departments to migrate from legacy to modern systems and applications. Other focuses within Data & AI are the development of visualization products to help businesses and employees better understand their data.
          </Text>
          <Subheading>Interesting Facts</Subheading>
          <Text><Numbered>•</Numbered> RBC was founded in 1864</Text>
          <Text><Numbered>•</Numbered> RBC recently made one of the biggest company acquisitions in Canada by acquiring HSBC</Text>
          <Text id="info-section"><Numbered>•</Numbered>RBC ranks third in AI use, innovation, and safety amongst all banks in North America</Text>
        </Section>

        <Section>
          <Heading>Learning Goals</Heading>
          <Text><Numbered>•</Numbered>	Improve presentation skills</Text>
          <Text><Numbered>•</Numbered>	Further develop both personal and technical skills</Text>
          <Text><Numbered>•</Numbered>	Drive more impact on projects and to be a core part of project development</Text>

          <hr></hr>
          <Text id="job-section">
            In my first 4 months at RBC, I received feedback on my performance and the need for improvement specifically in presentations.
            With more responsibilities and leadership, I've gotten more opportunities to demo and present both my work and achievements. My presentation skills have improved significantly since then, with thorough preparation and practice to ensure my presentations were a success.
            Another goal I aimed to achieve was developing both my personal and technical skills. Technically, I built a strong foundation in AI development but still wanted to learn much more in-depth.
            I also wanted to improve my personal skills such as leadership, communication and teamwork.
            Lastly, I wanted to drive more impact on projects, taking on more responsibilities and tasks to be a core part of the projects' development and progression.
          </Text>
        </Section>

        <Section>
          <Heading>Job Description</Heading>
          <Text>
            My time at RBC was entirely in the NOVA team under Data & AI. The sole focus of this team and project was to deliver an internal migration service, allowing other departments to migrate from legacy systems to modern ones.
            For the entire work term, I focused on the research, implementation, and development of AI for many different tasks and projects. As this role is more research & development (R&D) centric, there are less quantifiable deliverables.
                   
          </Text>

          <Subheading>May 2024 - July 2024</Subheading>
          <Text>
            From May to July, I worked on two major projects that became a core part of NOVA's features.
            Both projects aimed to leverage AI in new ways to increase the productivity of employees internally.
            One of the projects was the Application Assessment, a service that would take a legacy application's data and evaluate where would be the best fit under RBC's modern platforms.
            In this project, I co-wrote features and began to research new tools and frameworks that could be useful. One of them was LangGraph, a state graph package that allowed for agent workflows to be created. I implemented the agent workflow into the Application Assessment and added an automated process to standardize and self-improve LLM answers.
            The other project I built was a code conversion framework that allowed for migration from legacy code languages to modern ones. Using a similar agent workflow, additional technologies were added cohesively to retrieve relevant code samples and iteratively evaluate and improve LLM responses to produce high quality code.
            I had the opportunity to present and demo both projects and they were received well, with decisions made to proceed to production with them.
            </Text>

          <Subheading>August 2024</Subheading>
          <div className="showcase-section">
            <div className="showcase-text">
              <Text>
                After decisions were made to move to production with the features, I worked closely with the development team (front-end and full-stack developers) to build the features so that they met our requirements and expectations. Frequent communication with other teams was required to integrate the back-end frameworks that I built.
                As the features progressed and I began to offboard, I was tasked with filling out tons of documentation and creating over a dozen test cases for each feature to ensure that performance of the features can be monitored.
                The last task that I had was updating the Model Documentation report which was sent to stakeholders and RBC employees. To update the report, I had to meet with several teams to discuss the new features being released and their use of AI models in them.
                In August, I was also nominated for the Senior Leadership Team (SLT) Student Showcase event by my manager, Will. The SLT Student Showcase event is an event where the top 5 performing co-op students are nominated to present their achievements and experiences to the leadership team.
                This was an amazing experience as many of the Vice-Presidents (VPs) present were interested in my experiences and knowledge in AI, and were keen to have me return as a full-time employee in the future.
            </Text>
            </div>
            <div className="showcase-img">
              <img src={showcase} alt="RBC Student Showcase - Summer 2024" />
              <p className="img-description">RBC Student Showcase - Summer 2024</p>
            </div>
          </div>
        </Section>

        <Section id="conclusion">
          <Heading>Conclusion</Heading>
          <Text>
            Overall, I had an amazing experience working at RBC!
            I am forever thankful for the opportunity that RBC and my manager has given me to learn new, cutting-edge technology and to develop my skills in such impactful projects.
            I learned so much about AI and had the opportunity to learn and grow not only as an Engineer - but as a person, gaining many technical and soft skills which will become valuable for my future work experiences.
            With such new technologies in the world of AI, the role and team pushed me to learn many different concepts, technologies and aspects of AI and prompt engineering which was very eye-opening and revealed a new passion of mine!
            The primary goal in my young career as a software engineer is to deploy and work on impactful code that will be used and have a positive effect and I am definitely able to say that I have made an impact with the contributions that I have made in my short time!
          </Text>
        </Section>

        <Section id="acknowledgements">
          <Heading>Acknowledgements</Heading>
          <Text><Numbered>•</Numbered> My greatest appreciation goes to my manager Will who has given me the opportunity to continuously learn about AI and drive impact. With his feedback, I've improved drastically and have made the appropriate changes to drive success with the team.
          </Text>
          <Text><Numbered>•</Numbered>	Thanks to everybody on the Data & AI team. In the past eight months, I have met so many employees across RBC and have built such great connections with everyone here!
          </Text>
          <Text><Numbered>•</Numbered> A big thanks to Wilfredo and Mike for leading such a talented team and for their support. Even as a Senior Director and VP, they have made time to meet and chat with me throughout the work-term.</Text>
        </Section>

        <Footer/>

      </div>
  );
}

// Component styling
const Logo = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 0.35rem solid #20549c;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 1000;
  text-align: center;
  color: #07387a;
`;

const Subheading = styled.h1`
  font-size: 2.25rem;
  font-weight: 1000;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1.6;
  font-family: "Ubuntu",sans-serif;
  width: 100%;
  text-align: center;
`;

const Section = styled.div`
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 25px;
`;

const Numbered = styled.span`
  color: #20549c;
  font-weight: 600;
`;

export default App;