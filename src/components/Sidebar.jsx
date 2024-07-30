import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { IoWalletSharp } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdOutlineLogin } from "react-icons/md";
const Sidebar = ({bgColor,color}) => {
  return (
    <>
    
      <div className="side_bar_content" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>
        <div className="top_content">
            <div className="items"><IoHome className='icons' />Home</div>
            <div className="items"><IoIosNotifications className='icons' />Notification</div>
            <div className="items"><FaShopify className='icons' />Shop</div>
            <div className="items"><BiSolidConversation className='icons' />Conversation</div>
            <div className="items"><IoWalletSharp className='icons' />Wallet</div>
            <div className="items"><MdSubscriptions className='icons' />Subscription</div>
            <div className="items"><ImProfile className='icons' />My Profile</div>
        </div>
        <div className="bottom_content items"><MdOutlineLogin className='icons' />Log Out</div>
      </div>
      
    </>
  )
}

export default Sidebar
