'use client'
import { ThemeProvider } from 'next-themes'

export function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider> 
  )
}