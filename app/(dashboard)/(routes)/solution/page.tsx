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
                  Kisan Ka Link for Google Cloud
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                    - Kishan Ka Link leverages Google Maps APIs for geospatial
                    analysis, helping with route optimization for deliveries to
                    rural areas. <br/>- Implement location-based services to track the
                    movement of inventory and shipments in real-time.<br/>- It also
                    offers training programs and support services for users to
                    ensure they can effectively utilize the platform, also
                    creating documentation and tutorials to help users navigate
                    and make the most of the SaaS platform.<br/>- Connecting
                    Kishan Ka Link platform with Google Cloud's data analytics
                    tools, such as BigQuery, to gain insights into inventory
                    trends and every Kishan's behavior, helping in better demand
                    forecasting and inventory optimization.<br/>- Kishan Ka Link chooses
                    Google Cloud Platform (GCP) for its scalability,
                    reliability, and a wide range of services. It also leverages
                    Google Cloud Storage for storing large datasets, such as
                    inventory records and sales data and uses Google Cloud
                    Functions for serverless computing to handle specific tasks,
                    such as updating inventory levels or sending alerts. <br/>- It is
                    developed keeping in mind an user-friendly interface for the
                    platform, keeping in mind the technological literacy of
                    users in rural areas and features that allow users to easily
                    manage inventory, track shipments, and analyze sales data.{" "}
                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Kisan Ka Link for database</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                    - Simplified data protection for SQL Server to provide
                    hassle-free solution to farmers.
                    <br />
                    - Kisan Ka Link provides instant data protection by
                    integrating with native VSS technology. <br />
                    - Achieve near Zero RTO with clones.
                    <br />
                    - Provision SQL databases and servers instantly for Dev/Test
                    and non recovery use cases. <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Restore tables</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                    - Restore only the specific set of corrupt tables instead of
                    reverting the complete database.
                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel>
                <Accordion.Title>Point-In-Time Recovery</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                    - Turn the clock backwards and restore databases to any
                    Point in Time with just a simple click.
                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Auto clean old backups</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-gray-400 text-left">
                    - Manage life cycle of the copies at the policy and
                    transaction level & retain critical backups beyond retention
                    cycle. <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Instant Copies</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-gray-400 text-left">
                    - Instant copies of database for Analytics, Test/Dev in
                    minutes. <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Reports</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                    - Generate detailed database reports and monitor the live
                    servers connected to the Kisan Ka Link hotspots available
                    for any databases created using Kisan Ka Link.
                    <br />
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Stress free backup</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-black dark:text-white text-left">
                    - Stress free backup with no load on machine and network.{" "}
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
