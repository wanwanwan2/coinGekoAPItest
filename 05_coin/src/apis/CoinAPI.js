import coins from '../data/response_coingeko.json';


// 전체 코인 리스트 조회
export function getCoinList() {

    return coins;
}

export function getCoinDetail(id) {

    return coins.filter(coin => coin.id === toString(id));
    
}

export function searchCoin(Name) {

    return coins.filter(coin => coin.Name.match(Name));
}
