import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { MdLocationOn } from "react-icons/md";
import { getRemainingDaysLabel } from "../../lib.js";
import Language from "../../components/Language.jsx";
import TextAn from "../TextAn.jsx";

import {  useEffect, useState } from "react";
import Error404Page from "./Error404Page.jsx";
import PageAn from "../PageAn.jsx";
import LoadingPage from "./LoadingPage.jsx";
const SingleEvent = () => {
  const [lang , setLang] = useState({
    title:'',
    desc:''
  })
  const { slug } = useParams();
  const eventDataQuery = gql`
  query {
    event(where: {slug:"${slug}"}) {
      id
      title
      titleSn
      titleTm
      desc
      descSn
      descTm
      translateSn
      translateTm
      img {
        url
      }
      gMapUrl
      eventDateTime
      
    }
  }
  `;
  const { loading, error, data } = useQuery(eventDataQuery);
  
  let dayLabel = ''
  useEffect(()=>{
    console.log(data)
    if(data){
      if(data.event != null){
        setLang({
          title:data.event.title,
          desc:data.event.desc
      })
      dayLabel = getRemainingDaysLabel(data.event.eventDateTime)
    }
    }
  },[data])
  console.log(data)
  // dayLabel = getRemainingDaysLabel(data.event.eventDateTime)
  console.log(lang)
  if (loading) return <LoadingPage/>;
  if(data){
    if(data.event != null){

  dayLabel = getRemainingDaysLabel(data.event.eventDateTime)
  
  return (
    <PageAn>
    <div className="flex text-white">
      <div className="flex m-10 w-full rounded-lg card">
        <div className="flex bg-[#181818] m-[2px] w-full rounded-lg">
          <div className="flex flex-col justify-center w-[350px] items-center">
            <div className="mx-8 my-8 p-[2px] card bg-green-50 rounded-lg">
              <img
                src={data.event.img.url}
                alt=""
                height={300}
                width={300}
                className="rounded-lg"
              />
            </div>
            <h2 className="font-bold">
              {data.event.eventDateTime.split("T")[0]}
            </h2>
            <div className="card text-2xl font-bold flex p-2 rounded-xl mt-2 mb-8">
              {dayLabel}
            </div>
          </div>
          <div className="flex m-3 py-3">
            <div className="w-[2px] h-full card rounded-full"></div>
          </div>
          <div className="flex flex-col max-w-[1000px] p-3">
            <p className="flex self-end font-semibold bg-yellow-600 px-2 rounded-lg ">#UpComingEvent</p>
            <Language setLang={setLang} data={data.event}/>
            <TextAn bgColor={'red'}>
            <h1 className="text-[42px] font-bold ">{lang.title}</h1>
            </TextAn>
            <TextAn>
            <p className="flex my-4 text-[22px]">{lang.desc}</p>
            </TextAn>
            <div className="card self-start flex p-[2px] rounded-xl m-4">
              <a
                href={data.event.gMapUrl}
                target="_blank"
                className="flex bg-[#181818] px-2 py-1 rounded-xl items-center"
              >
                <MdLocationOn className="text-white text-[30px] p-1" />
                <p className="font-semibold ml-1">Location</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageAn>
  )}else{
    return <Error404Page/>
  }};
};

export default SingleEvent;
