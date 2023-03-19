import { getCoinDetail } from '../apis/CoinAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CoinDetails() {

    // :id
    const { id } = useParams();

    const [coin, setCoin] = useState({
        symbol: '',
        name: ''
    });
    

    useEffect(
        () => {
            setCoin(getCoinDetail(id));
        },
        [id]
    );

    console.log(coin);

    return (
        <>
            <h2>코인 상세 설명</h2>
            <h3>코인 심볼 : { coin.symbol }</h3>
            <h3>코인 이름 : { coin.name }</h3>
        </>
    );
}

export default CoinDetails;