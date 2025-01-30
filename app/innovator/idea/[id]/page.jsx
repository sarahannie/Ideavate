import IdeaDetail from "@/src/Dashboard/Innovators/IdeaDetail/IdeaDetailpage"


export default async function IdeaDetailPage({ params }) {
  const resolvedParams = await params

  return (
    <main className="bg-gray-100 min-h-screen">
      <IdeaDetail params={{ _id: resolvedParams.id }} />
    </main>
  )
}

// export default async function IdeaDetailPage({ params }) {
//   const {id} = await params
//   return (
//     <main className="bg-gray-100 min-h-screen">
//       <IdeaDetail  id={id} />
//     </main>
//   )
// }