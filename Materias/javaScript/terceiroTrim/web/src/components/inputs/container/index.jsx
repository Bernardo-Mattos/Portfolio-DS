import './index.css'

export default function Input (props){
  return(
    <div className="input-container">
      <label htmlFor={props.name}>{props.title}</label>
      <input type='text' name = {props.name} value=  {props.value}/>
    </div>
  )
}