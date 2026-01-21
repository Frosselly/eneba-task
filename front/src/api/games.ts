import axios from 'axios';
import { type GameMetadataType, type GamesResponseType } from '../types/types';
import { useQuery } from '@tanstack/react-query';

const fetchGames = async (searchText: string, page = 1, limit = 20)
    : Promise<{
        data: GameMetadataType[]
        recordCount: number
    }> => {
    const response = await axios.get<GamesResponseType>('/api/list', {
        params: {
            search: searchText,
            pageIndex: page - 1,
            pageSize: limit,
        },
    });

    const products: GameMetadataType[] = response.data.data.map(product => ({
        id: product.id ?? 'unknown',
        name: product.name ?? 'Unknown',
        price: product.priceAmount ?? 0,
        discount: product.retailPriceAmount && product.priceAmount
            ? (product.retailPriceAmount - product.priceAmount) / product.retailPriceAmount
            : 0,
        whishlisted: product.whishlisted ?? 0,
        app: product.app ?? 'Unknown',
        region: product.region ?? 'Unknown',
        cover: product.cover ?? '',
    }));

    return {
        data: products,
        recordCount: Number(response.data.recordCount),
    };
};


export const useGamesApi = (page: number, limit: number, searchQuery: string) => {

    const gamesQuery = useQuery({
        queryKey: ['games', page, limit, searchQuery],
        queryFn: () => fetchGames(searchQuery, page, limit),
    });

    return gamesQuery;
}