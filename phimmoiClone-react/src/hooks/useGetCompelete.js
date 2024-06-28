import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '~/utils/apiClient';
import { axiosInstance } from '~/utils/axiosInStance';

export const useGetCompelete = (page, year) => {
    const [compeleteMovie, setCompeleteMovie] = useState([]);
    const [compeleteLoading, setCompeleteLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setCompeleteLoading(true);
            try {
                const response = await axiosInstance.get(API_ENDPOINTS.COMPELETE, {
                    params: { year: year, page: page },
                });
                setCompeleteMovie(response.data.data.items);
            } catch (error) {
                console.log('ERROR:', error);
            }

            setCompeleteLoading(false);
        };

        fetchData();
    }, [year, page]);

    return { compeleteMovie, compeleteLoading };
};
