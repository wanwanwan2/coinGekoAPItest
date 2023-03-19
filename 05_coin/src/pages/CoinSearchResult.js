import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchCoin } from '../apis/CoinAPI';
import boxStyle from './Coin.module.css';
import CoinItem from '../components/CoinItem';

function CoinSearchResult() {

    const [searchParams] = useSearchParams();

    const [coinList, setCoinList] = useState([]);

    const coinName = searchParams.get('coinName')

    useEffect(
        () => {
            setCoinList(searchCoin(coinName));
        },
        [coinName]
    );

    console.log(coinList);

    return (
        <div>
            <h1>검색된 메뉴</h1>
            <div className={ boxStyle.CoinBox }>
                { coinList.map(coin => <CoinItem key={ coin.id } coin={ coin }/>)}
            </div>
        </div>
    );
}

export default CoinSearchResult;