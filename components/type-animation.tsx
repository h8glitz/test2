"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypeAnimationProps {
  sequence: (string | number)[]
  wrapper: string
  speed: number
  repeat: number | boolean
  className?: string
}

export function TypeAnimation({ sequence, wrapper, speed, repeat, className }: TypeAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [sequenceIndex, setSequenceIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isDone && !repeat) return

    if (isDone && repeat) {
      setSequenceIndex(0)
      setCharIndex(0)
      setIsDeleting(false)
      setIsDone(false)
      return
    }

    const currentItem = sequence[sequenceIndex]

    // If current item is a number (delay)
    if (typeof currentItem === "number") {
      timeout = setTimeout(() => {
        const nextIndex = (sequenceIndex + 1) % sequence.length
        setSequenceIndex(nextIndex)
      }, currentItem)
      return () => clearTimeout(timeout)
    }

    // If current item is a string (text to type)
    if (isDeleting) {
      // Deleting text
      timeout = setTimeout(() => {
        setDisplayText(currentItem.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex <= 1) {
          setIsDeleting(false)
          const nextIndex = (sequenceIndex + 1) % sequence.length
          setSequenceIndex(nextIndex)

          if (nextIndex === 0 && typeof repeat === "number") {
            repeat -= 1
            if (repeat <= 0) {
              setIsDone(true)
            }
          }
        }
      }, speed / 2) // Deleting is faster
    } else {
      // Typing text
      timeout = setTimeout(() => {
        setDisplayText(currentItem.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex >= currentItem.length - 1) {
          // Check if next item is a number (delay)
          const nextItem = sequence[(sequenceIndex + 1) % sequence.length]
          if (typeof nextItem === "number") {
            timeout = setTimeout(() => {
              setIsDeleting(true)
            }, nextItem)
          } else {
            setIsDeleting(true)
          }
        }
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [sequence, sequenceIndex, charIndex, isDeleting, isDone, repeat, speed])

  const Wrapper = wrapper as any

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={displayText}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {displayText || "\u00A0"}
      </motion.span>
    </AnimatePresence>
  )
}
