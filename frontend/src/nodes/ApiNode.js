import BaseNode from "./BaseNode";


const ApiNode = ({ id }) => {
    return(
        <BaseNode 
            id={id}
            title="API"
            handles={{
                left: [
                    { type: 'target', idSuffix: 'input' }
                ],
                right: [
                    { type: 'source', idSuffix: 'response' }
                ]
            }}
        >
            <span>Calls an external API.</span>
        </BaseNode>
    )
}

export default ApiNode;