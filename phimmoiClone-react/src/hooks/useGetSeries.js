import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '~/utils/apiClient';
import { axiosInstance } from '~/utils/axiosInStance';

export const useGetSeries = () => {
    const [seriesMovie, setSeriesMovie] = useState([]);
    const [seriesLoading, setSeriesLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setSeriesLoading(true);
            try {
                const response = await axiosInstance.get(API_ENDPOINTS.SERIES);
                setSeriesMovie(response.data.data.items);
            } catch (error) {
                console.log('ERROR:', error);
            }

            setSeriesLoading(false);
        };

        fetchData();
    }, []);

    return { seriesMovie, seriesLoading };
};
