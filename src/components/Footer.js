import React from 'react'
import FooterMenu from './FooterMenu'

export default function Footer() {
  return (
    <footer className="py-3 footer">
      <div className="container">
        <FooterMenu/>
        <p className="text-end">Copyright Ⓒ 2023 DIET</p>
      </div>  
    </footer>
  )
}
