import { useState, useEffect } from 'react';
import { getCoinList } from '../apis/CoinAPI';
import CoinItem from '../components/CoinItem';
import boxStyle from './Coin.module.css';
import { useNavigate } from 'react-router-dom';

function Coin() {

    const [coinList, setCoinList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {
            setCoinList(getCoinList());
        },
        []
    );

    const onClickHandler = () => {

        // 쿼리스트링 형태로 검색어를 전달
        // /menu/search?menuName=밥
        navigate(`/coin/search?Name=${searchValue}`);
    }

    return (
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input 
                    type="search" 
                    name="Name" 
                    value={ searchValue }
                    onChange={ e => setSearchValue(e.target.value) }
                />
                <button onClick={ onClickHandler }>검색</button>
            </div>
            <div className={ boxStyle.CoinBox }>
                { coinList.map(coin => <CoinItem key={ coin.id } coin={ coin }/>) }
            </div>
        </>
    );
}

export default Coin;