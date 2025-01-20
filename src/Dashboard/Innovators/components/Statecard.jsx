import { FaArrowDown, FaArrowUp, FaBox, FaCartArrowDown, FaChartLine } from 'react-icons/fa'
import { FaClock, FaLightbulb, FaTrophy } from 'react-icons/fa'

export function StatCard({ title, value, change, start, down, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <Icon className={`h-12 w-12 rounded-full p-2 ${
              Icon === FaLightbulb
                ? "text-purple-600 bg-purple-100"
                : Icon === FaBox
                  ? "text-yellow-600 bg-yellow-100"
                  : Icon === FaTrophy
                    ? "text-blue-600 bg-blue-100"
                    : "text-purple-600 bg-purple-100"
            }`} />
      </div>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      {change && (
        <p className="mt-2 flex items-center text-sm text-green-600">
          <FaChartLine className="h-4 w-4 mr-1 text-green" />
          {change} from yesterday
        </p>
      )}
      {
        start && (
          <p className="mt-2 flex items-center text-sm text-green-600">
            <FaChartLine className="h-4 w-4 mr-1 text-green" />
            <span className='text-green mr-1'>{start}</span> up from past week
          </p>
        )
      }
      {
        down && (
          <p className="mt-2 flex items-center text-sm text-green-600">
            <FaArrowDown className="h-4 w-4 mr-1 text-red-600" />
           <span className='text-red-600 mr-1'>{down}</span> down from past week 
          </p>
        )
      }
    </div>
  )
}