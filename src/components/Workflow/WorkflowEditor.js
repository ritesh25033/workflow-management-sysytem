import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges
} from 'react-flow-renderer';
import { saveWorkflow } from '../../services/api';
import './Workflow.css';

const initialNodes = [
  {
    id: 'start',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 250, y: 0 },
    style: { background: '#d6e4ff', border: '1px solid #0041d0' }
  },
  {
    id: 'process',
    data: { label: 'Process Step' },
    position: { x: 250, y: 100 },
    style: { background: '#fff', border: '1px solid #ccc' }
  },
  {
    id: 'end',
    type: 'output',
    data: { label: 'End' },
    position: { x: 250, y: 200 },
    style: { background: '#d6e4ff', border: '1px solid rgb(11, 11, 12)' }
  }
];

const initialEdges = [
  { id: 'e-start-process', source: 'start', target: 'process', animated: true },
  { id: 'e-process-end', source: 'process', target: 'end', animated: true }
];

const WorkflowEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [workflowName, setWorkflowName] = useState(id === 'new' ? 'New Workflow' : `Workflow #${id}`);

  useEffect(() => {
    if (id !== 'new') {
      setWorkflowName(`Workflow #${id}`);
    }
  }, [id]);

  // New remove function using applyNodeChanges & applyEdgeChanges
  const onNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));

  const onConnect = (params) => {
    setEdges((eds) => addEdge({ ...params, animated: true }, eds));
  };

  const saveWorkflowData = async () => {
    try {
      const workflowData = {
        title: workflowName,
        body: 'Workflow created with the editor',
        nodes: JSON.stringify(nodes),
        edges: JSON.stringify(edges)
      };
      
      await saveWorkflow(workflowData);
      alert('Workflow saved successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving workflow:', error);
      alert('Failed to save workflow. Please try again.');
    }
  };

  return (
    <div className="workflow-editor-container">
      <div className="editor-header">
        <h1>Workflow Editor</h1>
        <div className="editor-actions">
          <button className="btn-save" onClick={saveWorkflowData}>Save Workflow</button>
          <button className="btn-cancel" onClick={() => navigate('/dashboard')}>Cancel</button>
        </div>
      </div>
      
      <div className="editor-details">
        <div className="form-group">
          <label>Workflow Name</label>
          <input 
            type="text" 
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default WorkflowEditor;
