import { Redirect } from "react-router";

const Dashboard = ({ authenticated }) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div>
        <section>
          ,<input />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
