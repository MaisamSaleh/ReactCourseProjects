import { useRef, useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectSidebar from './components/ProjectSidebar.jsx'
import SelectedProject from './components/SelectedProject.jsx';

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
    const projectId = Math.random();

    setProjectState((prevState)=>{
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects : [...prevState.projects, newProject],
      };
    })
  }

  function handleCancle(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleSelectProject(id){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleDelete(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDelete} />;
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancle} />
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddPoject} />
  }

  return (
    <main className='h-screen my-8 flex py-8'>
      <ProjectSidebar onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId} onStartAddProject={handleStartAddPoject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
