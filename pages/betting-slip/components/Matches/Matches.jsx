import React, { useEffect } from 'react'
import Text from '@components/Text/Text'

const Matches = (props) => {
    const { data } = props;
    const handleOnChangeText = (e, side) => {
        let newSlip = props.slip
        newSlip.groups[data.index][side] = parseInt(e.target.value)
        props.setSlip(newSlip)
        const [_, matchIndex, sideIndex] = e.target.id.split('-')
        let nextSideIndex
        let nextMatchIndex
        if (sideIndex=='0'){
            nextSideIndex='1'
            nextMatchIndex=matchIndex
        }else{
            nextSideIndex='0'
            nextMatchIndex=(parseInt(matchIndex)+1).toString()
        }
        const nextElem = document.getElementById('groupsmatch-'+nextMatchIndex+"-"+nextSideIndex);
        try{
            nextElem.focus()
        }catch(e){
            console.log('no hay next')
        }
        let allValid = true
        props.indexesSlip.map((idx)=>{
            allValid = allValid && Number.isInteger(props.slip.groups[idx][0])&&Number.isInteger(props.slip.groups[idx][1])
        })
        props.setChecked(allValid)
        if (allValid==true){
            props.setExpanded(false)
        }
        //console.log([matchIndex, sideIndex], 'actual')
        //console.log(['groupsmatch-'+nextMatchIndex+"-"+nextSideIndex,nextMatchIndex, nextSideIndex], 'next')
    }
    return (
        <div className='flex flex-col ' style={{ background: props.number % 2 === 0 ? '#262333' : null, padding: '10px', borderRadius: '15px' }}>
            <div class="grid grid-cols-6">
                <Text
                    fontSize='19px'
                    lineHeight='40px'
                    fontSizeSm={'10px'}
                    className="mt-6">
                    {data.homeName}
                </Text>
                <img src={data.homeLogo} alt="img" style={{ height: '40px', marginTop: '25px' }} />
                <input type="number" id={'groupsmatch-'+data.index+'-0'} name="home" onChange={(e) => handleOnChangeText(e, 0)} label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '60px', height: '40px', color: '#7C3AED', padding: '10px' }} min="0" max="9"/>
                <input type="number" id={'groupsmatch-'+data.index+'-1'} name="away" onChange={(e) => handleOnChangeText(e, 1)} label="Outlined" style={{ background: '#00E5AE', borderRadius: '10px', marginTop: '30px', width: '60px', height: '40px', color: '#7C3AED', padding: '10px' }} min="0" max="9"/>
                <img src={data.awayLogo} alt="img" style={{ height: '40px', marginTop: '25px' }} />
                <div>
                    <Text
                        fontSize='19px'
                        lineHeight='40px'
                        fontSizeSm={'10px'}
                        className="mt-6">
                        {data.awayName}
                    </Text>
                </div>
            </div>
            <div class="flex justify-center ">
                <div>
                    <Text
                        fontSize='19px'
                        lineHeight='40px'
                        fontSizeSm={'10px'}
                        className="">
                        {data.date}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Matches
