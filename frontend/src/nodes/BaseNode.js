export const BaseNode = ({ title, labelName }) => {
    return (
        <div style={{height: "100px", width: "200px", border:"1px solid black"}}>
            <div>
                <span>
                    {title}
                </span>
            </div>
            <div>
                <label>
                    {labelName}:
                    <input 
                        type="text"
                        
                    />
                </label>
            </div>
        </div>
    )
}