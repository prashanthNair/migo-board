import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@mui/styles/styled';

const steps = [
  'Ordered',
  'Packed',
  'Shiped',
  'Delivered',
];

const CustomStepLabel = styled(StepLabel)({
  color: 'green',

});

const classes:any = () => ({
  icon: {
    color: 'red !important',
  },
  text: {
    fill: 'white',
  },
});

export default function CustomStepper() {
  const [expand, setExpand] = React.useState(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  return (
    <Box sx={{ width: '100%', marginBottom: 0.5 }}>
      <Accordion expanded={expand}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={toggleAcordion}
        />
        <AccordionDetails>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <CustomStepLabel StepIconProps={{
                  classes: {
                    active: classes.icon,
                    text: classes.text,
                  },
                }}
                >
                  {label}

                </CustomStepLabel>
              </Step>
            ))}
          </Stepper>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
