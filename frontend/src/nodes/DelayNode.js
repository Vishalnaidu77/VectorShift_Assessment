import BaseNode from "./BaseNode"

const DelayNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="Delay"
            handles={{
                left: [
                    { type: 'target', idSuffix: "input" }
                ],
                right: [
                    { type: 'source', idSuffix: "output" }
                ]
            }}
        >
            <span>Adds a delay before passing data.</span>
        </BaseNode>
    )
}

export default DelayNode;