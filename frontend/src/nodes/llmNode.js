import BaseNode from "./BaseNode"

const LLMNode = ({ id }) => {
  return(
    <BaseNode 
      id={id}
      title="LLM"
      handles={{
        left: [
          { type: 'target', idSuffix: 'system', style: { top: '33%' }},
          { type: 'targer', idSuffix: 'prompt', style: { top: '66%' }}
        ],
        right: [
          { type: 'target', idSuffix: 'responsse'}
        ]
      }}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  )
}

export default LLMNode;