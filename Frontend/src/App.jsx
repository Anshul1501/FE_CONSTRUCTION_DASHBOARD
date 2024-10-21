import './App.css'
import ProgressTracker from './Component/ProgressTracker/ProgressTracker'
import ProjectCard from './Component/ProjectCard/ProjectCard'
import Filters from './Component/ProjectLeadsHeader/ProjectLeadsHeader'
import Sidebar from './Component/Sidebar/Sidebar'


function App() {
  return (

    <>
    <div className="w-[100%] h-screen flex">
  {/* Sidebar */}
  <div className="w-[18%] h-full">
    <Sidebar />
  </div>

  {/* Main Content */}
  <div className="w-[82%] h-full flex flex-col">
    {/* Filters and ProgressTracker */}
    <div className="flex-none">
      <Filters />
    </div>
    <div className="flex-none">
      <ProgressTracker />
    </div>

    {/* Scrollable Project Card Section */}
    <div className="flex-grow justify-items-center overflow-y-scroll bg-gray-50 items-center">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
</div>

    </>

  )
}

export default App
