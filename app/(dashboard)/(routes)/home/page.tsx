"use client";

import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";

const DashboardPage = () => {
  return (
    <div>
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of Fiscal Fit
        </h2>
        <div className="border p-1 md:p-5 lg:p-4  ">
          <p className=" font-light text-sm md:text-lg text-start">
          Our project aims to tackle the widespread issue of financial illiteracy by developing an innovative AI-powered platform for personalized financial education. This platform will provide tailored learning experiences to empower individuals from all backgrounds to effectively manage their finances, make informed decisions, and build a more secure financial future. Through a combination of interactive modules, actionable tools, and accessibility features, we seek to promote financial inclusion, reduce economic disparities, and foster financial resilience in society.
          </p>
        </div>
      </div>
      <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>
                Delve into Financial Academia
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                  - Applied Learning Opportunities: Our platform provides users with the chance to delve into financial academia by offering applied learning opportunities. Through interactive modules, users can explore foundational concepts in finance, economics, and investment, gaining practical insights that bridge the gap between theory and real-world application. By engaging with case studies, simulations, and hands-on exercises, users can deepen their understanding of financial principles and develop critical thinking skills essential for success in academia and beyond. <br></br>
	- Access to Cutting-Edge Research: Users can access a curated selection of academic research papers, articles, and publications on our platform, allowing them to stay updated on the latest developments and trends in the field of finance. By connecting users with groundbreaking research and thought leadership from leading scholars and practitioners, our platform fosters a culture of continuous learning and intellectual curiosity. Whether exploring emerging theories, empirical studies, or innovative methodologies, users have the opportunity to expand their knowledge base and contribute to the advancement of financial academia. <br></br>
	
{" "}
                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                Fun Profit Ventures
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                  - Personalized learning: AI-powered modules tailor content to individual user goals and knowledge levels, making financial education more engaging and effective. <br></br>
	- Accessibility: Offering content in multiple languages, incorporating text-to-speech features, and designing user-friendly interfaces ensures inclusivity for all users, regardless of literacy levels or abilities. <br></br>
	- Actionable tools: Integrating budgeting tools, connecting users with financial advisors, and providing information on relevant financial products empower individuals to make informed decisions and manage their finances effectively.
{" "}
                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                Get your personalized financial plan
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                  Assess Financial Goals and Knowledge: <br/>

- Utilize the platform&apos;s personalized learning modules to assess the user&apos;s financial goals, knowledge levels, and current financial situation. <br/>
- Complete quizzes, simulations, and self-assessment tools to identify areas of strength and areas that require improvement. <br/><br/>
Create a Budget and Savings Plan:<br/>

- Use the platform&apos;s budgeting tools to create a personalized budget based on the user&apos;s income, expenses, and financial goals. <br/> 
- Set aside a portion of income for savings, emergency funds, and long-term goals such as retirement or education. <br/><br/>
Explore Investment Options: <br/>

- Learn about different investment options available through the platform, such as stocks, bonds, mutual funds, and ETFs. <br/>
- Assess risk tolerance and investment objectives to develop a personalized investment strategy aligned with the user&apos;s financial goals and timeline. <br/><br/>
Receive Personalized Recommendations: <br/>

- Based on the user&apos;s financial profile and goals, receive personalized recommendations for financial products and services available through the platform. <br/>
- Explore options for credit cards, loans, insurance policies, and other financial products tailored to the user&apos;s needs and preferences. <br/><br/>

Track Progress and Adjust Accordingly: <br/>

- Use the platform&apos;s tracking tools to monitor progress towards financial goals, track spending habits, and measure investment performance. <br/>
- Adjust the financial plan as needed based on changes in income, expenses, market conditions, and life events. <br/>
{" "}
                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              </Accordion>

      {/* <div className="h-80 sm:h-96 xl:h-120 2xl:h-144">
        <Carousel>
          <div className="bg-transparent">
            <img
              src="about.jpg"
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-transparent">
            <img
              src="abou4.jpg"
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-transparent">
            <img
              src="about5.jpg"
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </Carousel>
      </div> */}
    </div>
  );
};

export default DashboardPage;
