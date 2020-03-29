import React from 'react';
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

// 无状态组件
const TodoListUI = (props) => {
  return (
    <div>
      <div>
        <Input
          placeholder={props.inputValue}
          style={{ width: "250px", margin: "10px" }}
          onChange={props.changeInput}
          value={props.inputValue}
        />
        <Button type="primary" onClick={props.handleBtn}>
          增加
        </Button>
      </div>
      <div style={{ width: "300px", margin: "10px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.deleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
// UI组件和业务逻辑组件的整合
/**
 class TodoListUI extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <div>
          <Input
            placeholder={this.props.inputValue}
            style={{ width: "250px", margin: "10px" }}
            onChange={ this.props.changeInput }
            value={ this.props.inputValue }
          />
          <Button type="primary" onClick={ this.props.handleBtn }>
            增加
          </Button>
        </div>
        <div style={{ width: "300px", margin: "10px" }}>
          <List
            bordered
            dataSource={ this.props.list }
            renderItem={(item, index) => (
              <List.Item onClick={ () => { this.props.deleteItem(index) } }>
                { item }
              </List.Item>
            )}
          />
        </div>
      </div>
      );
    }
  }
 */
 
export default TodoListUI;