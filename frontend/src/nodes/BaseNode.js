import { Handle, Handles, Position } from 'reactflow'

const BaseNode = ({ id, title, handles = {}, children }) => {

    return (
        <div 
            style={{
                minHeight: "100px", 
                width: "200px", 
                border:"1px solid black", 
                padding: 8,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px"
            }}
        >
        {handles.left?.map((handle, idx) => (
            <Handle 
                key={`left-${idx}`}
                type={handle.type}
                position={Position.Left}
                id={`${id}-${handle.idSuffix}`}
                style={handle.style}
            />
        ))}    

        <div style={{fontWeight: "bold", marginBottom: 6}}>
            {title}
        </div>

        <div>
            {children}
        </div>

        {handles.right?.map((handle, idx) => (
            <Handle 
                key={`right-${idx}`}
                type={handle.type}
                position={Position.Right}
                id={`${id}-${handle.idSuffix}`}
                style={handle.style}
            />
        ))}
        </div>
    )
}

export default BaseNode;