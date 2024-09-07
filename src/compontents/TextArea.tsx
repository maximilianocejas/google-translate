import { Form } from "react-bootstrap"
import {  SectionTypes } from "../types.d"

interface Props{
    type: SectionTypes
    onChange: (value:string)=> void
    value: string
    loading?: boolean
}

const commonStyles = {border: 0, height: '150px'}

const getPlaceholder = ({type, loading}: {type: SectionTypes,loading?:boolean})=>{
    if(type === SectionTypes.From)return 'Ingresar texto'
    if(loading)return 'Cargando...'
    return 'Traducción'
}

export default function TextArea({type,onChange,value,loading}: Props){
    const styles = type === SectionTypes.To?
    {...commonStyles,backgroundColor:'#F5F5F5'}:commonStyles


    const handleChange =(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        onChange(event.target.value)
    }

    return(
        <Form.Control
        autoFocus={type === SectionTypes.From}
        style={styles}
        disabled={type === SectionTypes.To}
        as='textarea'
        placeholder={getPlaceholder({type,loading})}
        value={value}
        onChange={handleChange}
        />
    )
    
}