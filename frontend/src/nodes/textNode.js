import { useState } from "react";
import BaseNode from "./BaseNode";

const TextNode = ({ id, data }) => {

  const [currText, setCurrText] = useState(data?.text || '{{input}}')

  return(
    <BaseNode
      id={id}
      title="Text"
      handles={{
        right: [
          { type: 'target', idSuffix: 'output' }
        ]
      }}
    >
      <lable>
        Text:
        <input value={currText} onChange={(e) => setCurrText(e.target.value)} />
      </lable>
    </BaseNode>
  )
}

export default TextNode;