import { Link, Navigate, useNavigate } from "react-router-dom";
import HireForm from "../../PersonProfile/components/HireForm";

function PeopleListItem(props) {
  const { person } = props;

  const navigate = useNavigate();

  const pressedEdit = () => {
    console.log("pressed edit");
    navigate("person/" + person.id)
  }

  return (
    <li>
      <h3>
        <li>
          <Link to={`/person/${person.id}`}>
            {person.name.first} {person.name.last}{" "}
          </Link>
        </li>
      </h3>
      {(person.wage || person.wage === 0) && <p>Wage: £{person.wage}</p>}
      {(person.wage || person.wage === 0) && <button onClick={pressedEdit}>Edit</button>}
    </li>
  );
}

export default PeopleListItem;
