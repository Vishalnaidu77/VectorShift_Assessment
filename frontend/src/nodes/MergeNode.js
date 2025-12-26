             
import BaseNode from "./BaseNode"

const MergeNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="Merge"
            handles={{
                left: [
                    { type: 'target', idSuffix: "input1", style: { top: '33%'} },
                    { type: 'target', idSuffix: "input2", style: { top: '66%'} }
                ],
                right: [
                    { type: 'source', idSuffix: "merged" }
                ]
            }}
        >
            <span>Merges multiple output.</span>
        </BaseNode>
    )
}

export default MergeNode;