import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '~/utils/apiClient';
import { axiosInstance } from '~/utils/axiosInStance';

export const useSearchMovie = (q, page = 1, year) => {
    const [data, setData] = useState([]);
    const [totalMovie, setTotalMovie] = useState(24);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await axiosInstance.get(API_ENDPOINTS.SEARCH, {
                    params: { keyword: q, page, year },
                });
                setData(response.data.data.items);
                setTotalMovie(response.data.data.params.pagination);
            } catch (error) {
                console.log('ERROR:', error);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [q, page, year]);

    return { data, totalMovie, isLoading };
};
