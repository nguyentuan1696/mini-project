import { h } from 'preact'
import style from './style.css'
import config from '../../../siteConfig'

const Footer = () => {
  return (
    <footer class={`grid-container full cell ${style.footer}`}>
      <p>
        {config.copyright}
        <a href='https://thichtienganh.com/' target='_blank' rel='noreferrer'>
          {config.shortName}
        </a>
      </p>
    </footer>
  ) 
}

export default Footer