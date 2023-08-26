import {useState,useEffect} from 'react'
import { useQuery , gql } from '@apollo/client'
const Home = () => {
  const getData = gql`
  query Events {
    events {
      createdAt
      desc
      descSn
      eventDateTime
      gMapUrl
      id
      publishedAt
      slug
      title
      titleSn
      translateSn
      updatedAt
      img {
        url
      }
    }
  }
  `
  const { loading, error, data } = useQuery(getData);

  if(loading) {
    console.log("loading")
  }
  else{
    console.log(data)
  }
  return (
    <div >Home</div>
  )
}

export default Home