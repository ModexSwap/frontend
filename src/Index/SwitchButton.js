import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import * as COLORS from "@material-ui/core/colors";

export default function SwitchButton(props) {
  const { setDeploy } = props;

  const changeStyles = (K) => {
    if (K === true) {
      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = COLORS.blue[800]; 

      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = COLORS.blueGrey[900];
    } else {
      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = COLORS.blue[800];

      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = COLORS.blueGrey[900];
    }
  };

  return (
    <div>
      <ButtonGroup size="large" variant="contained">
        <Button
          id="add-button"
          color="primary"
          text="white"
          onClick={() => {
            setDeploy(true);
            changeStyles(true);
          }}
        >
          Buy Index
        </Button>

        <Button
          id="remove-button"
          color="secondary"
          text="white"
          onClick={() => {
            setDeploy(false);
            changeStyles(false);
          }}
        >
          Sell Index
        </Button>
      </ButtonGroup>
    </div>
  );
}
