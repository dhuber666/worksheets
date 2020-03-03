import React, {ChangeEvent, FormEvent, useState} from 'react';
import Home from "./screens/Home";
import MultiSelect from "./components/MultiSelect";
import ReactPDF, {PDFViewer} from '@react-pdf/renderer';
import PDFGenerator from "./components/PDFGenerator";
import {generateCalculations} from "./helpers/generateCalculations";


function App() {

    const [range, setRange] = useState({from: 1, to: 10})
    const [plus, setPlus] = useState(true)
    const [minus, setMinus] = useState(false)
    const [calculations, setCalculations]: [string[], any] = useState([]);
    const [calculationCount, setCalculationCount] = useState(10);
    const [name, setName] = useState("")

    const onPlusPress = () => {
        setPlus(!plus);
    }

    const onMinusPress = () => {
        setMinus(!minus)
    }

    const onChangeRange = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.id === "von") {
            setRange({...range, from: Number(e.target.value)})
        } else if (e.target.id === "bis") {
            setRange({...range, to: Number(e.target.value)})
        }

    }

    const onChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
        setCalculationCount(Number(e.target.value));
    }

    const getOperands = () => {
        const operands: string[] = [];

        if (plus) {
            operands.push("+")
        }

        if (minus) {
            operands.push("-")
        }

        return operands;
    }

    const generateSheetData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const options = {
            operands: getOperands(),
            range,
            calculationCount
        }

        const generatedCalcs = generateCalculations(options);
        console.log(generatedCalcs)
        setCalculations(generatedCalcs);
    }

    console.log(range)
    return (
        <div>

            <form onSubmit={generateSheetData}>
                <label htmlFor={"name"}>Schüler Name: </label>
                <input type={"text"} placeholder={"name"} value={name} onChange={e => setName(e.target.value)}/>
                <br/>
                <label htmlFor={"von"}>Von: </label>
                <input type="number" placeholder={"von"} id={"von"} value={range.from} onChange={onChangeRange}/>
                <label htmlFor={"bis"}> Bis: </label>
                <input type="text" placeholder={"bis"} id={"bis"} value={range.to} onChange={onChangeRange}/>
                <br/>
                <label htmlFor={"+"}>+ Plus</label>
                <input type={"radio"} id={"+"} value={"+"} checked={plus} onClick={onPlusPress}/>
                <br/>
                <label htmlFor={"-"}>- Minus</label>
                <input type={"radio"} id={"-"} value={"-"} checked={minus} onClick={onMinusPress}/>
                <br/>
                <label htmlFor={"count"}>Wie viele Rechnungen: </label>
                <input type={"text"} id={"count"} value={calculationCount} onChange={onChangeCount}/>
                <br/>
                <input type={"submit"} value={"Generiere Worksheet"}/>
            </form>

            <PDFViewer style={{width: "60vw", height: "100vh"}}>
                <PDFGenerator calculations={calculations} name={name}/>
            </PDFViewer>

        </div>
    );
}

export default App;
