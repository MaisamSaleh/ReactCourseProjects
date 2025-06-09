import CoreConcept from "./CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "../data";

export default function CoreConceptsSection(){
    return (<section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem}/>
        ))}
        </ul>
    </section>);
}