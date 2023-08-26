import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

function Project() {
  const {id} = useParams()

  const [project, setProject ] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(() => {
    setTimeout(() => {
       fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(data)
      console.log(data);
    })
    }, 600)
   
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }


  function editPost(project) {
    setMessage('')

    if (project.orçamento < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then(resp => resp.json())
    .then((data) => {
      setProject(data)
      setShowProjectForm(false)
      setMessage('Projeto atualizado!')
      setType('sucess')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    {project.name ? (
      <div className={styles.project_details}>
        <Container customClass='column'>
          {message && <Message type={type} msg={message} />}
          <div className={styles.details_container}>
            <h1>Projeto: {project.name}</h1>
            <button className={styles.btn} onClick={toggleProjectForm}>
              {!showProjectForm ? 'Editar projeto' : 'Fechar'}
            </button>
            {!showProjectForm ? (
              <div className={styles.project_info}>
                <p>
                  <span>Categoria:</span> {project.category.name}
                </p>
                <p>
                  <span>Total de Orçamento:</span> R${project.orçamento}
                </p>
                <p>
                  <span>Total utilizado:</span> R${project.cost}
                </p>
              </div>
            ) : (
              <div className={styles.project_info}>
                <p><ProjectForm 
                      handleSubmit={editPost}
                      btnText="Concluir edição"
                      projectData={project}/></p>
              </div>
            )}
          </div>
          <div className={styles.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}> 
              {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && <div>Formulario do serviço </ div>}
              </div>
          </div>
          <h2>Serviços</h2>
          <Container className='start'>
            <p>serviços</p>
          </Container>
        </Container>
      </div> ) : (
        <Loading />
        )}
    </>
  )
}

export default Project