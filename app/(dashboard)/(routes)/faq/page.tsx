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
            <Accordion.Title>How does Kisan Ka Link address the interconnected challenges of connectivity, market access, and financial inclusion for rural farmers, and what is the expected overall impact on their livelihoods and the agricultural sector?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white text-left">
              - Connectivity Improvement: Kisan Ka Link will achieve a 30% reduction in connectivity challenges for rural farmers, resulting in decreased delays in product transportation to urban markets.

                <br /><br/>
                - Market Access: The establishment of Kisan Ka Link Hubs in rural and urban areas will lead to a 40% increase in farmers accessing B2B markets, as evidenced by transaction data and increased market participation rates.
<br/><br/>
                - Financial Impact: Through Kisan Ka Link&apos;s support, farmers will experience a 25% increase in average income, indicating a successful resolution to the challenge of limited financial inclusion.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What additional success metrics, beyond those already identified, could be tracked to comprehensively assess the impact of Kisan Ka Link on the agricultural sector?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white text-left">
                - Real-time Visibility Enhancement: The implementation of real-time visibility measures will result in a 20% reduction in delivery time, positively impacting the efficiency of logistical processes.

                <br /><br/>
                - B2B Market Optimization: Kisan Ka Link will facilitate a 35% improvement in farmers securing prices above the market average in B2B transactions, showcasing a tangible success in optimizing market outcomes.
<br/><br/>
- Cost Reduction: Leveraging existing platforms and adopting a software-only solution will lead to a 15% reduction in overall operational costs for farmers, contributing to financial sustainability.
<br/><br/>
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>What are the potential future applications of the AI-driven analytics powered by Google technologies within the agricultural sector beyond Kisan Ka Link&apos;s current scope?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white text-left">
                - Google Cloud&apos;s Client-Server Platform: Usage analytics from this platform will reveal a 25% increase in the efficiency of Kisan Ka Link&apos;s data-driven AI methodologies in addressing logistical complexities.

                <br /><br/>
                - Google&apos;s Gemini API Methodology: Analytics derived from Gemini API will show a 30% reduction in the time required for farmers to assemble their products in the right market, demonstrating the effectiveness of AI-driven optimizations.
<br/><br/>
              
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
