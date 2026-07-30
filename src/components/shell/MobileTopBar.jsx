import { FiMenu } from "react-icons/fi"
import profilePic from "../../assets/rodprofile.png"

const MobileTopBar = ({ onOpenMenu }) => (
  <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-slate-950/80 backdrop-blur border-b border-white/10">
    <img
      src={profilePic}
      alt="Rod Du-ot"
      className="w-9 h-9 rounded-full object-cover border border-white/15"
    />
    <button
      onClick={onOpenMenu}
      aria-label="Open menu"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-white transition-colors"
    >
      <FiMenu size={18} />
    </button>
  </div>
)

export default MobileTopBar
