import ArticleCard from './article-card'
import EventCard from './event-card'
import EducationCard from './education-card'
import JobCard from './job-card'

export default function PostsContainer() {
  return (
    <div className="h-full overflow-y-auto px-4 lg:px-0">
      <div className="space-y-4 pb-4">
        <ArticleCard />
          <EducationCard />
        <EventCard />
        <JobCard />
      </div>
    </div>
  )
}

