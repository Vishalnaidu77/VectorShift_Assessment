import { Position } from "reactflow";
import BaseNode from "./BaseNode";
import { useState } from "react";

const InputNode = ({ id, data }) => {

  const [currname, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');
  
  return(
    <BaseNode 
      id={id}
      title="Input"
      handles={{
        right: [
          { type: 'source', idSuffix: 'value' }
        ]
      }}
    >
      <lable>
        Name:
        <input value={currname} onChange={(e) => setCurrName(e.target.value)} />
      </lable>

      <lable>
        Type:
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </lable>

    </BaseNode>

    
  )
}

export default InputNode;