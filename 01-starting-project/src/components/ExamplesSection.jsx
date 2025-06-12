import TabButton  from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function ExamplesSection(){
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function selectHandler(selectedButton){
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if(selectedTopic) {
    tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>);
  }

    return(   
        <Section title="Examples" id = "examples">
          <Tabs buttons={<>
            <TabButton isSelect={selectedTopic==='components'} onClick={()=> selectHandler('components')}>Components</TabButton>
            <TabButton isSelect={selectedTopic==='jsx'} onClick={()=> selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelect={selectedTopic==='props'} onClick={()=> selectHandler('props')}>Props</TabButton>
            <TabButton isSelect={selectedTopic==='state'} onClick={()=> selectHandler('state')}>State</TabButton>
            </>}> {tabContent}</Tabs>
        </Section>);
        }