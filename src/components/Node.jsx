import { Handle }  from 'react-flow-renderer';


const Node = ({ data: nodeData }) => {
  return (
    <>
      <div className="node-container">
       
        { nodeData.previous.length > 0 && (
          <Handle
            type="target"
            position="left"
            style={{
              border: '1px solid rgb(152,152,152)',
              backgroundColor: 'white',
            }}
          />
        )}
        <div
        style={{
          height: '100%',
          width: '100%',
          marginTop: 7,
          flex: 3,
          display: "flex",
          flexDirection: 'column',
          alignItems: 'center',
          color:"black"
        }}
        >
          <h5>{nodeData.data.id}</h5>
        </div>
        
        { nodeData.final !== true && (
          <Handle
            type="source"
            position="right"
            style={{ 
              border: '1px solid rgb(152,152,152)',
              backgroundColor: 'white',
            }}
          />
        )}
      </div>
    </>
  );
};

export default Node;
