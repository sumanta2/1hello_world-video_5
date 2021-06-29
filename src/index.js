import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
const link='https://picsum.photos/200/300'
ReactDOM.render(
<>
<h1 className="class2"> Hello World!!!</h1>  --Here class used as className
<h2>This is secoend line</h2>
<img src={link} alt="rendome image"/>
</>,document.getElementById("root"));