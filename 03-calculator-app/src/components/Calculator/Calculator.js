import { useState, useEffect } from "react";
import { evaluate } from "mathjs";

import { NumberButton, CalculationButton, Card, H3 } from "../UI/UI";

import classes from "./Calculator.module.css";

export const Calculator = (props) => {
  const [enteredNumber, setEnteredNumber] = useState([]);
  const [result, setResult] = useState([]);

  // useEffect(() => {
  //   if (enteredNumber.length > 0) {
  //     setResult(() => {
  //       return ["=", evaluate(enteredNumber.join(""))];
  //     });
  //   }
  // }, [enteredNumber]);

  const calculateHandler = (x) => {
    if (enteredNumber.length > 0) {
      setResult(() => {
        return ["=", evaluate(enteredNumber.join(""))];
      });
    }
  };

  const resetHandler = (x) => {
    setEnteredNumber([]);
    setResult([]);
  };

  const getValueHandler = (x) => {
    setEnteredNumber((currentNumber) => {
      return [...currentNumber, x];
    });
  };

  return (
    <Card className={classes.calculator}>
      <Card className={classes.result}>
        <table className={classes.tableResult}>
          <tbody>
            <tr>
              <td>{enteredNumber}</td>
            </tr>
            <tr>
              <td>{result}</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card className={classes.keyboard}>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td>
                <NumberButton
                  id="reset-calculator"
                  value="AC"
                  className={classes.number}
                  onClick={resetHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="minusPositive"
                  value="+/-"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="percent"
                  value="%"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="division"
                  value="/"
                  className={classes.calculation}
                  onClick={getValueHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <NumberButton
                  id="seven"
                  value="7"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="eight"
                  value="8"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="nine"
                  value="9"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="mul"
                  value="*"
                  className={classes.calculation}
                  onClick={getValueHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <NumberButton
                  id="four"
                  value="4"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="five"
                  value="5"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="six"
                  value="6"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="sub"
                  value="-"
                  className={classes.calculation}
                  onClick={getValueHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <NumberButton
                  id="one"
                  value="1"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="two"
                  value="2"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="three"
                  value="3"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="add"
                  value="+"
                  className={classes.calculation}
                  onClick={getValueHandler}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <NumberButton
                  id="zero"
                  value="0"
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="dot"
                  value="."
                  className={classes.number}
                  onClick={getValueHandler}
                />
              </td>
              <td>
                <NumberButton
                  id="equal"
                  value="="
                  className={classes.calculation}
                  onClick={calculateHandler}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Card>
  );
};
