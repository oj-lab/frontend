import React from "react";
import { Container } from '@mui/material';
import { AuthAndFrame } from "../components/AuthAndFrame";
import { useParams } from "react-router-dom";
import { CodeEditor } from "../components/CodeEditor";

const ProblemPage: React.FC = () => {
  const { pid } = useParams();
  return (
    <AuthAndFrame selectedItem={"Problems"}>
      <Container sx={{ mt: 4, mb: 4 }}>
        <CodeEditor />
      </Container >
    </AuthAndFrame>
  );
};

export default ProblemPage;
