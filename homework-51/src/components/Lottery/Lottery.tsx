import './Lottery.css';

interface ILotteryProps {
    num: number;
}

export const Lottery: React.FC<ILotteryProps> = ({ num }) => {
    return (
        <div className="Lottery-box">
            {num}
        </div>
    );
};