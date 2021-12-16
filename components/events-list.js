import styles from '../styles/events.module.css'

export const EventsList = ({ events }) => {
  return (
    <div className={ styles.eventsList }>
      <p>Showing { events.length } results...</p>
      { 
        events.map((event, i) => {
          return (
            <div key={ i } className={ styles.event }>
              <h3>{ event.name }</h3>
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>
          )
        })
      }
    </div>
  )
}