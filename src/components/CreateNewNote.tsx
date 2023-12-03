import { useState } from "react";

interface Props {
  onAddItem: (item: string[]) => void;
}

function CreateNewNote({ onAddItem }: Props) {
  const [heading, setHeading] = useState("");
  const [name, setName] = useState("");
  const [timing, setTiming] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <div className="form-group row">
        <h2>Новая запись</h2>
        <label htmlFor="heading" className="col-sm-2 col-form-label">
          Заголовок
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="heading"
            name="headingInfo"
            value={heading}
            onChange={(event) => setHeading(event.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="form-group row">
        <label htmlFor="dateInfo" className="col-sm-2 col-form-label">
          Дата
        </label>
        <div className="col-sm-10">
          <input
            id="dateInfo"
            className="form-control"
            type="text"
            value={timing}
            onChange={(event) => setTiming(event.target.value)}
          />
        </div>
      </div>

      <br />
      <div className="form-group row">
        <label htmlFor="tag" className="col-sm-2 col-form-label">
          Метка
        </label>
        <div className="col-sm-10">
          <input
            id="tag"
            className="form-control"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="form-group">
        <textarea
          name="postContent"
          className="form-control"
          rows={5}
          cols={50}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <br />
      <div className="form-group row">
        <div className="col-sm-10">
          <button
            className="btn btn-primary"
            onClick={() => {
              setName("");
              setTiming("");
              setContent("");
              setHeading("");
              onAddItem([heading, name, timing, content]); // сохранить в JSON https://react.dev/reference/react-dom/components/textarea
            }}
          >
            Создать
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateNewNote;
