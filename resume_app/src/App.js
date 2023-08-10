import "./App.css";
import Dropdown from "./components/DropDown";
import DummyComponent from "./pages/FilteredData";

function App() {
  for (let index = 0; index <5; index++) {
setTimeout(() => {
  
}, 2000);    
  }
  const setCompanyId = () => {
    console.log("set value");
  };
  return (
    <div className="flex rounded-lg bg-white py-2">
      {/* <div className="flex flex-wrap items-center justify-around w-full h-auto gap-1 py-3 mb-2 items-cente labelInputContainer">
        <Dropdown
          lableName={"Company"}
          options={["companyList"]}
          updateValue={setCompanyId}
          placeholder={"Company"}
          widthForSelect={"w-[200px]"}
        />
        <Dropdown
          lableName={"Trip type"}
          options={["tripList"]}
          updateValue={setCompanyId}
          placeholder={"Trip type"}
          widthForSelect={"w-[200px]"}
        />
      </div> */}
      <DummyComponent/>
    </div>
  );
}

export default App;
