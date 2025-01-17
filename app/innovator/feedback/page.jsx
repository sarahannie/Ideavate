import EvaluationDetails from "@/src/Dashboard/Innovators/feedback/feedbackpage";


export default function EvaluationPage({ params }) {
  return (
    <main className="bg-gray-100 min-h-screen">
      <EvaluationDetails id={params.id} />
    </main>
  )
}