import { h } from 'preact'
import { useState } from 'preact/hooks'
import style from './style.css'
import config from '../../../siteConfig'

const AnnouncementBar = () => {
  const [show, setShow] = useState(true)
  const hidden = () => setShow(false)

  return (
    <>
      {show ? (
        <div class={`grid-container full cell ${style.banner}`} role='banner'>
          <span> {config.announcementBar} </span>
          <a
            href={config.AnnouncementBarLink}
            target='_blank'
            rel='noreferrer nofollow'
          >
            tại đây
          </a>
          <span> ⭐️ </span>
          <button
            aria-label='Close'
            class={style.button}
            type='button'
            onClick={hidden}
          >
            <span aria-hidden='true' class={style.button}>
              ×
            </span>
          </button>
        </div>
      ) : null}
    </>
  )
}

export default AnnouncementBar
