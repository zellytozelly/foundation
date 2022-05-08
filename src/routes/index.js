import styles from './Routes.module.scss'
import TodoList from './TodoList'
import Components from './Components'

function App() {
  return (
    <div className={styles.app}>
      {/* <TodoList /> */}
      <Components />
    </div>
  )
}

export default App
