"use client"

import React from 'react'
import { Accordion } from "flowbite-react";

const MusicPage = () => {
  return (
    <>
    <div>
      <div className="px-5 py-10">
        <div className="mb-8 space-y-4">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-bold text-center">
            Frequently Asked Questions
          </div>{" "}
          <br />
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>Why is financial literacy important, and how does Fiscal Fit address this need?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white text-left">Financial literacy is crucial because it empowers individuals to manage their finances effectively, avoid debt problems, accumulate savings, and make informed investment decisions. Fiscal Fit addresses this need by utilizing AI-powered personalized learning, accessible content, and actionable tools to equip individuals with the knowledge and skills they need to navigate the complexities of personal finance.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How does Fiscal Fit measure success, and what metrics are used to evaluate its effectiveness?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white text-left">
              We measure the success of Fiscal Fit through a variety of metrics, including user engagement, knowledge retention, and financial behavior. Key metrics we track include user activity, completion rates, pre- and post-test scores, budget adherence, savings accumulation, and investment decisions. By analyzing these metrics, we can assess the effectiveness of our platform in improving financial literacy and promoting positive financial behaviors.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>What makes Fiscal Fit unique and effective compared to other financial education initiatives?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white text-left">
              Fiscal Fit stands out due to its unique combination of AI-powered personalized learning, accessibility features, and actionable tools. Unlike traditional financial education initiatives, which may offer generic content and lack personalization, our platform tailors content to individual user goals and knowledge levels, making learning more engaging and effective. Additionally, our focus on accessibility ensures inclusivity for all users, regardless of literacy levels or abilities, while our actionable tools empower individuals to apply their newfound knowledge in practical ways.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          
        </Accordion>

        
      </div>
      </div>
      </div>
    </>
  )
}

export default MusicPage
