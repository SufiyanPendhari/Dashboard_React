import '../App.css'
function CheckBox({title}){
    return(
        <div className="check">
            <input type="checkbox"  />
                <span>{title}</span>
        </div>
    )
}
export default CheckBox