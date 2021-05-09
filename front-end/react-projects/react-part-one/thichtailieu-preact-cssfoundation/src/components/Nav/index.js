import { h } from 'preact';
import style from './style.css';

import config from '../../../siteConfig'

const Nav = () => {
	return (
    <header class={`grid-container fluid`}>
      <nav class={`${style.nav}`}>
        <h1 class={`${style.heading}`}>{config.title}</h1>
        <p class={`${style.tagline}`}>{config.tagLine}</p>
      </nav>
    </header>
  )
}

export default Nav;
 