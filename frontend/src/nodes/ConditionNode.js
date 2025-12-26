import BaseNode from "./BaseNode"

const ConditionNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="Condition"
            handles={{
                left: [
                    { type: 'target', idSuffix: "input" }
                ],
                right: [
                    { type: 'source', idSuffix: "true", style: { top: '33%' } },
                    { type: 'source', idSuffix: "false", style: { top: '66%' } }
                ]
            }}
        >
            <span>Route output flow based on condition.</span>
        </BaseNode>
    )
}

export default ConditionNode;