import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton  from "./components/TabButton.jsx";

function App() {
  function selectHandler(selectedButton){
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=> selectHandler('Components')}>Components</TabButton>
            <TabButton onSelect={()=> selectHandler('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=> selectHandler('Props')}>Props</TabButton>
            <TabButton onSelect={()=> selectHandler('State')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
