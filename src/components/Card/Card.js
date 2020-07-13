import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
// import { Draggable } from 'react-beautiful-dnd';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    id: PropTypes.string,
    index: PropTypes.number,
  };

  // render() {
  //   const { title, id, index } = this.props;
  //   return (
  //     <Draggable draggableId={id} index={index}>
  //       {(provided) => (
  //         <article
  //           className={styles.component}
  //           {...provided.draggableProps}
  //           {...provided.dragHandleProps}
  //           ref={provided.innerRef}
  //         >
  //           {title}
  //         </article>
  //       )}
  //     </Draggable>
  //   );
  // }

  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3>{title}</h3>
      </section>
    );
  
  }
}

export default Card;
