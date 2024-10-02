import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';

function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  const { id } = useParams();

  const {people, hirePerson} = props

  useEffect(() =>{
    if (people && people.length > 0){
      const selectedPerson = people.find((p) => p.id === parseInt(id))
      setPerson(selectedPerson)
    }
  },[people, id])
    
  
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        Hei fra Personprofile {person.name.first} {person.name.last}
      </h2>
      <HireForm people={people} person={person} hirePerson={hirePerson}/>
    </article>
  )
}

export default PersonProfile
