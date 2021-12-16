import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { EventsList } from '../components/events-list'
import fetch from "node-fetch";
import { CircularProgress } from '@material-ui/core'

export default function Home() {
  // variable to store the events in front-end's "state"
  // `events` contains the event data
  // `setEvents` is a function to assign the `events` variable
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const inputElement = useRef()

  useEffect(() => {
    setLoading(true)
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        if (!response.data) {
          throw new Error('no data returned')
          return [];
        }
        // here, we're using the `setEvents` function to, ...well, set events
        // with the value of the `data` property in the response object.
        setEvents(response.data);
      } catch (error) {
        setError(error)
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents();
  }, []);

  const handleClickSearch = event => {
    event.preventDefault();
    setLoading(true);
    fetch(`/api/events?pid=${ inputElement.current.value }`)
      .then(response => response.json())
      .then(events => {
        setEvents(events)
      })
      .catch(error => {
        console.log(error)
        setEvents([])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (error) {
    return (
      <div>an error occurred!</div>
    )
  }
  
  if (!events.length && !loading) {
    return (
      <div>no events!</div>
    )
  }

  return (
    <div>
      <form onSubmit={ handleClickSearch }>
        <input ref={ inputElement }/>
        <button>search</button>
      </form>
      <hr />
      { loading 
      ? <CircularProgress /> 
      : <EventsList events={ events } /> }
    </div>
  )
}