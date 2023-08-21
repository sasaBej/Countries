import { useContext } from "react";
import { TestPageContext } from "./testPage.store";
import { observer } from "mobx-react-lite";

const arrayOfNotes = 'ABCDEFGA'.split("");
const arrayOfIndices = arrayOfNotes.map((_, index) => index);

const TestPage = observer(() => {
  const { result, setResult, error, setError } = useContext(TestPageContext);

  const addNotes = (value: number) => {
    if (result[result.length - 1] === value) {
      return setError("error")
    }
    setError("")
    return setResult(value);
  };
  return (
    <>
      {arrayOfIndices.map((el) => (
        <button key={el} onClick={() => addNotes(el)}>{arrayOfNotes[el]}</button>
      ))}
      <div>{result.map(el => arrayOfNotes[el]).join(", ")}</div>
      <div>{error}</div>
    </>
  )
})

export default TestPage