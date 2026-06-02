import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Hospital Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/appointments">Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/records">Records</Link>
          </li>
          <li>
            <Link to="/dashboard/billing">Billing</Link>
          </li>
          <li>
            <Link to="/dashboard/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
