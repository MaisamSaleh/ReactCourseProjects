import TabButton  from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function ExamplesSection(){
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function selectHandler(selectedButton){
    setSelectedTopic(selectedButton);
  }

    return(   
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelect={selectedTopic==='components'} onSelect={()=> selectHandler('components')}>Components</TabButton>
            <TabButton isSelect={selectedTopic==='jsx'} onSelect={()=> selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelect={selectedTopic==='props'} onSelect={()=> selectHandler('props')}>Props</TabButton>
            <TabButton isSelect={selectedTopic==='state'} onSelect={()=> selectHandler('state')}>State</TabButton>
          </menu>
          { !selectedTopic? <p>Please select a topic!</p> : null}
          { selectedTopic? (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>) : null}
        </section>);
        }