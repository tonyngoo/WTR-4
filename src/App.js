import React from 'react';
import styled from 'styled-components';

// Import logo and components
import logo from './assets/logo.jpg';
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
          <Subheading>January 2024 - April 2024</Subheading>

          <Section>
          <Text class="text" id="intro-section">

            In the past 4 months at RBC, I worked as a Developer on the Data & Analytics (DNA) team. My experience at RBC has been amazing! I have been surrounded in such a positive and supportive work environment with coworkers and mentors who have helped me along the way.
            I learned a lot throughout this work-term, learning many new skills, lessons and insight on the industry which I will carry with me into my Summer term with RBC, as well as my future endeavours.

          </Text>
        </Section>
        </div>



        <Section>
          <Heading>What is RBC?</Heading>
          <Text>
            Royal Bank of Canada (RBC) is a financial service corporation that has existed since the 19th century. RBC is one of the largest banks in North America, competing with banks such as TD Bank,
            Bank of Montreal (BMO), JPMorgan Chase, and Bank of America. The products and services provided to customers consist of banking, investing, and insurance and is delivered to people, businesses, and even institutions.
            RBC is well-known for their convenience and customer service, and their commitment towards innovation and new technology in banking.
          </Text>
          <Subheading>What is Data & Analytics (DNA)?</Subheading>
          <Text>
            Data & Analytics, also known as DNA, is a team that is involved in many projects. The DNA team is focusing on leveraging AI to drive solutions to many of the problems that RBC has in technology. The team is comprised of more than 200 employees who all work on the development and integration of AI into our workflows. One of the major focuses from the team is NOVA, which is a legacy system and code migration service using AI and prompt engineering. Another big focus was Emerald, which was the team responsible for the HSBC acquisition and providing a smooth carry-over from one bank to another. The other big focus is the management, use and monitoring of big data.
          </Text>
          <Subheading>Interesting Facts</Subheading>
          <Text><Numbered>•</Numbered> RBC was founded in 1864.</Text>
          <Text><Numbered>•</Numbered> Their office is located in Downtown Toronto, with more than 5 tower buildings spanning around Union Station.</Text>
          <Text id="info-section"><Numbered>•</Numbered>RBC recently made one of the biggest company acquisitions in Canada, by acquiring HSBC.</Text>
        </Section>

        <Section>
          <Heading>Goals</Heading>
          <Text>
            Heading into my third work term working as a Developer, I was hesitant as I knew that this role involved the use of AI, but I was super excited to learn. Since I had no prior knowledge of AI when heading into this term, I was unsure of what to expect. 
            For me, the main goal was to as learn much as possible about AI and to become highly knowledgable in it, as I believe it will be very valuable experience for the future. With the goals that I set, I was aiming to align them with the company's goals,
            while still allowing myself to grow and develop.
          </Text>
          <hr></hr>
          <Text>The goals that I set were to:</Text>

          <Text><Numbered>•</Numbered>	Improve my communication skills working in a team environment, and to build connections with coworkers</Text>
          <Text><Numbered>•</Numbered>	Learn new technologies and skills to improve my knowledge and skills in the software industry</Text>
          <Text><Numbered>•</Numbered>	Take initiative in finding new and better ways to solve problems</Text>

          <hr></hr>
          <Text>
          In the past fourth months working at RBC, I believe I made tons of progress and successfully completed the goals that I set. I made significant improvements in all the goals that I set and am happy with the outcome of my learnings!
          The goal that I am most satisfied with in this work term is my acquired knowledge in AI and all the new cutting-edge technology related to AI. 
          Learning skills and how to leverage AI will definitely benefit me in the future, as I can use this knowledge and experience to drive more solution, contribute more and transition earier in my future roles!
          </Text>

          <Text id="goals-section"> 
            The technologies I wanted to learn the most were Python, Java, Scala, as well as concepts related to AI and prompt engineering. I wanted to use these technologies as I did not have much knowledge and experience in them before, and I believed they
            would be valuable skills to learn for the future, especially with all the rave and demand for AI in this age of technology. Since the start of my work term, I have learned all the fundamental and advanced concepts of prompt engineering and prompting techniques.
            I have also learned how to use Python for AI development and how to pair it with OpenAI, Langchain and additional frameworks to run AI models to solve and answer questions. I've also learned how to integrate frameworks into Python
            and gateways, with successful integration of PromptFoo and MLFlow to evalaute responses from an LLM (large-language-model). I have also learned Docker and containerization which will be valuable for other roles in the future as well.
            Although I did not get to use Java and Scala, I am extremely satisfied wtih my progress and the opportunity to learn and hone my knowledge in AI development!
          </Text>

        </Section>

        <Section>
          <Heading>Job Description</Heading>
          <Text>
            My time at RBC was entirely in the NOVA team under DNA. The sole focus of this team and project was to deliver a legacy code migration service, allowing users to accurate convert code from one language to another.
            For the entire work term, I focused on the research, implementation, and development of AI for many different tasks and projects. As this role is more research & development (R&D) centric, there are less quantifiable deliverables.
                   
          </Text>

          <Subheading>January 2024</Subheading>
          <Text>My first month at RBC was filled with security training and tons of learning and researching. 
            The first couple weeks at RBC was exciting as I got to learn about all the fundamental AI and prompt engineering concepts. I also learned about new technologies and frameworks while on-the-job, using Python, Langchain, and Azure OpenAI to run my very first AI program locally!
            After some training, I was tasked with researching and developing an AI model that used retrieval-augmented generation. First, I had to thoroughly research retrieval-augmented generation (RAG). 
            In case you don't know, RAG is a technique that uses vector databases to retrieve relevant information, which then gets sent to an LLM (large-language model), such as OpenAI to help them generate a more ideal answer. With a vector database, it allows for the storage of tons of context, allowing an LLM to become highly knowledgable in any topic.
            RAG also processes information quicker and saves tokens (money) when used at larger scales since it doesn't depend on the knowledge of previous prompts in a conversation with the LLM.
            With RAG, retrieval from the database can be used in 2 different ways, either for RetrievalQA (question and answer by the LLM) or Summarization (a summarization generated by the LLM).
            With this gained knowledge, I developed a basic AI model that used retrieval-augmented generation (RAG), using Python with HuggingFace for vector storing and Langchain for retrieval of vectors.
            After developing this basic model, I started to work on developing a proof of concept (POC) RAG program to determine if it was worth transition the team's prompting technique.
          </Text>

          <Subheading>February 2024</Subheading>
          <Text>
            In my second month, I developed the proof of concept RAG program with summarization, running and comparing it with the original In-Context Learning program and evaluating the results.
            The results concluded that the summarization RAG technique was not suitable for the use case of the project, and that RetrievalQA was more ideal.
            Shortly after, I was assigned a group task to focus on, which was the optimization of the existing prompt chain that the team was using. The prompt chain consisted of 10-12 prompts
            and was using too many tokens. This was because the In-Context Learning technique adds the previous conversation history into the next prompt, which accumulates token usage exponentially.
            As a result, I was tasked with optimizing the prompt chain to lower the amount of tokens used for each execution. To optimize the prompt chain, I proposed 2 different ideas, both segmenting the prompt chain into 2 separate chains.
            Both ideas led to a reduction in tokens and also reduced the runtime which was great progress! The only drawback from these optimizations were the slight decrease in the quality of repsonses from the LLM.
            After some careful analysis and testing, the optimization ideas were proposed to my manager.
            Lastly for this month, I was also tasked with looking at different Text Splitters and determining which one gave the best and most consistent results from the LLM.
            The conclusive result from this task was that the Recursive Text Splitter was the best as it was most consistent across different types of loaded data, such as .txt files, .pdf files and even websites.
          </Text>

          <Subheading>March 2024</Subheading>
          <Text>
            In my third month, I proposed the optimization ideas to my manager and received feedback on the optimizations. With some revisions made, I worked on improving the approaches and eventually got the opportunity to demo and present the approach to 100+ employees in the team!
            Before getting to demo, we wanted to find a solution to another problem that we found during the prompt development phase. During this phase, we realized it was time-consuming and difficult to determine whether the changes we were making to the prompt were good or bad.
            When working on our approaches, it would take hours to test and evaluate the quality of outputs from a single run and to ensure consistency, we had to repeat this process 5 times.
            To solve this problem, we researched different LLM evaluation frameworks that could be used to simplify the process. With a list of possible frameworks, we presented the findings to my manager and worked on trying to integrate some of them into our machines.
            This proved to be a challenging task as the frameworks had difficulty integrating with the gateway that was being used to ensure privacy. With some problem solving, customizations were made to the framework which allow interaction with the gateway, and ultimately the Azure OpenAI model.
            At first, I implemented MLFlow which was not very helpful as it did not have consitent and accurate scores for the metrics provided. Afterwards, I implemented SciKit which was a great backup evaluation,
            using cosine similarity to determine how similar 2 bodies of text were. Last but not least, I integrated PromptFoo which turned out to be a great tool! It provided tons of metrics that were great for the team's use case and had the ability to customize basically anything.
            With the ability to customize to the team's needs, I integrated the gateway with it and customized the prompting and outputs to use the least amount of tokens possible. With a great use case made, I proposed and demo'd the framework to my manager.
            My manager was very satisfied with the results and we got to demo this as a part of our presentation. This is a moment I'm very proud of as I got to demo this framework, explaining what it is and how to use it from start to finish for 15 minutes!
            After the demo, my manager wanted to turn PromptFoo into a prompt development toolkit that others could use. To achieve this, I created a documentation package and developed more use cases for PromptFoo, allowing others to setup the framework and use it easily.
            On top of the demo, I also hosted meetings with Senior Developers and Directors to integrate PromptFoo into their workflow. After this meeting, I began to work with many of them to help set PromptFoo up and to create specific use cases for them, which involved customizations to the framework and its configurations.
          </Text>

          <Subheading>April 2024</Subheading>
          <Text>
            In my final month, I aimed to complete as many test cases as possible in the newly assigned component of the object.
            I continued to group and fix test cases as fast as possible, utilizing all of the technologies that I have learned throughout the work term! I used Java, Selenium, Gherkin, and Cucumber to group, debug, and run the test cases.
            JTMF and JIRA were being used to create the new and unique test case IDs and to track the execution status, seeing whether they passed or failed. Lastly, Jenkins was being used to build the tests and to verify whether
            they were execution successfully or not. I used all of these technologies to successfully complete my task, creating all of the test cases assigned in my roadmap and closing out my final month strong, confidently fixing and debugging
            problems on my own and even optimizing the test cases so that they would run more efficiently. In the last month, I found out that many of the test cases were outdated and the scripts were inefficient. As a result,
            I changed the routing of many of the test cases and updated them so that their test scripts flowed with the UI and the user story that was posted on JIRA. Overall, I learned a lot in this last month
            and gained more confidence in my ability to analyze and solve problems as I was faced with much more challenging test cases.
          </Text>
          <Text id="desc-section">In my final month, I was able to close out the work term strong with over 76 test cases which were all grouped, fixed, and built on Jenkins!</Text>
          <br></br>
          <hr></hr>
        </Section>

        <Section id="conclusion">
          <Heading>Conclusion</Heading>
          <Text>Overall, I had a good experience working at TD Bank for my second work term. 
            I am very thankful for the opportunity that TD Bank has given for me to learn, grow, and develop in the software industry!
            I was able to learn a lot about the tasks, responsibilities, and the lifestyle of working as a full-time Quality Engineer and gained a ton of insight working at an enterprise as large as TD Bank.

            I had the opportunity to learn and grow not only as an Engineer - but as a person, gaining many technical and soft skills which will become valuable for my next work experience.
            The QE (Quality Engineering) team pushed me to learn many different technologies and aspects of quality testing/assurance, which was very eye-opening and helped me better understand what I am passionate about!
            The primary goal in my young career as a developer is to deploy impactful code that will be used and have a positive impact and I am definitely able to say that I have made an impact with the thousands of lines of code that I have worked on and deployed in my short time!
            The relationships and connections that I got to build with colleagues and coworkers at TD Bank was amazing. Most coworkers were nice and amazing people to connect and have conversations with every single day!
            Although there were problems with my supervisor (reluctance to help and communicate with me), I was able to make the most out of my situation and was able to build stronger connections with other coworkers and supervisors in the team.
            I will continue to support them and look forward to seeing their success!
          </Text>
        </Section>

        <Section id="acknowledgements">
          <Heading>Acknowledgements</Heading>
          <Text><Numbered>•</Numbered> My greatest appreciation goes to my manager Priya, who gave me the opportunity to join the Business Banking Hub's Quality Engineering team at TD Bank.
            She has also given me lots of feedback and advice for me throughout the work term and has tried her best to ensure that I have a positive experience at TD Bank!
          </Text>
          <Text><Numbered>•</Numbered>	Thanks to everybody on the Business Banking Hub team, specifically Nithin from POD 2 for being so kind and always reaching out to help me in a timely manner.
            The team was great and the coworkers were awesome to work with!
          </Text>
          <Text><Numbered>•</Numbered> A big thanks to Olga for reaching out to me, in consideration of how to use my employee benefits as a TD Bank staff member.</Text>
          <Text><Numbered>•</Numbered> I would also like to thank Maggie for the smooth hiring process, as well as Amanda for making sure that I had the proper equipment to do my job.</Text>
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