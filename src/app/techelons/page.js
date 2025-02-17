"use client"

import Header from "../_components/Header"
import Footer from "../_components/Footer"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const TechelonsHero = ({
  events = [
    {
      title: "Dark Coding",
      desc: "A competitive coding challenge testing problem-solving skills under time constraints.",
      img: "/assets/Poster.png",
      date: "March 15, 2025",
      venue: "Hall A",
      time: "10:00 AM - 12:00 PM",
    },
    {
      title: "Googler",
      desc: "An event assessing search efficiency and information retrieval capabilities.",
      img: "/assets/Poster.png",
      date: "March 15, 2025",
      venue: "Lab 1",
      time: "1:00 PM - 3:00 PM",
    },
    {
      title: "Web Hive",
      desc: "A web designing competition encouraging creativity and technical expertise.",
      img: "/assets/Poster.png",
      date: "March 16, 2025",
      venue: "Hall B",
      time: "11:00 AM - 1:00 PM",
    },
    {
      title: "Whatzapper",
      desc: "An event emphasizing rapid texting and effective communication.",
      img: "/assets/Poster.png",
      date: "March 16, 2025",
      venue: "Lab 2",
      time: "2:00 PM - 4:00 PM",
    },
    {
      title: "AI Artistry",
      desc: "A competition exploring AI-generated art and creativity.",
      img: "/assets/Poster.png",
      date: "March 17, 2025",
      venue: "Hall C",
      time: "12:00 PM - 2:00 PM",
    },
    {
      title: "E-Lafda",
      desc: "A LAN gaming competition for gaming enthusiasts.",
      img: "/assets/Poster.png",
      date: "March 17, 2025",
      venue: "Gaming Zone",
      time: "3:00 PM - 5:00 PM",
    },
  ],
}) => {
  const router = useRouter()

  const handleExit = () => {
    window.open("/registrationclosed", "_self")
  }

  return (
    <>
      <Header />
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="overflow-hidden">
        <motion.div className="flex items-center justify-center w-full mt- px-4" variants={fadeIn}>
          <div className="inline-flex items-center space-x-2 px-5 py-4 rounded-full bg-gray-900 text-white text-sm">
            <motion.span
              className="w-3 h-3 rounded-full bg-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
            <span className="font-bold">Registration Closed</span>
          </div>
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight" variants={fadeIn}>
            Techelons'25
          </motion.h1>
          <motion.p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" variants={fadeIn}>
            Techelons is the annual technical festival organized by Webster's, the Computer Science Society of Shivaji
            College, University of Delhi. It has grown into a national platform for students to showcase their technical
            skills and creativity.
          </motion.p>
          <motion.div className="mt-8 sm:mt-12 flex justify-center px-4" variants={scaleUp}>
            <img
              src="/assets/Poster2.jpg"
              alt="Techelons 25 Poster"
              className="w-full max-w-4xl rounded-md shadow-lg"
            />
          </motion.div>
          <motion.h1 className="text-6xl sm:text-5xl lg:text-8xl font-extrabold text-gray-900 mt-12 sm:mt-16" variants={fadeIn}>
            Events
          </motion.h1>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-screen-xl mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-lg rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-left cursor-pointer group"
                >
                  <img
                    src={event.img || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-blue-600">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{event.desc}</p>
                    <p className="text-gray-500 text-xs">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="text-gray-500 text-xs">
                      <strong>Venue:</strong> {event.venue}
                    </p>
                    <p className="text-gray-500 text-xs">
                      <strong>Time:</strong> {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div className="mt-12 sm:mt-16 text-center px-4" variants={fadeIn}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Join Us</h2>
            <p className="text-base sm:text-lg text-gray-900 max-w-lg mx-auto mt-3 sm:mt-4 mb-5 sm:mb-6">
              Be part of an inspiring journey into the world of technology and innovation at Techelons'25.
            </p>
            <motion.button
              className="bg-gray-900 text-white py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg font-bold rounded-full shadow-md"
              whileHover={{ scale: 1.05, backgroundColor: "#1a202c" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExit}
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default TechelonsHero