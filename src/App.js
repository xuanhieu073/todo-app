import 'antd/dist/antd.css'; 
import './App.css';

import {Row, Col} from 'antd'
import Todo from './components/Todo/Todo';

function App() {
  return (
    <Row>
      <Col xs={{offset:1, span: 22}} md={{offset: 6, span:12}}>
        <Todo/>
      </Col>
    </Row>
  );
}

export default App;
