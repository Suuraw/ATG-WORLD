import Navbar from './components/navbar'
import GroupHeader from './components/group-header'
import ContentTabs from './components/content-tabs'
import LocationInfo from './components/location-info'
import PostsContainer from './components/posts-container'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white-100">
      <Navbar />
      <GroupHeader />
      <div className="flex-grow flex flex-col">
        <ContentTabs />
        <div className="flex-grow flex overflow-hidden">
          <div className="flex-grow flex lg:px-4">
            <div className="w-full lg:w-8/12 overflow-hidden">
              <PostsContainer />
            </div>
            <div className="hidden lg:block lg:w-4/12 pl-8 overflow-y-auto">
              <LocationInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

