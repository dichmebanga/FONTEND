import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '~/utils/apiClient';
import { axiosInstance } from '~/utils/axiosInStance';

export const useGetTVShows = (page, year) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(API_ENDPOINTS.TVSHOWS, {
                    params: { year: year, page: page },
                });
                setData(response.data.data.items);
            } catch (error) {
                console.log('ERROR:', error);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [year, page]);

    return { data, isLoading };
};
