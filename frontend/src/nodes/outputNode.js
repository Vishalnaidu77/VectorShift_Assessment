import { useState } from "react";
import BaseNode from "./BaseNode"

const OutputNode = ({ id, data }) => {

  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text')

  return (
    <BaseNode 
      id={id}
      title="Output"
      handles={{
        left: [
          { type: 'target', idSuffix: 'value'}
        ]
      }}
    >
      <label>
        Name: 
        <input value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </label>

      <lable>
        Type:
        <select value={outputType} onChange={(e) => setOutputType(e.target.value)} >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </lable>

    </BaseNode>
  )
}

export default OutputNode;