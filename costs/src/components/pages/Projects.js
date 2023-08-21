import { useLocation } from 'react-router-dom'
import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import styles from './Projects.module.css'

function Projects() {

  const location = useLocation()

  let message = ''
  if (location.state) {
    message = location.state.message
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='criar projeto'/>
      </div>
      {message && <Message msg={message} type='sucess' />}
      <Container >
        <p>Projetos..</p>
      </Container>
    </div>
  )
}

export default Projects