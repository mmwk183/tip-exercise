import { useState } from "react"

function Form() {

    const [bill, setBill] = useState('')
    const [people, setPeople] = useState('')
    const [percentage, setPercentage] = useState('')
    const [total, setTotal] = useState(0)

    function totalBill(event) {
        setBill(parseFloat(event.target.value))
    }

    function totalPeople(event) {
        setPeople(parseFloat(event.target.value))
    }

    function totalPercentage(event) {
        setPercentage(parseFloat(event.target.value))
    }

    function mathsTotal(e) {
        e.preventDefault()
        setTotal(bill*(percentage/100+1)/people)
    }
    

    return (
        <div>
            <form onSubmit={mathsTotal}>
                <label htmlFor="totalBill">Total bill</label>
                <input onChange={totalBill} id="totalBill" type="text" name="totalBill" />
                <label htmlFor="numberPeople">Number of people</label>
                <input onChange={totalPeople} id="numberPeople" type="text" name="numberPeople" />
                <label htmlFor="tipPercent">Tip percentage</label>
                <input onChange={totalPercentage} id="tipPercent" type="text" name="tipPercent" />
                <input type="submit" value="Submit" />
            </form>
            <p>{total}</p>
        </div>

    )
} 

export default Form