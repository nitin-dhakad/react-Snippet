import React, { useRef, useEffect, useState } from "react";
import { CodeBlock, github } from "react-code-blocks";
import {
  Button,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./index.css";
import styles from "./styles";

const Snippet = ({
  data = {},
  onSave = () => {},
  language = "javascript",
  showLineNumbers = true,
  theme = github,
}) => {
  const openInNewTab = () => {
    window.open(data?.origin, "_blank", "noopener,noreferrer");
  };

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const CustomizedDialogs = () => {
    return (
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            <div>{data?.header}</div>
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <div onClick={handleClickOpen}>
              <CodeBlock
                text={data?.code}
                language={language}
                showLineNumbers={showLineNumbers}
                theme={theme}
              />
            </div>
          </DialogContent>
        </BootstrapDialog>
      </div>
    );
  };
  const [divHeight, setDivHeight] = useState(0);

  const ref = useRef(null);
  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
  }, []);
  return (
    <div className="container-snippet">
      {CustomizedDialogs()}
      <div className="header-snippet">
        <div className="header-title">{data?.header}</div>
        <div>
          <Button
            variant="contained"
            style={{ ...styles.buttonOrigin, ...styles.buttonSave }}
            onClick={() => onSave(data?.id)}
          >
            Save
          </Button>
          <Button
            variant="contained"
            style={styles.buttonOrigin}
            onClick={openInNewTab}
          >
            Origin
          </Button>
        </div>
      </div>
      <div>
        <div ref={ref} className="box" onClick={handleClickOpen}>
          <CodeBlock
            text={data?.code}
            language={language}
            showLineNumbers={showLineNumbers}
            theme={theme}
          />
        </div>
        {divHeight > 250 ? (
          <span className="view-more-snippet"> <Button
          variant="contained"
          style={styles.buttonViewMore}
          onClick={handleClickOpen}
        >
          View More...
        </Button></span>
        ) : null}
      </div>
    </div>
  );
};
export default Snippet;
