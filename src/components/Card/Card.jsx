import styles from './Card.module.scss'
import React from 'react'

const Card = ({imageUrl,title,price,onPlus}) => {

  const [isAdded,setIsAdded]=React.useState(false)

  const onClickPlus = ()=>{
    onPlus()
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
    <div className={styles.favorite}>
    <img src="/img/heart.svg" alt="Unliked" />
    </div>
    <img width={133} height={112} src={imageUrl}alt="Sneakers "/>
       <h5>{title}</h5>
       <div className="d-flex justify-between align-center">
         <div className="d-flex flex-column">
           <span>Цена:</span>
          <b>{price} руб.</b>
         </div>
       
         <img 
            className={styles.plus} 
            onClick={onClickPlus}
            src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
            alt="Plus"/>
         
       </div> 
    </div>
  )
}

export default Card