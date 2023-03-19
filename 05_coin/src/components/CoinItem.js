import itemStyle from './CoinItem.module.css';
import { Link } from 'react-router-dom';

function CoinItem({ coin }) {

    return (
        <Link to={`/coin/${coin.id}`}>
            <div className={ itemStyle.CoinItem }>
                <h3>아이디 : { coin.id }</h3>
                <h3>심볼 : { coin.symbol }</h3>
                <h4>이름 : { coin.name }</h4>
            </div>
        </Link>
    );
}

export default CoinItem;