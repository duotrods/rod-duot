import { motion } from "framer-motion";
import { SERVICES } from "../constants/index"; // Import the service data

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <div className="">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center text-4xl"
      >
        Services
      </motion.h2>

      <div className="mt-20 mb-20 flex items-center justify-center">
        <motion.div
          className="grid md:grid-cols-3 gap-6 w-full max-w-6xl"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeIn}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="p-6 bg-white/5 border-[1.5px] border-white/15 backdrop-blur-[1.4px] text-white rounded-xl shadow-lg text-left transform transition-all duration-300 hover:shadow-1xl hover:border-blue-500"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="bg-blue-600 p-5 rounded-full text-white"
                    whileHover={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon size={25} /> {}
                  </motion.div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mt-2">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
