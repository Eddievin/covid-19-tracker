/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from "./App.module.css";
import image from "./images/image.png";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
      </div>
    );
  }
}

export default App;
