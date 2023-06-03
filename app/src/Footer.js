import React from 'react'

export const Footer = () => {
    const year = new Date();
  return (
    <p>copyrighted &copy; {year.getFullYear()}</p>
  )
}
