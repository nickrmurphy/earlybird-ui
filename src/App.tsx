import Button from "./components/Button"

function App() {

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Button label="Press me!" onClick={() => alert('yo')} />
    </h1>
  )
}

export default App
