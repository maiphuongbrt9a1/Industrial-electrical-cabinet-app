import './components/UIUX/Home.jsx'
import { DashboardHome } from './components/UIUX/Home.jsx'
import { DashboardDevices } from './components/UIUX/Devices.jsx'

export default function App() {
  return (
    <div className="w-full h-screen flex">
      {/* <DashboardHome /> */}
      <DashboardDevices/>

    </div>

  )
}