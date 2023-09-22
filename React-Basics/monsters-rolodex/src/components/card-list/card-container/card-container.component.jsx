// import { Component } from "react";
import "./card-container.styles.css";

const CardContainer = ({id, name, email}) => (
  <div key={id} className="card-container">
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set2`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

// class CardContainer extends Component {
//   render() {
//     return (
//       <div key={this.props.id} className="card-container">
//         <img
//           alt={`monster ${this.props.name}`}
//           src={`https://robohash.org/${this.props.id}?set=set2`}
//         />
//         <h2>{this.props.name}</h2>
//         <p>{this.props.email}</p>
//       </div>
//     );
//   }
// }

export default CardContainer;
