import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardContent, Button,
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

function MainPage(props) {
  const classes = useStyles();

  const [deploy, setDeploy] = React.useState(true);


  return (
    <div class>
      <Container>
        <Card className={{ ...classes.paperContainer, glass: true }} style={{backgroundColor: "rgb(32,34,49)"}}>
            <h1 class='text-center text-white my-2'>Welcome to MoDex</h1>

              <div class="p-6 my-4 px-2">
                <Button
                    edge="end"
                    size="large"
                    href="/swap"
                    type="button" class="btn btn-light m-2"
                >
                  Trade
                </Button>
                <Button
                    edge="end"
                    size="large"
                    href="/liquidity"
                    type="button" class="btn btn-light m-2"
                >
                  Liquidity
                </Button>
                <Button
                    edge="end"
                    size="large"
                    href="/buy-index"
                    type="button" class="btn btn-light m-2"
                >
                  Invest in Index
                </Button>
                <Button
                    edge="end"
                    size="large"
                    href="/loans"
                    type="button" class="btn btn-light m-2"
                >
                  Staking / Loans
                </Button>

              </div>
        </Card>
      </Container>
    </div>
  );
}

export default MainPage;
