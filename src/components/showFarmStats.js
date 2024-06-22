import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import '../Styles/ShowFarmStats.css';

const ShowFarmStats=()=>{
  const [maxScrollHeight, setMaxScrollHeight] = useState(0);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const calculatedMaxScrollHeight = windowHeight -200; 
    setMaxScrollHeight(calculatedMaxScrollHeight);
  }, []);

  const handleClick = (url) => {
    window.location.href = url;
  };

  return ( 
      <div style={{ maxHeight: `${maxScrollHeight}px`, overflowY: 'auto' }}>
      <Container fluid className="mt-5">
        <Row className="justify-content-center" >
          <Col xs={12} sm={6} md={4} lg={2} xl={2} className="mb-4 clickable-col" onClick={() => handleClick('https://example.com')}>
            <div className="content">
              <p>
                Lorem ipsum dolor 
              </p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={2} xl={2} className="mb-4 clickable-col" onClick={() => handleClick('https://example.com')}>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowFarmStats;