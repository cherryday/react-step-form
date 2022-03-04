import { useRef, useState } from 'react'
import cn from 'classnames'
import { UiInput } from '../UiInput/UiInput'
import { ReactComponent as InIcon } from '../../assets/icons/in.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg'
import GalleryImg from '../../assets/icons/gallery.svg'
import styles from './ProfileForm.module.css'

export const ProfileForm = (): JSX.Element => {
  const [imageSrc, setImageSrc] = useState('')
  const inputFile = useRef<HTMLInputElement>(null)

  const fileUpload = () => {
    inputFile.current?.click()
  }

  const fileChange = (event: any) => {
    if (event.target.files[0]) {
      setImageSrc(URL.createObjectURL(event.target.files[0]))
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className="h1">Fill Your Profile</h1>
      <p className={styles.subtitle}>This basic information will be shown to your matches every week. Tell us what you would like to show!</p>
      <div className={styles.container}>
        <div className={cn(styles.card, {
          [styles.selected]: !!imageSrc
        })} onClick={fileUpload}>
          <img
            src={GalleryImg}
            alt="img"
            className={styles.cardImg}
          />
          <p className={styles.cardText}>Upload Your Photo</p>
          <input
            ref={inputFile}
            type="file"
            className={styles.cardInput}
            onChange={fileChange}
          />
          <img
            src={imageSrc}
            alt="img"
            className={styles.cardFile}
          />
        </div>
        <div>
          <p className={styles.socialTitle}>Other Profile</p>
          <UiInput
            icon={<InIcon/>}
            placeholder="LinkedIn URL"
            classNames={styles.socialInput}
          />
          <UiInput icon={<TwitterIcon/>} placeholder="Twitter URL"/>
        </div>
      </div>
    </div>
  )
}
