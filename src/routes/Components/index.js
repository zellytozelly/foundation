import { useState } from 'react'
import styles from './Components.module.scss'

import Input from './Input/Input'
import Tab from './Tab/Tab'
import Toggle from './Toggle/Toggle'

function Components() {

  return (
    <div className={styles.componentsWrapper}>
      <Toggle />
      <Tab />
      <Input />
    </div>
  )
}

export default Components