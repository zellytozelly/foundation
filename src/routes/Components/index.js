import { useState } from 'react'
import styles from './Components.module.scss'

import Input from './Input/Input'
import Toggle from './Toggle/Toggle'

function Components() {

  return (
    <div className={styles.componentsWrapper}>
      <Toggle />
      <Input />
    </div>
  )
}

export default Components