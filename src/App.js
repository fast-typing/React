import React from "react";
import BookCard from "./components/BookCard";
import melDreams from "./melDreams.jpg"
import ScaledAndIcy from "./ScaledAndIcy.jpg"
import Button from "./components/Button";
import style from './style.css'

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button name="grid" function=""/>
        <Button name="table" function=""/>
      </div>
      <div className="Cards">
        <BookCard  name="Route 9" artist="BoyWithUke" genre="Indi" date="2021-01-22" src={melDreams}/>
        <BookCard  name="I Won’t Let You Go" artist="BoyWithUke" genre="Indi" date="2021-01-22" src={melDreams}/>
        <BookCard  name="2.9 Miles Away" artist="BoyWithUke" genre="Indi" date="2021-01-22" src={melDreams}/>
        <BookCard  name="Good Day" artist="twenty one pilots" genre="Alternative/Indie, Pop" date="2021" src={ScaledAndIcy}/>
        <BookCard  name="Choker" artist="twenty one pilots" genre="Alternative/Indie, Pop" date="2021" src={ScaledAndIcy}/>
        <BookCard  name="Shy Away" artist="twenty one pilots" genre="Alternative/Indie, Pop" date="2021" src={ScaledAndIcy}/>
      </div>
    </div>

  )

}

export default App;