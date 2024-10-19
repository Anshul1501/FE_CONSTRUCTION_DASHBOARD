import './App.css'
import ProgressTracker from './Component/ProgressTracker/ProgressTracker'
import ProjectCard from './Component/ProjectCard/ProjectCard'
import Filters from './Component/ProjectLeadsHeader/ProjectLeadsHeader'
import Sidebar from './Component/Sidebar/Sidebar'


function App() {
  return (

 <>
 <div className='w-[100%] flex'>
  <div className='w-[18%]'>
    <Sidebar/>
  </div>
  <div className='w-[82%] ml-[-3px]'>
    <Filters/>
    <ProgressTracker/>
  <div className='flex flex-col place-content-center space-y-3 bg-gray-50 items-center'>
  <ProjectCard/>
  <ProjectCard/>
  </div>
  </div>
 </div>
 </>
   
  )
}

export default App
