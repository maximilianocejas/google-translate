import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import React from "react"
import { type FromLanguage, type Language, SectionTypes } from "../types.d"


type Props = 
|{type: SectionTypes.From, value: FromLanguage, onChange:(language:FromLanguage)=> void}
|{type: SectionTypes.To, value: Language, onChange:(language:Language)=> void}

export const LanguageSelector= ({onChange,value, type}:Props)=>{
    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
        onChange(event.target.value as Language)
    }
    return(
        <Form.Select aria-label="Selecciona un idioma" onChange={handleChange} value={value}>
            {type === SectionTypes.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key,literal])=>(
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )   
}