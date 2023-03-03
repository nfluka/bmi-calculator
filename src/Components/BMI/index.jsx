import './BMI.css'
import { useState } from "react";
import { calculateBMI, BMICategory } from "../../Utils";

export default function BMI() {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBMI] = useState(0)
    const [category, setCategory] = useState("Normal")
    const [isError, setError]  = useState(false)

    function handleSubmit(event) {
        event.preventDefault();

        (height === "" || weight === "") ? setError(true) : setError(false);
            
        const BMI = Math.round(calculateBMI(height, weight))
        setBMI(BMI)
        setCategory(BMICategory(BMI))
    }

    function handleChange(event) {        
        const name = event.target.name

        if (name === 'weight') setWeight(event.target.value);
        if (name === 'height') setHeight(event.target.value);
    }

    return (
        <form>
            {bmi > 0 && bmi !== Number.isNaN(bmi) &&
            <div>
                <h2>BIM: {bmi} kg/m<sup>2</sup></h2>
                <h3>Category: {category}</h3>
            </div>
            }
            
            { isError &&
                <p className="error">Please enter Your height and weight below.</p>
            }
            <div>
                <label htmlFor="height">Height</label>
                <input onChange={handleChange} value= {height} type="number" name="height" id="height" placeholder="Enter Height in cm"/>
            </div>

            <div>
                <label htmlFor="weight">Weight</label>
                <input onChange={handleChange} value= {weight} type="number" name="weight" id="weight" placeholder="Enter Weight in kg"/>
            </div>

            <button onClick={handleSubmit} className="btn-calculate">Calculate</button>
        </form>
    );
}