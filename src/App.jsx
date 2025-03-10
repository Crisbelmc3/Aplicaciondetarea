//importar componentes aqui
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Dropdown from "react-bootstrap/Dropdown";

import "./App.css";

function App() {
  //codigo de javascript

  return (
    //codigo de html o componentes
    <>
      <Tabs>
        <Tab title="Asignado" eventKey={"asignado"}>
          
         <div className="titulo">
         <p>Asignado</p> 
         
         <Dropdown>
           <Dropdown.Toggle variant="success" id="dropdown-basic">
             menu
           </Dropdown.Toggle>

           <Dropdown.Menu>
             <Dropdown.Item href="#/action-1">en progresso</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Completado</Dropdown.Item>
             <Dropdown.Item href="#/action-3">no empezado</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
         </div>


          <p> Quiz</p>

          <p>Work for 2/11/25</p>
          <p>sistemas de proteina</p>
          <p>Biologia</p>
          <p>investigacion del ADN</p>
          <p>Entry Ticket </p>
        </Tab>

        <Tab title="Desaparecido" eventKey={"desaparecido"}>

         <div className="titulo">
         <p>Desaparecido</p> 
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">En progreso</Dropdown.Item>
              <Dropdown.Item href="#/action-2">completado</Dropdown.Item>
              <Dropdown.Item href="#/action-3">no empezado</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         </div>
    
        </Tab>

        <Tab title="Hecho" eventKey={"Hecho"}>

         <div className="titulo">
         <p>Hecho</p>
         
         <Dropdown>
           <Dropdown.Toggle variant="success" id="dropdown.menu">
             menu
           </Dropdown.Toggle>
           <Dropdown.Menu>
           <Dropdown.Item href="#/action-1">En progreso</Dropdown.Item>
           <Dropdown.Item></Dropdown.Item>
           <Dropdown.Item href="#/action-2">Completado</Dropdown.Item>
           <Dropdown.Item href="#/action-3">no empezado</Dropdown.Item>

           </Dropdown.Menu>
         
         </Dropdown>
         </div>
        </Tab>
      </Tabs>

      <label for="Todaslaclases"></label>

      {/* <ul>
      <li>Tocino</li>
      <li>MAnzanas</li>
    </ul> */}
    </>
  );
}

export default App;
