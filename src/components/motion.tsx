import { motion } from "motion/react"

export default function Motion() {
  return <motion.div animate={{ rotate: 360 }} className="bg-red-500 w-10 h-10"></motion.div>
}