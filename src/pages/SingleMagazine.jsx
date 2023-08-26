import { useQuery,gql } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import Error404Page from './Error404Page'


const SingleMagazine = () => {
  const {slug} = useParams()
  const query = gql`
  query MyQuery {
    magazine(where: {slug: "gini-siluwa-oct-2023"}) {
      title
      topics
      imgPages {
        url
      }
      pdf {
        url
      }
    }
  }
  `
  const {data , loading } = useQuery(query)
  console.log(data)
  if(loading) return <div>Loading</div>
  if(data){
    if(data.magazine == null){
      return (
        <Error404Page/>
      )
    }
  }
  if(data){
    if(data.magazine != null){
      return(
        <div>
          
        </div>
      )
    }
  }
}

export default SingleMagazine

