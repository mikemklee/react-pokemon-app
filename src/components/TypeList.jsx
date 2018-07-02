import React from "react";

class TypeList extends React.Component {
  render() {
    const { types, selectedType, selectType } = this.props;

    return (
      <ul className="typeList">
        {types.map(type => (
          <li
            onClick={event => selectType(event, type)}
            key={type.name}
            className={`${selectedType.name === type.name &&
              `${type.name} selected`}`}
          >
            {type.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default TypeList;
