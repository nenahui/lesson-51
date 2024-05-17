import './Lottery.css';

const Lottery = () => {
    return (
        <div className={"Lottery-container"}>
            <div className={"Lottery-boxes"}>
                <div className="Lottery-box">5</div>
                <div className="Lottery-box">11</div>
                <div className="Lottery-box">16</div>
                <div className="Lottery-box">23</div>
                <div className="Lottery-box">32</div>
            </div>
            <button type={"button"} className={"Lottery-btn"}>New numbers</button>
        </div>
    );
};

export default Lottery;