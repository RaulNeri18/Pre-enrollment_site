import './App.css'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import raulneriphoto from './images/photoRaul.jpg'

function App() {

  return (
    <div className='container'>
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand className='brand' href="#home">
            <img className='logo' src="https://campusvirtual.up.edu.pe/is/Documentos/logo-up-2021.png" alt="University Logo" />
            <span className='brand-title'>Matr&iacute;cula Preventiva</span>
          </Navbar.Brand>
          <div className='user-logged-section'>
            <div className='user-image-container'>
              <img src={raulneriphoto} alt="Raul Neri min" />
            </div>
            <span className='user-name'>Raúl Neri</span>
            <a className='logout' href="#"><i className="bi bi-box-arrow-in-right"></i></a>
          </div>
        </Container>
      </Navbar>


      <Row>
        
      </Row>

      <Tabs
        defaultActiveKey="mandatory"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="mandatory" title="MANDATORY (0 COURSES)">
          Tab content for Home
        </Tab>
        <Tab eventKey="electives" title="ELECTIVES (0 COURSES)">
          Tab content for Profile
        </Tab>
        <Tab eventKey="efes" title="EFES (0 COURSES)">
          Tab content for Loooonger Tab
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
