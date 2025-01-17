import IdeaDetail from "@/src/Dashboard/Innovators/IdeaDetail/IdeaDetailpage";


export default function IdeaDetailPage({ params }) {
  return (
    <main className="bg-gray-100 min-h-screen">
      <IdeaDetail id={params.id} />
    </main>
  )
}
