import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function Timelines() {
  return (
    <div className="   flex flex-row items-center justify-center p-10">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>
              October 2022 Expansion into New Markets: Launching in Three
              Additional Cities
            </Timeline.Title>
            <Timeline.Body>
              In our relentless pursuit of growth and innovation, we're excited
              to announce our expansion into three new cities, further
              solidifying our presence in the real estate market. With our
              proven track record of success and commitment to excellence, we're
              eager to extend our services to new communities, offering
              homeowners and buyers unparalleled opportunities in the housing
              market.
            </Timeline.Body>
            <Button color="gray">
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title>
              Celebrating 100% Client Satisfaction Rating
            </Timeline.Title>
            <Timeline.Body>
              We're delighted to share that we've achieved a perfect 100% client
              satisfaction rating, a testament to our unwavering dedication to
              customer service and client-centric approach. This milestone
              reflects the trust and confidence our clients have placed in us,
              and we're deeply grateful for the opportunity to serve them. As we
              continue to prioritize excellence in all that we do, we remain
              committed to exceeding expectations and delivering exceptional
              results for each and every client.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>April 2022</Timeline.Time>
            <Timeline.Title>
              Recipient of the Real Estate Excellence Award
            </Timeline.Title>
            <Timeline.Body>
              We're thrilled to announce that we've been honored with the
              prestigious Real Estate Excellence Award, recognizing our
              outstanding contributions and achievements in the industry. This
              esteemed accolade serves as a validation of our commitment to
              excellence, innovation, and customer satisfaction. We're immensely
              proud of our team's hard work and dedication, and we're grateful
              for the continued support of our clients and partners. As we look
              ahead, we remain steadfast in our mission to set new standards of
              excellence in the real estate sector.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
