import { useEffect, useRef, useState } from "react";
import BaseNode from "./BaseNode";

const TextNode = ({ id, data }) => {

  const [currText, setCurrText] = useState(data?.text || '{{input}}')
  const textAreaRef = useRef()

  // Auto resize text node
  useEffect(() => {
    if(textAreaRef.current){
      textAreaRef.current.style.height = "auto"
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }
  }, [currText])

  // Extract variable from

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
        <textarea
        ref={textAreaRef}
        value={currText} 
        onChange={(e) => setCurrText(e.target.value)} 
        style={{
          width: "100%",
          resize: "none",
          overflow: "hidden"
        }}
        />
      </lable>
    </BaseNode>
  )
}

export default TextNode;