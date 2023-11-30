import { FiChevronDown } from "react-icons/fi";
import { MdOutlineAccountCircle, MdExitToApp } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../utilities/AuthContext";

const StaggeredDropDown = () => {
const [open, setOpen] = useState(false);

return (
    <div className="flex items-center justify-center ">
        <motion.div animate={open ? "open" : "closed"} className="relative">
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-[#FFF] border-2 border-[#FFF] hover:bg-[#FFF] hover:text-tprimary transition-all"
            >
            <span className="font-medium text-sm">Account</span>
            <motion.span variants={iconVariants}>
                <FiChevronDown />
            </motion.span>
            </button>

            <motion.ul
                initial={wrapperVariants.closed}
                variants={wrapperVariants}
                style={{ originY: "top", translateX: "-50%" }}
                className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
            >
                <Option setOpen={setOpen} Icon={MdOutlineAccountCircle} text="Account" />
                <Option setOpen={setOpen} Icon={MdExitToApp} text="Log out" />
            </motion.ul>
        </motion.div>
    </div>
);
};

const Option = ({ text, Icon, setOpen }) => {
    const {logoutUser} = useAuth()
    const handleClick = () => {
        setOpen(false);
        if (text === "Log out") {
          logoutUser()
        }
    };
return (
    <motion.li
        variants={itemVariants}
        onClick={handleClick}
        className="flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
    <motion.span className="text-lg" variants={actionIconVariants}>
        <Icon />
    </motion.span>
    <span>{text}</span>
    </motion.li>
);
};

export default StaggeredDropDown;

const wrapperVariants = {
open: {
    scaleY: 1,
    transition: {
    when: "beforeChildren",
    staggerChildren: 0.1,
    },
},
closed: {
    scaleY: 0,
    transition: {
    when: "afterChildren",
    staggerChildren: 0.1,
    },
},
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
open: {
    opacity: 1,
    y: 0,
    transition: {
    when: "beforeChildren",
    },
},
closed: {
    opacity: 0,
    y: -15,
    transition: {
    when: "afterChildren",
    },
},
};

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};