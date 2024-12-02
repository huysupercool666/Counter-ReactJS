import ComponentA from "./ComponentA";
import '../styles/CounterApp.css'
export default function CounterApp() {
  return (
    <div className="Container__CounterApp">
      <h1>App counter</h1>
      <hr/>
      <ComponentA />
    </div>
  );
}
