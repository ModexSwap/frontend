import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    maxWidth: 700,
    backgroundColor: "#161522",
    color:"#A09EA1",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  header: {
    paddingBottom: 0
  }
});

const useStyles = makeStyles(styles);

function Staking(props) {
  const classes = useStyles();

  const [deploy, setDeploy] = React.useState(true);


  return (
    <div class>
      <Container>
        <Card className={{ ...classes.paperContainer, glass: true }} style={{backgroundColor: "rgb(32,34,49)"}}>
          <CardHeader
            className={classes.header}

          />

          <h1 class="text-center text-white">Staking</h1>
          <p class="text-center text-white">Coming Soon ...</p>
        </Card>
      </Container>
    </div>
  );
}

export default Staking;
