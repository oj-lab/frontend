import React from "react";
import { Container, Typography, Divider } from '@mui/material';
import { AuthAndFrame } from "../components/AuthAndFrame";
import { useParams } from "react-router-dom";
import { CodeEditor } from "../components/CodeEditor";
import MdRender from '../components/MdRender';

interface ProblemId {
  pid: string
}

const ProblemDetail: React.FC<ProblemId> = (props) => {
  const pid = props.pid;
  let pname = 'A+B Problem';
  let statement = 'You are given integers $A$ and $B$. Print $A$ + $B$.';
  let timeLimit = '1';
  let MemLimit = '512';
  let Constraint = '* $0 \\leq A,B \\leq 10$';
  let input_format = '$A$ $B$';
  let output_format = "$A+B$";
  let samples = [{
    id: 1,
    input: '1 2\n',
    output: '3\n',
  },{
    id: 2,
    input: '3 4\n',
    output: '7\n',
  }];
  return (
    <Container>
      <Typography variant="h3" paragraph={true}>
        <MdRender text={pname}/>
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Time Limit: {timeLimit} sec <br></br>
        Memory Limit: {MemLimit} MB
      </Typography>

      <Divider sx={{margin: 1,}}/>

      <Container>
        <Typography variant="h5">
          Problem Statement
        </Typography>
        <MdRender text={statement} />
        <Typography variant="h5">
          Constraints
        </Typography>
        <MdRender text={Constraint}/>
        
      </Container>

      <Container>
        <Typography variant="h5">
          Input
        </Typography>
        <pre>
          <code>
            <MdRender text={input_format} inline={true}/>
          </code>
        </pre>
        <Typography variant="h5">
          Output
        </Typography>
        <pre>
          <code>
            <MdRender text={output_format} inline={true}/>
          </code>
        </pre>
      </Container>
    </Container>
  )
}

const ProblemPage: React.FC = () => {
  const { pid } = useParams();
  if(pid) {
    return (
      <AuthAndFrame selectedItem={"Problems"}>
        <Container sx={{ mt: 4, mb: 4 }}>
          <ProblemDetail pid={pid}/>
          <CodeEditor />
        </Container >
      </AuthAndFrame>
    );
  }
  else {
    return <></>
  }
};

export default ProblemPage;
