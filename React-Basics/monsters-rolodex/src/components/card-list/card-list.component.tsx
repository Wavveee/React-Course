// import { Component } from "react";
import CardContainer from "./card-container/card-container.component";
import "./card-list.styles.css";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { id, name, email } = monster;
      return <CardContainer id={id} name={name} email={email} />;
    })}
  </div>
);

// class Cardlist extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const {id, name, email} = monster
//           return (
//             <CardContainer id={id} name={name} email={email} />
//         )})}
//       </div>
//     );
//   }
// }

export default CardList;
