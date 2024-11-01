import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonsContainer from "./component/ButtonsContainer";
function App() {
  return (
    <>
      <center>
        <div className={styles.calculator}>
          <Display />
          <ButtonsContainer />
        </div>
      </center>
    </>
  );
}

export default App;
