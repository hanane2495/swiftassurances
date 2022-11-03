import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Steps Components
import SlectionDemarche from './Steps/SelectionDemarche'
import InfoClient from './Steps/InfoClient';
import Dossier from './Steps/Dossier';



//IMPORTING ICONS
import {FaClipboardList} from 'react-icons/fa';
import {FaFileInvoice} from 'react-icons/fa';
import {FaRegUser} from 'react-icons/fa';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import SelectionDemarche from './Steps/SelectionDemarche';


//STEPS CONNECTOR STYLING
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(45deg, rgba(181,143,255,1) 12%, rgba(128,131,194,1) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(45deg, rgba(181,143,255,1) 12%, rgba(128,131,194,1) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

//STEPS STYLING
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    background:'#200752',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    background:'#200752'
  }),
}));

//Buttons style
const NextButtonStyle = {
  color:'#fff',
  background: '#0CDB0E',
  padding : '10px',
  fontWeight : '500',
  borderRadius:'10px'
}

const FinishButtonStyle = {
  color:'#fff',
  background: '#200752',
  padding : '10px',
  fontWeight : '500',
  borderRadius:'10px'
}

const BackButtonStyle = {
  color:'#fff',
  background: '#aaa',
  padding : '10px',
  fontWeight : '500',
  borderRadius:'10px'
}

const RefreshButtonStyle = {
  color:'#200752',
  background: 'none',
  padding : '10px',
  fontWeight : '500',
  border : 'solid 1px #200752',
  borderRadius:'10px'
}

//CHINGING COLOR STEPS FUNCTION
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <FaClipboardList />,
    2: <FaRegUser />,
    3: <FaFileInvoice />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}


//PROPTYPES
ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


//STEPS
const steps = ['Demarche', 'Info Client', 'Dossier'];



/**_________________________________________________________________________________________________________________________ */





export default function CustomizedSteppers() {

  //MANAGING STEPS CHANGINGS ..................................................................................................
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  let component = null
    switch(activeStep) {
      case 0:
        component =  <SelectionDemarche />;
        break;
      case 1:
        component = <InfoClient />;
        break;
      case 2:
        component =  <Dossier />;
      break;
      default:
        component =  <SelectionDemarche />;
    }

 

  return (
    <Stack style={{background:"#fff", padding:'20px 50px 10px 50px', borderRadius:'10px'}} sx={{ width: '100%' }} spacing={3}>
      <Stepper style={{borderBottom:'solid 1px #aaa', paddingBottom:'20px'}} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel 
                    {...labelProps}
                    StepIconComponent={ColorlibStepIcon}
                    >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <img style={{height:'150px'}} src={require('../../../assets/undraw/done.svg') }/>
          <h3 style={{color:'#0CDB0E', fontSize:'1rem', fontFamily:'Raleway', textAlign:'center'}}>Votre demande est prise en charge</h3>
          <p style={{color:'#888', fontSize:'0.7rem', fontFamily:'Raleway', textAlign:'center', marginTop:'2px'}}>Nous vous remercions de votre confiance!</p>
          <Box style={{borderTop:'solid 1px #aaa', padding:'20px 0px'}} sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button style = {RefreshButtonStyle} onClick={handleReset}>Rafraîchi</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {component}
          <Box style={{borderTop:'solid 1px #aaa', padding:'20px 0px'}} sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              style={BackButtonStyle}
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Précédent
            </Button>
            <Box sx={{ flex: '2 2 auto' }} />
            <Button style={activeStep === steps.length - 1 ? FinishButtonStyle  : NextButtonStyle} onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Terminé' : 'Suivant'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Stack>
  );
}


/**
 * 




          <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
 */