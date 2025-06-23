import { useRef, useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectSidebar from './components/ProjectSidebar.jsx'

function App() {
  const [ projectState, setProjectState ] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddPoject(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState((prevState)=>{
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return [...prevState.projects , newProject];
    })
  }

  let content;
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddPoject} />
  }
  
  console.log(projectState);

  return (
    <main className='h-screen my-8 flex py-8'>
      <ProjectSidebar onStartAddProject={handleStartAddPoject} />
      {content}
    </main>
  );
}

export default App;
