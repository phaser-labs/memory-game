import { Col, Row } from 'books-ui';

import { GameMemory } from './game-memory-card/GameMemory';

function App() {
  return (
    <div id="app">
      <Row alignItems="center" justifyContent="center">
        <Col xs="6">
          <GameMemory gameId="game-ova" />
        </Col>
      </Row>
    </div>
  );
}

export default App;
