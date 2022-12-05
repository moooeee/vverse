import { useState } from "react";

const menuItems = ["home", "metaverse", "pi", "calendar", "marketplace"];

function MenuItem({ item, isSelected, onSelect }) {
  return (
    <button className="menu-item" data-active={isSelected} onClick={onSelect}>
      <img src={`./${item}.png`} alt={`${item} logo`} />
    </button>
  );
}

function FeedMenu() {
  const [selectedItem, setSelectedItem] = useState("home");
  console.log(selectedItem);

  return (
    <div className="feed-menu">
      {menuItems.map((item) => {
        return (
          <MenuItem
            item={item}
            key={item}
            isSelected={item === selectedItem}
            onSelect={() => setSelectedItem(item)}
          />
        );
      })}
    </div>
  );
}

export default FeedMenu;
