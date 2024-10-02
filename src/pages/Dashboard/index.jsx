import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  const { hiredPeople } = props;

  const { renderPeople } = props;

  const { people } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={renderPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
