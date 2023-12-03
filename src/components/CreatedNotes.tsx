import { useState } from "react";

interface Props {
  items: string[][];
  onSelectItem: (item: string[]) => void;
}

function CreatedNote({ items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <ul className="list-group">
        {items.length === 0 && <p>Пока здесь нет записей</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index);
            }}
          >
            {/* {item} */}
            <h3>{item[0]}</h3>
            <p>
              {item[2]} {item[3].slice(0, 20)} ...
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CreatedNote;
