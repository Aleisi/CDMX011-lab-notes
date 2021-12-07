import logo from "../images/LogoHome.png";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { logOut } from "../lib/auth";
import { savingNote, deleteNote } from "../lib/firestore";
//  import { Link } from "react-router-dom";
import "./home.css"
import { db } from "../lib/firebase";
//import WallNotes from "./wallNotes";


const Home = () => {

  const [tittle, setTittle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  
  const history = useHistory();

  const handleLogout = (e) =>{
    e.preventDefault();
      logOut()
      .then(() =>{
        console.log('your session ended successfully')
        history.push("/")
      })
      .catch(error => {
          console.log(error)
      })
  };

  const submitNote = (e) => {
    e.preventDefault();
    savingNote(tittle, text)
    .then(() => console.log("Your note have been send")
    );
  };

  const agregar = async (e) => {
    e.preventDefault()
    if(!text.trim()){
      console.log('Empty')
      return
    }
    console.log(text);
  }

  const getNote = () => {
    db.collection("notes")
    .onSnapshot((data) => {
      const arrayData = [];
      data.forEach((doc) => {
        arrayData.push({id: doc.id, ...doc.data()});
      });
      setNotes(arrayData);
      console.log(arrayData);
    });
  };
  useEffect(() => {
    getNote();

  }, []);


  const deleteNote = async (id) => {
    try {
        const arrayFiltrado = notes.filter(item => item.id !== id) 
        setNotes(arrayFiltrado)
      } catch(error){
        console.log(error)
      }
    }

  return (
    
    <div>
      <br></br>
      <div className="logo"><img src={logo} alt="logo-Notes" /></div> 
      
      <div className="sign-out-btn">
        <button onClick={handleLogout} id= "sign-out">Sign Out</button>
        </div>

        <form onSubmit={agregar}>
            
              <input onChange={(e) => {setTittle(e.target.value);}} value={tittle} placeholder="Note tittle" id="tittle-note"></input> 
              <input onChange={(e) => {setText(e.target.value);}} value={text} placeholder="Note text" id="text-note"></input>

              <div className="add-note-btn">
                <button type="submit" onClick={submitNote} id= "add-note">Add your Note  +</button>
              </div>

            <br></br>          
         </form> 

        <div>
          <div className= "body-notes">
            <div className= "container-post">
              <ul>
                {notes.map(item => (
                <li key={item.id}>
                  <h3>{item.tittle}</h3> 
                  {item.note}
                  <button className= "btn-delete" id="delete-btn"
                  onClick={() => deleteNote(item.id)}
                  >Delete your Note</button>
                  </li>
                ))
                }
              </ul>

        <br></br>

              <div >
                
              </div>
            </div>
          </div>
        </div>



    </div>
  );
};

export default Home;
