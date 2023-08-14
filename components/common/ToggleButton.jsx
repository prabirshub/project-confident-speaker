import { motion } from 'framer-motion'
import { useState } from 'react'

const ToggleButton = () => {
  return (
    <motion.div className='switch p-2 mt-1 layout transition={spring}'>
      <input
        type='checkbox'
        className='relative appearance-none inline-block h-[23px] w-[50px] cursor-pointer rounded-full bg-pink-200 transition-all after:content-[""] after:absolute after:top-[3px] after:left-[4px] after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:transition-all checked:bg-zinc-400 checked:after:bg-zinc-800 checked:after:translate-x-6'
      />
    </motion.div>
  )
}
export default ToggleButton

// const ToggleButton = () => {
//   const [isOn, setIsOn] = useState(false)
//   const spring = {
//     type: 'spring',
//     stiffness: 700,
//     damping: 30,
//   }
//   const toggleSwitch = () => setIsOn(!isOn)

//   return (
//     <div
//       className={
//         'w-40 h-24 bg-pink-400/40 flex rounded-full p-[10px] cursor-pointer' +
//         (!isOn ? 'justify-start' : 'justify-end')
//       }
//       onClick={toggleSwitch}
//     >
//       <motion.div
//         className='w-20 h-20 bg-white rounded-full'
//         layout
//         transition={spring}
//       />
//     </div>
//   )
// }

// export default ToggleButton
