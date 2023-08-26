import React from "react";
import EventCard from "../../components/EventCard";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import TextAn from "../TextAn";
import PageAn from "../PageAn";
import LoadingPage from "./LoadingPage";

const Events = () => {
  const eventsQuery = gql`
    query MyQuery {
      events {
        img {
          url
        }
        slug
        title
        eventDateTime
      }
    }
  `;
  const { loading, error, data } = useQuery(eventsQuery);

  if (loading) {
    return <LoadingPage/>;
  }
  if (error) {
    return <h1>Something Went Wrong</h1>;
  } else {
    const cardsData = data.events;
    console.log(data.events)
    return (
      <PageAn>
      <div className="w-full h-full my-20 text-white flex items-center flex-col">
        <TextAn bgColor={'red'}>
        <h1 className="text-3xl font-bold mb-3">All Upcoming Events</h1>
        </TextAn>
        <div className="h-[3px] w-[500px] self-center card rounded-full mb-6"></div>
        <div className=" flex gap-8 flex-wrap items-center justify-center">
          {cardsData?.map((item) => {
            return (
              <div key={item.slug}>
                <EventCard img={item.img.url} slug={item.slug} title={item.title} date={item.eventDateTime}/>
              </div>
            );
          })}
        </div>
      </div>
      </PageAn>
    );
  }
};

export default Events;
