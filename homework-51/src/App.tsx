import './App.css';
import { Lottery } from "./components/Lottery/Lottery";
import { useState } from "react";

interface ILotteryProps {
    num: number;
}

const generateRandomNumbers = (): ILotteryProps[] => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
        const num = Math.floor(Math.random() * 32) + 5;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.sort((a, b) => a - b);
    return numbers.map(num => ({ num }));
};

const App = () => {
    const initialNumbers = [
        { num: 5 },
        { num: 11 },
        { num: 16 },
        { num: 23 },
        { num: 32 }
    ];

    const [numbers, setNumbers] = useState<ILotteryProps[]>(initialNumbers);

    const setNewNumbers = () => {
        setNumbers(generateRandomNumbers());
    };

    return (
        <>
            <div className="Lottery-boxes">
                {numbers.map((currentNum) => (
                    <Lottery num={currentNum.num} key={currentNum.num} />
                ))}
            </div>
            <button onClick={setNewNumbers} className="Lottery-btn">New numbers</button>
        </>
    );
};

export default App;