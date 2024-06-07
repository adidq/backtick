import { ContentCard } from "@/components/contents/card";

export default function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <ContentCard/>
    </div>
  )
}