import { useState } from 'react'
import styles from './Components.module.scss'

import Input from './Input/Input'

function Components() {

  return (
    <div className={styles.componentsWrapper}>
      <Input />
    </div>
  )
}

export default Components