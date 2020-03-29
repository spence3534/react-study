import React from 'react';
import { connect } from 'react-redux'; // react-redux connect连接器
import { inputChange, handleAddItme, handleDeleteItem } from './store/actionCreators';

const TodoList = (props) => {
  let { inputValue, inputChange, handleAddItme, handleDeleteItem, list} = props;
  return (
    <div>
      <div>
        <input
          type="text"
          value={ inputValue }
          onChange={ inputChange }
        />
        <button onClick={ handleAddItme }>
          提交
          </button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li
                onClick={() => { handleDeleteItem(index) }}
                key={index}
              >
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

// class TodoList extends Component {
//   render() { 
//     return (  
//       <div>
//         <div>
//           <input 
//             type="text"
//             value={ this.props.inputValue }
//             onChange={ this.props.inputChange }
//           />
//           <button onClick={ this.props.handleAddItme }>
//             提交
//           </button>
//         </div>
//         <ul>
//           {
//             this.props.list.map((item, index) => {
//               return ( 
//                 <li 
//                   onClick={() => { this.props.handleDeleteItem(index) } } 
//                   key={ index }
//                 > 
//                   { item }
//                 </li> 
//               )
//             })
//           }
//         </ul>
//       </div>
//      );
//   }
// }
// react-redux 映射关系
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// 需要改变的值做映射关系
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = inputChange(e.target.value);
      dispatch(action);
    },
    handleAddItme() {
      let action = handleAddItme();
      dispatch(action);
    },
    handleDeleteItem(index) {
      let action = handleDeleteItem(index);
      dispatch(action);
    }
  }
}
export default connect(stateToProps, dispatchToProps)(TodoList);