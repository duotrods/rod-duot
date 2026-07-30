import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Background from "../Background"
import Sidebar from "./Sidebar"
import MobileTopBar from "./MobileTopBar"

const AppShell = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (!drawerOpen) return

    document.body.style.overflow = "hidden"
    const onKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false)
    }
    window.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [drawerOpen])

  return (
    <div className="min-h-screen text-stone-300 antialiased overflow-x-hidden">
      <Background />

      {/* Desktop sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-72 z-20">
        <Sidebar />
      </div>

      {/* Mobile top bar */}
      <MobileTopBar onOpenMenu={() => setDrawerOpen(true)} />

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="lg:hidden">
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed inset-y-0 left-0 z-50 w-72"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25 }}
            >
              <Sidebar onNavigate={() => setDrawerOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Content pane */}
      <main className="lg:ml-72">{children}</main>
    </div>
  )
}

export default AppShell
