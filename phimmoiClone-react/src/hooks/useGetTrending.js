import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '~/utils/apiClient';
import { axiosInstance } from '~/utils/axiosInStance';

export const useGetTrending = (page, year) => {
    const [trendingMovie, setTrendingMovie] = useState([]);
    const [trendingLoading, setTrendingLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setTrendingLoading(true);
            try {
                const response = await axiosInstance.get(API_ENDPOINTS.TRENDING, {
                    params: { year: year, page: page },
                });
                setTrendingMovie(response.data.data.items);
            } catch (error) {
                console.log('ERROR:', error);
            }

            setTrendingLoading(false);
        };

        fetchData();
    }, [year, page]);

    return { trendingMovie, trendingLoading };
};
