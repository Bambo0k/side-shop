import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Main = () => {
  const { data, isLoading, isError } = useQuery('listMain', () => {
    return fetch('/.netlify/functions/api').then((response) => response.json().then((data) => data.list))
  });
  const images = [
    { url: 'images/slider/1.jpg' },
    { url: 'images/slider/2.jpg' },
    { url: 'images/slider/3.jpg' },
    { url: 'images/slider/4.jpg' },
  ];
  if (isLoading) {
    return '<div>Loading</div>'
  }
  if (isError) {
    return '<div>isError</div>'
  }

  console.log(data);

  return (
    <div className={styles.Main}>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <SimpleImageSlider
          width={1116}
          height={400}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className="d-flex" style={{ gap: '15px' }}>
        {data.map((item) => {
          return (
            <Card key={item.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description.slice(0, 80)}...
                </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
