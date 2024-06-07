import { AdCard } from "@/components/cards/adcard";
import { ContentCard } from "@/components/cards/contentcard";

export default function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <ContentCard/>
      <ContentCard/>
      <ContentCard/>
      <AdCard/>
      <ContentCard/>
      <ContentCard/>
      <AdCard/>
      <ContentCard/>
    </div>
  )
}