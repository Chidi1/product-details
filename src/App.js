import React from 'react'
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img  className="App-logo" src="https://airopay.com/wp-content/uploads/2020/08/cropped-Airopay_Logo1-1.png" />
        </nav>

      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <p>Test dispaly</p>
          <img src="https://airopay.com/wp-content/uploads/2020/08/cropped-Airopay_Logo1-1.png" alt="Product preview"/>
          <img src="https://imgur..com/iOeUBV7.png" alt="Product preview"/>
        </div>
      </div>
    </div>
  );
}

export default App;
