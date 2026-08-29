import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const handlePrimaryClick = () => {
    alert("Primary button clicked!");
  };

  const handleDangerClick = () => {
    alert("Danger button clicked!");
  };

  const students = [
    { Name: "Ahmed Ali", Age: 22, City: "Cairo" },
    { Name: "Sara Mohamed", Age: 24, City: "Alexandria" },
    { Name: "Omar Khaled", Age: 21, City: "Giza" },
    { Name: "Mona Hassan", Age: 23, City: "Aswan" },
  ];

  return (
    <div className="app-container">
      <h1>Reusable Components Demo</h1>

      {/* ---------- Button Examples ---------- */}
      <section>
        <h2>Buttons</h2>
        <div className="button-row">
          <Button text="Confirm" variant="primary" onClick={handlePrimaryClick} />
          <Button text="Cancel" variant="secondary" onClick={() => alert("Cancelled")} />
          <Button text="Delete" variant="danger" onClick={handleDangerClick} />
          <Button text="Disabled" variant="primary" disabled />
        </div>
      </section>

      {/* ---------- Card Examples ---------- */}
      <section>
        <h2>Cards</h2>
        <div className="card-row">
          <Card
            title="Mountain View"
            description="A beautiful view of the mountains during sunset."
            image="https://picsum.photos/id/1015/300/200"
          />

          <Card
            title="Product Card"
            description="This card uses the children prop to add extra content."
          >
            <Button text="Buy Now" variant="primary" onClick={() => alert("Purchased!")} />
          </Card>
        </div>
      </section>

      {/* ---------- Table Example ---------- */}
      <section>
        <h2>Students Table</h2>
        <Table columns={["Name", "Age", "City"]} data={students} striped />
      </section>

      {/* ---------- Home Page: Posts Grid (React Query) ---------- */}
      <section>
        <Home />
      </section>
    </div>
  );
}

export default App;