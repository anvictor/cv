import React from 'react'
import ProfExp from '../../assets/ProfExp'
import Skills from '../../assets/Skills'
import Education from '../../assets/Education'
import {about, contacts, Prof_Skills} from '../../assets/LeftData'
import portfolio from "../../images/portfolio.png"
import viber from "../../images/viber.png"
import git from "../../images/git.png"
import email from "../../images/email.png"
import telegram from "../../images/telegram.png"
import whatsApp from "../../images/whatsApp.png"
import skype from "../../images/skype.png"
import LinkedIn from "../../images/LinkedIn.png"
import mob from "../../images/mob.png"


import "./ListCard.css"
const content = {
    ProfExp,
    Skills,
    Education,
    about,
    contacts,
    Prof_Skills
}

const logoImg = {
    portfolio,
    viber,
    git,
    email,
    telegram,
    whatsApp,
    skype,
    LinkedIn,
    mob
}

const ListCard = (props) => {
  console.log("VIKTOR ANDREICHENKO FRONT END DEVELOPER +38(067) 408 50 29");
    return (
        <div className={`ListCard ${props.content}`}> 
            <header className="logoTitle">
                <img className="logo" src={props.logo} alt="logo"></img>
                <h2 className="title">{props.title}</h2>
            </header>
            <ul className="gridPlace">
                {
                 props.content==="ProfExp" &&  content[props.content].map((item,index) => {
                        return <li className="listItem" key={index}>
                            <div className="gridContainer">
                                <p><b>Company:</b>      </p> <p><b>{item.company_name}</b></p>
                                <p>Description:              </p> <p> {item.description}</p>
                                <p>Tools &amp; technologies: </p> <p>{item.tools_and_technologies}</p>
                                <p>Project responsibilities: </p> <p>{item.project_responsibilities}</p>
                                <p>Period:                 </p> <p> {item.period}</p>
                                <p>Duration:                 </p> <p> {item.duration}</p>
                                <p>Customers:                </p> <p> {item.customers}</p>
                            </div>

                        </li>
                    }) 
                }
                {
                 (
                     props.content==="Skills" 
                     || props.content==="Education"
                     ) &&  content[props.content].map((item,index) => {
                        return <li className="listItem" key={index}>{item}</li>
                    }) 
                }
                {
                    props.content==="about" &&  content[props.content].map((item,index) => {
                        return <li className="list_style_type_none" key={index}>{item}</li>
                    }) 
                }
                {
                    props.content==="contacts" &&  content[props.content].map((item,index) => {
                        return <a 
                            href={item.href} 
                            className="a_contacts" 
                            key={index}
                        >
                            <div className="line">
                            {item.logos.map((logo, index) =>{
                                return <img 
                                    key={index} 
                                    className="smallLogo" 
                                    src={logoImg[logo]} 
                                    alt={logo}
                                    >
                                    </img>
                            })}
                            <span>{item.data}</span> 
                            </div>
                        </a>
                    }) 
                }
                {
                    props.content==="Prof_Skills" &&  content[props.content].map((item,index) => {
                        return <li key={index} className="list_style_type_none skill">
                        <span className="skillName">{item.skill}</span>
                        <div className="range">
                            <div className="indexer" style={{width:`${item.level}%`}}></div>
                        </div>
                    </li>
                    }) 
                }
            </ul>
        </div>
    )
}
export default ListCard