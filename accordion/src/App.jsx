import React from 'react'
import Accordion from './components/Accordion'
import { accordionData } from './utils/content'
const App = () => {
  <div className="accordion">
    { accordianData.map(({title, content}) => (<Accordion title={title} content={content}/>))}
  </div>
}

export default App