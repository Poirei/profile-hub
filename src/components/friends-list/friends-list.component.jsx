import React from "react";
import Macha from "../friend/macha.component";
import "./friends-list.component.scss";

class FriendsList extends React.Component {
  constructor() {
    super();

    this.state = {
      friends: [
        {
          id: 1,
          name: "John",
          photoUrl: "",
        },
        {
          id: 2,
          name: "Martin",
          photoUrl: "",
        },
        {
          id: 3,
          name: "Vijay",
          photoUrl: "",
        },
        {
          id: 4,
          name: "Rick",
          photoUrl: "",
        },
        {
          id: 5,
          name: "Morty",
          photoUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="friends-list">
        {this.state.friends.map(({ id, name, photoUrl }) => (
          <Macha key={id} photoUrl={photoUrl} name={name} />
        ))}
      </div>
    );
  }
}

export default FriendsList;
