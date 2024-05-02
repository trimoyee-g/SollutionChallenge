"use client";

import React from "react";
import { Accordion } from "flowbite-react";

const VideoPage = () => {
  return (
    <>
      <div>
        <div className="px-5 py-10">
          <div className="mb-8 space-y-4">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-bold text-center">
              Solution
            </div>{" "}
            <br />
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>
                How it helps to solve the problem?
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
                <Accordion.Title>What are the important metrics?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                  - User engagement metrics: Track user activity, completion rates of modules, and participation in gamified elements. <br/>
	- Knowledge retention: Assess learning outcomes through pre- and post-tests, quizzes, and simulations. <br/>
	- Financial behavior metrics: Monitor budget adherence, savings accumulation, and investment decisions to gauge the real-world impact of the solution.
<br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Frameworks/Technologies stacks to be used</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                    - Frontend: Utilizing open-source technologies like ReactJS for dynamic and responsive user interfaces along with Tailwind CSS , and Matplotlib and Seaborn for visualizations. <br/>
	- Backend: Leveraging Python/Django for scalability, security, and ease of development. <br/>
	- Cloud platforms: Deploying on platforms like Google Cloud Platform (GCP) or Amazon Web Services (AWS) for data storage, scalability, and global reach.

                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel>
                <Accordion.Title>Assumptions, constraints, and solution decision points</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                    - Assumptions: Users have basic internet access and are comfortable with devices. Funding for development and maintenance is available. <br/>
	- Constraints: Limited resources and time for development. <br/>
	- Solution decision points: Chose open-source frameworks for cost-effectiveness and community support. Opted for cloud platforms for scalability and global reach.

                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Extent of Scalability/Usability</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-gray-400 text-left">
                    - Scalability: The solution is designed with modular components and utilizes cloud platforms for easy scaling to accommodate growing user bases and feature updates. <br/>
	- Usability: User-friendly interfaces, multiple language support, and accessibility features ensure broad usability across diverse demographics.
 <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              
              
              
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
