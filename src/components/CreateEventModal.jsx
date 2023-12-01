import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaPlaneDeparture, FaPlane, FaRegCalendarAlt } from "react-icons/fa";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CreateEventModal = ({ isOpen, setIsOpen }) => {
    const [step, setStep] = useState(1)
    const [trip, setTrip] = useState(false)
    const [activity, setActivity] = useState(false)
    const [eventDetails, setEventDetails] = useState({})
    const [eventTitle, setEventTitle] = useState('Untitled')
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
              {step === 1 && (
                  <StepOne trip={trip} setTrip={setTrip} activity={activity} setActivity={setActivity} setIsOpen={setIsOpen} step={step} setStep={setStep} />
              )}
              {step === 2 && (
                <StepTwo activity={activity} eventTitle={eventTitle} setEventTitle={setEventTitle} step={step} setIsOpen={setIsOpen} setStep={setStep} />
              )}
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const StepOne = ({ trip, setTrip, activity, setActivity, step, setStep, setIsOpen }) => {
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
                    onClick={() => {
                        setTrip(!trip)
                        setActivity(false);
                    }}
                    className={` hover:opacity-90 ${trip ? 'bg-[#f2decb] border-solid text-primary' : 'border-2 border-dashed border-white text-white'} transition-opacity border-2  border-white font-semibold w-full py-2 rounded`}
                >
                    Trip
                </button>
                <button
                    onClick={() => {
                        setTrip(false)
                        setActivity(!activity);
                    }}
                    className={` hover:opacity-90 ${activity ? 'bg-[#f2decb] border-solid text-primary' : 'border-2 border-dashed border-white text-white'} transition-opacity border-2  border-white font-semibold w-full py-2 rounded`}
                >
                    Acivity
                </button>
            </div>
            <div className="flex gap-2">
                <button
                onClick={() => setIsOpen(false)}
                className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                    {step === 1 ? 'Close' : 'Return'}
                </button>
                <button
                    onClick={() => setStep(step + 1)}
                    disabled={step === 1 && !(trip || activity)}
                    className="bg-white hover:opacity-90 transition-opacity text-primary font-semibold w-full py-2 rounded"
                >
                    {step === 1 ? 'Next' : 'Finish'}
                </button>
            </div>
        </>
    )   
}

const StepTwo = ({ setStep, step, setIsOpen }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    const [selected, setSelected] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
  
    const handleInputClick = () => {
      setShowCalendar(true);
    };
  
    const handleDayClick = (date) => {
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        setSelected(formattedDate);
        setShowCalendar(false);
    };
  
    return (
      <>
        <p className="text-center mb-6">
          Have you decided a date?
        </p>

        {!showCalendar && (
            <>
                <h3 className="text-xl font-bold text-left mb-2">
                Date
                </h3>
                <div className="flex flex-row justify-between items-center mb-4 bg-white p-2 w-1/2 cursor-pointer rounded-md" onClick={handleInputClick} >
                    <input
                        type="text"
                        defaultValue={selected}
                        className="border-none text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <FaRegCalendarAlt className="text-primary" />
                </div>
            </>
        )}
        {showCalendar && (
          <div className="calendar-container flex justify-center relative">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={handleDayClick}
              style={{ color: 'black', background: 'white', padding: 8 }}
            />
          </div>
        )}
        <div className="flex gap-2">
            <button
                onClick={() => {
                    if (showCalendar) {
                        setShowCalendar(false);
                        setSelected('')
                    } else {
                        setStep(step - 1)
                    }
                }}
                className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
            >
                {showCalendar ? 'Clear Calendar' : 'Return'}
            </button>
            <button
                onClick={() => setStep(step + 1)}
                className="bg-white hover:opacity-90 transition-opacity text-primary font-semibold w-full py-2 rounded"
            >
                {selected ? 'Next' : 'Skip'}
            </button>
        </div>
      </>
    );
};
const StepThree = ({ activity, eventTitle, setEventTitle }) => {
  
    return (
      <>
        <p className="text-center mb-6">
          Let others know what your {activity ? 'activity' : 'trip'} is all about.
        </p>
        <h3 className="text-xl font-bold text-left mb-2">
          {activity ? 'Activity' : 'Trip'} name
        </h3>
        <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="border mb-5 w-full text-black border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        
      </>
    );
};
export default CreateEventModal;