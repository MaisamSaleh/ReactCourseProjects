import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton  from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
import { useState } from "react";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function selectHandler(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    console.log(EXAMPLES[selectedTopic].title);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))}
          </ul>
        </section>
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
        </section>
      </main>
    </div>
  );
}

export default App;
