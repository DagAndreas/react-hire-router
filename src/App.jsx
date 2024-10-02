import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [allPeople, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([])
  const [renderPeople, setRenderPeople] = useState([]);



  const hirePerson = (personObject) => {
    if (
      personObject &&
      !hiredPeople.some((person) => person.id === personObject.id)
    ) {
      setHiredPeople((prevHired) => [...prevHired, personObject]);
      setRenderPeople((prevRender) =>
        prevRender.filter((person) => person.id !== personObject.id)
      );
      console.log("Hired:", personObject.name.first);
    }
  };
  


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => {
        const peopleWithIds = data.results.map((person, index) => ({
          ...person,
          id: index + 1,
        }));
        setPeople(peopleWithIds);
        setRenderPeople(peopleWithIds)
      });
    console.log(allPeople);
    console.log("hei");
  }, []);


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li> <Link to="/">DashBoard</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path='/'
          element={<Dashboard hiredPeople={hiredPeople} people={allPeople} renderPeople={renderPeople}/>}
        />

        <Route
        path='/person/:id'
        element={<PersonProfile people={allPeople} hirePerson={hirePerson} />}

        />
      </Routes>
    </>
  )
}
