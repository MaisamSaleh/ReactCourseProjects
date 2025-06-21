import NewProject from './components/NewProject.jsx';
import ProjectSidebar from './components/ProjectSidebar.jsx'

function App() {
  return (
    <main className='h-screen my-8 flex py-8'>
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
