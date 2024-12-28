import React, { useState } from 'react'
import "./BMICalculator.css";

function BMICalculator() {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("")

    const calculateBMI = ()=>{
        if(height && weight){
            const heightInMeters = height/100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmi);

            if(bmi < 18.5){
                setCategory("Under Weight");
            }
            else if(bmi >= 18.5 && bmi <= 24.9){
                setCategory("Normal Weight");
            }
            else if(bmi >= 25 && bmi <= 29.9){
                setCategory("over Weight");
            }
            else{
                setCategory("obese");
            }
        }
    }

    return (
        <div className='bmi-card'>
            <h2>BMI Calculator</h2>
            <div className='input-group'>
                <label>Weight (kg)</label>
                <input
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder='Enter your Weight'
                />
            </div>
            <div className='input-group'>
                <label>Height (cm)</label>
                <input
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder='Enter your Height'
                />
            </div>
            <button className='btn-calculator' onClick={calculateBMI}>Calculate BMI</button>
            {
                bmi && (
                    <div className='result'>
                        <h3>Your BMI: {bmi}</h3>
                        <h4>Category: {category}</h4>
                    </div>
                )
            }
        </div>
    )
}

export default BMICalculator