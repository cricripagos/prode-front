import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import rectangleImage from '@assets/images/Rectangle.png';
import Text from '@components/Text/Text';
import Image from 'next/image';
import Matches from '../Matches/Matches';


export default function ControlledAccordions(props) {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    


    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ background: '#333647', color: 'white' }}>
                <AccordionSummary 
                    expandIcon={<div style={{background: '#E4168F', borderRadius: '5px'}}><ExpandMoreIcon style={{color: 'white'}}/></div>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
<<<<<<< HEAD
                    <Image src={rectangleImage} alt="img" style={{ height: '20px', width: '20px', marginLeft: '20px', marginRight: '30px' }}/>
                    <Text tag={'h1'} color={'white'} fontSize='18px' fontSizeSm={'18px'}>
                        Group {props.data[0].teams.group.toUpperCase()}
                        {console.log(props.data[0].teams.group.toUpperCase())}
=======
                    <Image src={rectangleImage} alt="img" style={{ marginLeft: '20px', marginRight: '30px' }} />
                    <Text tag={'h1'} color={'white'} fontSize='22px' fontSizeSm={'22px'}>
                        Group {props.data.group.toUpperCase()}
>>>>>>> main
                    </Text>
                </AccordionSummary>
                <AccordionDetails>
                    {props.data.matches.map((dataMatch, i) => <Matches setSlip={props.setSlip} slip={props.slip}  data={dataMatch} />)}  
                </AccordionDetails>
            </Accordion>
            <div style={{marginTop: '10px'}}/>
        </div>
    );
}