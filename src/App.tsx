import { Container, Row, Col,Button, Stack } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowIcon } from './compontents/Icons';
import { LanguageSelector} from './compontents/LanguageSelector';
import { SectionTypes } from './types.d';
import TextArea from './compontents/TextArea';
import { useEffect } from 'react';
import { translate } from './services/translate';
function App() {
  const {
    fromLanguage,
    toLanguage,
    setFromLanguage,
    setInterchangeLanguages,
    setToLanguage,
    setFromText,
    setResult,
    loading,
    fromText,
    result
  } = useStore()


  useEffect(()=>{
    if(fromText === '')return

    translate({fromLanguage,toLanguage,text:fromText})
    .then(result => {
      if(result == null)return
      setResult(result)
    })
    .catch(()=> setResult('Error'))

    
  },[fromText])

  return (
  
    <Container >
    <h1>Google Translate</h1>
    <Row>
      <Col>
      <Stack gap={2}>
      <LanguageSelector 
      type={SectionTypes.From}
      value={fromLanguage}
      onChange={setFromLanguage}/>
      <TextArea  value={fromText} type={SectionTypes.From} onChange={setFromText}/>
      </Stack>
      </Col>
      <Col>
        <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={setInterchangeLanguages}>
          <ArrowIcon/>
          </Button>
      </Col>
      <Col>
      <Stack gap={2}>
      <LanguageSelector
      type={SectionTypes.To}
      value={toLanguage}
      onChange={setToLanguage}/>
        <TextArea value={result} type={SectionTypes.To} onChange={setResult} loading={loading}/>
      </Stack>
      </Col>
    </Row>
    </Container>
   
  )
}

export default App
