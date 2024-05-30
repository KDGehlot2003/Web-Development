import React from 'react'
import style from "../style/Card.module.css"

const Card = ({title}) => {
  return (
    <div className={style.cardDiv}>
        <div className={style.main} >
            <div className={style.title}>
                <h1>{title}</h1>
            </div>
            <div className={style.buttonDiv}>
                <button className={style.mybtn}>Click Me</button>
            </div>
        </div>
    </div>
  )
}

export default Card
