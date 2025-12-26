import BaseNode from "./BaseNode"

const DatabaseNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="Database Query"
            handles={{
                left: [
                    { type: 'target', idSuffix: "query" }
                ],
                right: [
                    { type: 'source', idSuffix: "result" }
                ]
            }}
        >
            <span>Executes a Database query.</span>
        </BaseNode>
    )
}

export default DatabaseNode;