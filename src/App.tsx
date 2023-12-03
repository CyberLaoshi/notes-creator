import { useState } from "react";
import CreatedNotes from "./components/CreatedNotes";
import CreateNewNote from "./components/CreateNewNote";

function App() {
  // let items: string[] = ["Запись 1", "Запись 2", "Запись 3"];
  // const [name, setName] = useState("");
  const [notes, addNote] = useState([] as string[]);
  const [contentInfo, changeInfo] = useState(["Нет выбранной записи"]);

  const HandleSelectedItem = (item: string[]) => {
    // сделать через компонент
    changeInfo(item);
  };

  const AddNewNote = (item) => {
    addNote([...notes, item]);
  };

  return (
    <>
      <div className="container text-left text-bg-secondary p-3">
        <div className="row">
          <div className="col">
            <CreatedNotes items={notes} onSelectItem={HandleSelectedItem} />
          </div>
          <div className="col-8">
            <h3> {contentInfo[0]}</h3>
            <h5>{contentInfo[1]}</h5>
            <h5>{contentInfo[2]}</h5>
            <p>{contentInfo[3]}</p>
            <CreateNewNote onAddItem={AddNewNote} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
