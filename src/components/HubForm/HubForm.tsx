import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import LocationImg1 from '../../assets/images/location-1.png'
import LocationImg2 from '../../assets/images/location-2.png'
import LocationImg3 from '../../assets/images/location-3.png'
import LocationImg4 from '../../assets/images/location-4.png'
import LocationImg5 from '../../assets/images/location-5.png'
import LocationImg6 from '../../assets/images/location-6.png'
import { UiRadio } from '../UiRadio/UiRadio'
import { UiInput } from '../UiInput/UiInput'
import styles from './HubForm.module.css'
import { useState } from 'react'

export const HubForm = (): JSX.Element => {
  const [selectedLocation, setSelectedLocation] = useState('')
  const locations = [
    { src: LocationImg1, title: 'Austin' },
    { src: LocationImg2, title: 'Dallas' },
    { src: LocationImg3, title: 'San Antonio' },
    { src: LocationImg4, title: 'Houston' },
    { src: LocationImg5, title: 'New York' },
    { src: LocationImg6, title: 'Los Angeles' },
  ]

  return (
    <div className={styles.wrapper}>
      <h1 className="h1">Hub form</h1>
      <p className={styles.subtitle}>We are active in major cities and we schedule meetings based on time zones. Let us know your home base.</p>
      <UiInput
        icon={<SearchIcon/>}
        placeholder="Search your hub.."
      />
      <h3 className={styles.h3}>Popular Hub</h3>
      <div className={styles.list}>
        {locations.map(l => {
          return <UiRadio
            name="location"
            key={l.title}
            src={l.src}
            title={l.title}
            active={selectedLocation === l.title}
            onChange={() => setSelectedLocation(l.title)}
          />
        })}
      </div>
    </div>
  )
}
