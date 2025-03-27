import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWorkflows } from '../../services/api';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './Workflow.css';

const WorkflowList = () => {
  const [workflows, setWorkflows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const data = await getWorkflows();
        const formattedData = data.map(item => ({
          id: item.id,
          name: item.title || "Workflow Name here...",
          lastEdited: "Zubin Khanna | 22:43 IST - 28/05",
          description: item.body || "Some Description Here Regarding The Flow...",
          status: Math.random() > 0.5 ? 'active' : 'inactive'
        }));
        setWorkflows(formattedData);
      } catch (error) {
        console.error('Error fetching workflows:', error);
      }
    };

    fetchWorkflows();
  }, []);

  const filteredWorkflows = workflows.filter(workflow => 
    workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    workflow.id.toString().includes(searchTerm)
  );

  const handleEdit = (id) => {
    navigate(`/editor/${id}`);
  };

  return (
    <Container fluid className="workflow-container p-4">
      <h1 className="mb-4">Workflow Builder</h1>
      
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <div className="search-container">
            <Form.Control 
              type="text" 
              placeholder="Search By Workflow Name/ID" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="search-icon">🔍</i>
          </div>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="dark" className="create-btn" onClick={() => navigate('/editor/new')}>
            + Create New Process
          </Button>
        </Col>
      </Row>
      
      <div className="table-responsive">
        <Table hover className="workflow-table">
          <thead>
            <tr>
              <th>Workflow Name</th>
              <th>ID</th>
              <th>Last Edited On</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredWorkflows.map((workflow) => (
              <tr key={workflow.id}>
                <td>{workflow.name}</td>
                <td>#{workflow.id}</td>
                <td>{workflow.lastEdited}</td>
                <td>{workflow.description}</td>
                <td>
                  {workflow.status === 'active' ? 
                    <span className="status-indicator active">⭐</span> : 
                    <span className="status-indicator inactive">⚡</span>
                  }
                </td>
                <td>
                  <Button variant="light" className="action-btn me-2">Execute</Button>
                  <Button variant="light" className="action-btn" onClick={() => handleEdit(workflow.id)}>Edit</Button>
                </td>
                <td className="text-end">
                  <Button variant="link" className="icon-btn">⋮</Button>
                  <Button variant="link" className="icon-btn">↓</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default WorkflowList;
