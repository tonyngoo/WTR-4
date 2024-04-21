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
            The Business Banking Hub is an ongoing project which will be used between business clients and workers at TD. The project serves as a separate banking platform/service for businesses. It is used to support and meet
            the financial need of businesses, which can vary from large corporations to small businesses.
            With my time at TD Bank, I was primarily working on the Business Banking Hub project, specifically with the Credit team.
          </Text>
          <Subheading>Interesting Facts</Subheading>
          <Text><Numbered>•</Numbered> TD Bank was founded as early as the 1855s.</Text>
          <Text><Numbered>•</Numbered> Their office is located in Downtown Toronto, with 5 main tower buildings - work commutes are mandatory on Wednesdays.</Text>
          <Text id="info-section"><Numbered>•</Numbered>The Business Banking Hub team consists of 3 teams that specialize in a specific aspect of the project, named PODs.</Text>
        </Section>

        <Section>
          <Heading>Goals</Heading>
          <Text>
            Heading into my second work term working as a Quality Engineer (different job position than my first co-op), I decided to make more general goals as I was unsure of what to expect. For me, the main goal while
            working as a Quality Engineer was to learn about the responsibilities, tasks and lifestyle of working as a full-time Quality Engineer - I wanted to explore if being a Quality Engineer was a career or job that was suitable for me in the future. With the goals that I set, I was aiming to align them with the company's goals,
            while still allowing myself to grow and develop.
          </Text>
          <hr></hr>
          <Text>The goals that I set were to:</Text>

          <Text><Numbered>•</Numbered>	Improve my communication skills working in a team environment, and to build connections with coworkers</Text>
          <Text><Numbered>•</Numbered>	Learn new technologies and skills to improve my knowledge and skills in the software industry</Text>
          <Text><Numbered>•</Numbered>	Improve my problem identification and solving skills</Text>

          <hr></hr>
          <Text>
          Through my four months working with the team at TD Bank, I was able to successfully complete the goals that I set. I saw significant improvement in all the goals that I set and am happy with the outcome of my learnings!
          The goal that I am most satisfied with in this work term is my acquired knowledge in new and different technologies and software tools. 
          Learning new skills and expanding my knowledge in technologies will definitely benefit me in the future, as I can use them to transition easier and contribute more in future roles!

          </Text>

          <Text id="goals-section"> 
            The technologies I wanted to learn the most were Java, Selenium, Gherkin, and Cucumber. I wanted to use these technologies as I did not have much knowledge and experience in them before, and it would
            have helped me achieve my goal of learning new technologies. I was most interested in learning how to use Java at a more advanced level since it is one of the biggest and most popular languages used.
            The only experience I had using Java in the past was in CIS*2430 - Object Oriented Programming, and it was very insightful to learn how to use Java at a higher level,
            especially at the scale that TD Bank uses it! I also learnt how to use software tools such as JIRA, JTMF and Jenkins. Learning how to use different software tools was very interesting and insightful as it showed the different
            processes and procedures that were needed to complete tasks. Overall, I am very happy with my progress and having the opportunity to learn and use Java at a higher level! Many other companies use the Java language
            and it can be beneficial or advantageous to have that knowledge in the future.
          </Text>

        </Section>

        <Section>
          <Heading>Job Description</Heading>
          <Text>
            My time at TD Bank was entirely in the Business Banking Hub team, specifically in the Credit POD. Throughout the entire work term, I was given a primary task to be completed, but I was also assigned minor or small tasks to complete on the side as well.
            At first, I was assigned a roadmap (which contains the work to be completed week-by-week), but the plans of the roadmap changed due to the circumstances of the work that was assigned. In response, a new roadmap was created, which was what I focused on completing!
          </Text>

          <Subheading>May 2023</Subheading>
          <Text>My first month at TD Bank was filled with a lot of information, documentation, and security training. 
            The first couple weeks at TD Bank was exciting as I was tasked with learning new technologies on-the-job, learning and using technologies such as Java, Selenium, Gherkin and Cucumber.
            After 1 week of training, I was assigned my roadmap, which was a scheduled list of tasks that were to be completed week-by-week.
            The roadmap assigned to me was focused on consolidating and grouping existing test cases together to minimize the time that it took to run test cases on Jenkins.
            The goal of the roadmap was to complete 3 objects in the span of 3 months.
            At first glance, this was an easy task but it was a lot harder than anticipated as the test cases assigned to me were all broken and out-dated.
            This meant that I had to fix and debug all of the test cases in order to complete them, which was not expected by my supervisors and managers.
            Due to the circumstance, I notified my supervisor that this roadmap was unrealstic and it would be more likely that 1 object was achieved, but this was never updated to my manager, Priya which led to misunderstandings in the future.


          </Text>
          <Text>Overall in my first month, I was able to fix and group together 28 test cases!</Text>

          <Subheading>June 2023</Subheading>
          <Text>
            In my second month, I continued to work on grouping and fixing test cases. In this period of time, I became a lot more comfortable and familiar with the technologies used and was able to fix and debug much more complex test
            cases on my own! After some experience using the languages, I was confident in my ability to problem solve and debug test cases on my own and was able to fix test cases at a significantly faster rate.
            I also learned how to use tools such as JIRA and JTMF which was very important for my assigned task. Using tools such as JIRA and JTMF allowed me to better understand the purpose of the test cases,
            allowing me to group them better and to fix them more confidently without needing to ask my coworkers or supervisors for help. I was also assigned to complete small tasks such as WalkMe testing, which
            allowed me to work with coworkers in my POD to perform detailed and thorough testing on the user interface (UI) of the Business Banking Hub website. In my second month, I kept running into one problem - when I was stuck while debugging or tried to communicate my status
            to my POD lead or supervisor, I was often ignored or neglected, yet I was still expected to complete the tasks on-time and to have it complete at the end of every week. However, coworkers and other interns in my team
            were very kind and would reach out quickly to help instead. These coworkers - specifically Nithin (a coworker who supervised a different POD) were very kind and helpful and always reached out
            to me when I needed help or had any questions.
          </Text>
          <Text>In my second month, I was able to fix and group together 55 test cases, while working on alternate testing tasks as well!</Text>

          <Subheading>July 2023</Subheading>
          <Text>
            In my third month at TD Bank, I began to feel a lot more confident and proficient with the technologies used and I also had the opportunity to work on different tasks as well!
            The first two weeks consisted of closing out test cases for the originally assigned area of the object, as well as learning how to use a new software tool, Jenkins. I learned how to use Jenkins and built my
            own Jenkins builds (also known as jobs) to execute test cases that I had been working on up until that point in time. I was also tasked with creating my own test case and scripts! One of the test cases I created was to automate searching a table and asserting that its results
            resembled an excel spreadsheet which had the expected titles, descriptions, code numbers, and much more. Other test cases consisted of validating new components in the user interface of the Business Banking Hub website.
            Being able to write my own tests was very eye-opening and exciting as I got to write my own code for once, instead of analyzing, optimizing, and debugging pre-existing code.
            It was very insightful and challenged my thinking as I had to find the most optimal and efficient way of writing the test cases if it was being ran for thousands of lines and for hours during test automation.
            Afterwards, I was assigned a different aspect of the object to work on. I continued to consolidate and group more test cases together, where more difficult and challenging problems arose due to the
            test cases being even more out-dated (the test scripts were all 6+ months old).
            
          </Text>
          <Text>Nonetheless, I was still able to fix and group together 68 test cases and also created my own test cases which are deployed as well!</Text>

          <Subheading>August 2023</Subheading>
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