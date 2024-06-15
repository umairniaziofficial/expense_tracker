import "./output.css";
import Graph from "./components/Graph.jsx"
import Form from "./components/Form.jsx"

export default function App() {
  return (
    <div className="App font-semibold py-12">
      <div className="main">
        <div className="mx-auto text-center max-w-6xl drop-shadow-lg text-gray-800">
          <h1 className="text-4xl py-6 bg-slate-800  text-white rounded">Expense Tracker</h1>
          <div className="grid md:grid-cols-2 mt-12">
            <div className="text-5xl"><Graph/></div>
            <div className="text-5xl"><Form/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
