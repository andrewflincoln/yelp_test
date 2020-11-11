import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    console.log("Hello there!")
    try {  
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'seattle'
        }
      })
      setResults(response.data.businesses)
    } catch(err) {
      setErrorMessage('Something went wrong!')
    } 
  }

  //call searchapi when component is first rendered
  useEffect(() => {
    searchApi('pizza')
  }, [])

  return [searchApi, results, errorMessage]

}