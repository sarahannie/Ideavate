import { FaArrowUp } from 'react-icons/fa'

export function StatCard({ title, value, change, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <Icon className="h-8 w-8 text-gray-400" />
      </div>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      {change && (
        <p className="mt-2 flex items-center text-sm text-green-600">
          <FaArrowUp className="h-4 w-4 mr-1" />
          {change} from yesterday
        </p>
      )}
    </div>
  )
}