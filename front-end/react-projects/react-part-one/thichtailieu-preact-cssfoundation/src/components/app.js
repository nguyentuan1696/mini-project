import { h } from 'preact';

import AnnouncementBar from './AnnouncementBar'
import Nav from './Nav'
import Card from './Card'
import Footer from './Footer'
const App = () => (
	<div id="app">
		<AnnouncementBar />
		<Nav />
		<Card />
		<Footer />
	</div>
)

export default App;
