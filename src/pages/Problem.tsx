import React from "react";
import { Container, Typography, Grid, Box, Button } from '@mui/material';
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
      <Box sx={{
          boxShadow: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          p:1,
          mb:3,
        }}
      >
        <Typography variant="h4" paragraph={true}>
          <MdRender text={pname} inline={true} />
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Time Limit: {timeLimit} sec <br></br>
          Memory Limit: {MemLimit} MB
        </Typography>
      </Box>
      <Box sx={{
          boxShadow: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          p:1,
          mb:3,
        }}
      >
        <Typography variant="h5">
          Problem Statement
        </Typography>
        <MdRender text={statement} />
        <Typography variant="h5">
          Constraints
        </Typography>
        <MdRender text={Constraint} />

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
      </Box>
    </Container>
  )
}

const EditorBlock: React.FC<ProblemId> = (props) => {
  return (
    <Container>
      <Box sx={{
        boxShadow: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        p:1,
        mb:3,
      }}
      >
        <CodeEditor />
        <Button variant="contained" style={{margin:12}} onClick={()=>{console.log("submitted")}}>Submit</Button>
      </Box>
    </Container>
  )
}

const OtherInfo: React.FC = () => {
  return (
    <Container>
      <Box sx={{
        boxShadow: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        p:1,
        mb:3,
      }}
      >
        {"some other info"}
      </Box>
    </Container>
  )
}

const ProblemPage: React.FC = () => {
  const { pid } = useParams();
  if(pid) {
    return (
      <AuthAndFrame selectedItem={"Problems"}>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <ProblemDetail pid={pid}/>
              <EditorBlock pid={pid}/>
            </Grid>
            <Grid item xs={3}>
              <OtherInfo />
            </Grid>
          </Grid>
        </Container >
      </AuthAndFrame>
    );
  }
  else {
    return <></>
  }
};

export default ProblemPage;
