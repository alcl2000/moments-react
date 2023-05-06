import styles from '../styles/Avatar.module.css'
import React from 'react'

const Avatar = ({src, height=45, text}) => {
    return <span>
        <img className={styles.Avatar}
            src={src}
            height={height}
            alt='avatar'
        />
        {text}
    </span>
}
export default Avatar