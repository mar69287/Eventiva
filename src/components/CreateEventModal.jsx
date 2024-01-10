import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaPlaneDeparture, FaPlane, FaRegCalendarAlt } from "react-icons/fa";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CreateEventModal = ({ isOpen, setIsOpen }) => {
    const [step, setStep] = useState(1)
    const [trip, setTrip] = useState(false)
    const [activity, setActivity] = useState(false)
    const [eventTitle, setEventTitle] = useState('Untitled event')
    const [eventDate, setEventDate] = useState('')
    const [eventDetails, setEventDetails] = useState('')

    const handleSubmit = () => {
      const eventInfo = {
        type: trip ? 'trip' : 'activity',
        title: eventTitle,
        date: eventDate,
        details: eventDetails,
      };
    
      console.log(eventInfo);
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-2 sm:p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-primary to-quaternary text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative "
          >
            <FaPlane className="text-white/10 rotate-12 text-[150px] sm:text-[250px] absolute z-0 -top-0 -left-0" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-primary grid place-items-center mx-auto overflow-hidden">
              {/* <div className="bg-white w-12 h-12 mb-2 rounded-full text-2xl text-primary grid place-items-center mx-auto overflow-hidden"> */}
                <FaPlaneDeparture />
              </div>
              {step === 1 && (
                  <StepOne trip={trip} setTrip={setTrip} activity={activity} setActivity={setActivity} setIsOpen={setIsOpen} step={step} setStep={setStep} />
              )}
              {step === 2 && (
                <StepTwo activity={activity} eventTitle={eventTitle} setEventTitle={setEventTitle} step={step} setIsOpen={setIsOpen} setStep={setStep} setEventDate={setEventDate} />
              )}
              {step === 3 && (
                <StepThree activity={activity} eventTitle={eventTitle} setEventTitle={setEventTitle} step={step} setIsOpen={setIsOpen} setStep={setStep} setEventDetails={setEventDetails} handleSubmit={handleSubmit} />
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
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
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

const StepTwo = ({ setStep, step, setIsOpen, setEventDate }) => {
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
        setEventDate(formattedDate)
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
                <div className="flex flex-row justify-between items-center mb-4 bg-white p-2 sm:w-1/2 cursor-pointer rounded-md" onClick={handleInputClick} >
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
          <motion.div
            style={{transform:"translate(.8)"}}
            // initial={{scale:.8}}

           className="calendar-container flex justify-center relative w-full overflow-hidden mb-3 text-[12px]">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={handleDayClick}
              className="rdp"
              initial={{scale:.8}}
              style={{ color: 'black', background: 'white', padding: 8, borderRadius: 15}}
            />
          </motion.div>
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

const StepThree = ({ activity, eventTitle, setEventTitle, setEventDetails, setStep, step, handleSubmit }) => {
  
    return (
      <>
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Finishing touches
        </h3>
        <p className="text-center mb-6">
          Let {activity ? 'others' : 'travelers'} know what your {activity ? 'activity' : 'trip'} is all about.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-left mb-2">
          {activity ? 'Activity' : 'Trip'} name
        </h3>
        <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="border mb-5 w-full text-black border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea name="" id="" cols="30" rows="6"
          placeholder="What's the plan for this event?"
          onChange={(e) => setEventDetails(e.target.value)}
          className="text-black w-full rounded focus:outline-none focus:border-blue-500 border p-2 mb-4"
        />
        <h3 className="text-lg sm:text-xl font-semibold text-left mb-2">
          Add cover photo
        </h3>
        <div className="w-full bg-white text-black h-[15rem] rounded flex justify-center items-center mb-3">
          Image placeholder
        </div>
        <div className="flex flex-row flex-wrap justify-evenly items-center mb-4">
          <div className="rounded-full bg-white h-10 w-10 mx-3"></div>
          <div className="rounded-full bg-white h-10 w-10 mx-3"></div>
          <div className="rounded-full bg-white h-10 w-10 mx-3"></div>
          <div className="rounded-full bg-white h-10 w-10 mx-3"></div>  
        </div>
        <div className="flex gap-2"> 
          <button
              onClick={() => setStep(step - 1)}
              className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
          >
              Back
          </button>
          <button
              onClick={handleSubmit}
              className="bg-white hover:opacity-90 transition-opacity text-primary font-semibold w-full py-2 rounded"
          >
              Submit
          </button>
        </div>
      </>
    );
};
export default CreateEventModal;