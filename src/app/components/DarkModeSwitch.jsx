"use client"
//import React from 'react'
//import { MdLightMode } from 'react-icons/md'
//import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

export const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  console.log(systemTheme, theme, currentTheme);
  return (
    <div>
      <button>{systemTheme}</button>
    </div>
  )
}