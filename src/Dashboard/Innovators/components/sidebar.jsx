import Link from 'next/link'
import { FaHome, FaLightbulb, FaCommentDots, FaChartLine } from 'react-icons/fa'

const sidebarItems = [
  { name: 'Dashboard', icon: FaHome, href: '/dashboard' },
  { name: 'My Ideas', icon: FaLightbulb, href: '/dashboard/my-ideas' },
  { name: 'Expert Feedback', icon: FaCommentDots, href: '/dashboard/expert-feedback' },
  { name: 'Funding Progress', icon: FaChartLine, href: '/dashboard/funding-progress' },
]

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold text-gray-800">Ideavate</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

