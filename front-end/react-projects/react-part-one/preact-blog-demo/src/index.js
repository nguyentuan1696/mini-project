import { h } from 'preact'
import { render } from 'preact-render-to-string'
import { MDXProvider } from '@mdx-js/preact'
import App from './components/app'

render(
  <MDXProvider components={{}}>
    <App />
  </MDXProvider>
)
export default App;
