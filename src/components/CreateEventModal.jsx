import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaPlaneDeparture, FaPlane } from "react-icons/fa";

const CreateEventModal = ({ isOpen, setIsOpen }) => {
    const [trip, setTrip] = useState(false)
    const [activity, setActivity] = useState(false)
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-primary to-quaternary text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FaPlane className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-20 -left-14" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-primary grid place-items-center mx-auto">
                <FaPlaneDeparture />
              </div>
              <StepOne trip={trip} setTrip={setTrip} activity={activity} setActivity={setActivity}  />
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Return
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-primary font-semibold w-full py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const StepOne = ({}) => {
    return (
        <>
            <h3 className="text-3xl font-bold text-center mb-2">
            Let's set up your event!
            </h3>
            <p className="text-center mb-6">
            What have you decided?
            </p>
            <div className="flex gap-3 flex-col mb-6">
                <button
                    className=" hover:opacity-90 transition-opacity text-white border-2 border-dashed border-white font-semibold w-full py-2 rounded"
                >
                    Trip
                </button>
                <button
                    className=" hover:opacity-90 transition-opacity text-white border-2 border-dashed border-white font-semibold w-full py-2 rounded"
                >
                    Acivity
                </button>
            </div>
        </>
    )   
}
export default CreateEventModal;