import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectSidebar from './components/ProjectSidebar.jsx'

function App() {
  const [ projectState, setProjectState ] = useState({
    selectedProjectId: undefined,
    pojects: []
  })

  function handleStartAddPoject(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  let content;
  if(projectState.selectedProjectId === null){
    content = <NewProject />
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddPoject} />
  }

  return (
    <main className='h-screen my-8 flex py-8'>
      <ProjectSidebar onStartAddProject={handleStartAddPoject} />
      {content}
    </main>
  );
}

export default App;
