import "./style.scss"
import React from "react"
 interface LayoutProps  { 
    children: React.ReactNode
 }
 


export const Layout = ({children}:LayoutProps) =>{
    return(
        <div className="layout-container">
            {children}
        </div>
    )
}