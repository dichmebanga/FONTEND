import { useState, useEffect } from 'react';
import { axiosInstance } from '~/utils/axiosInStance';
import { API_ENDPOINTS } from '~/utils/apiClient';
import useDebounce from '~/hooks/useDebounce';

export function useSearch(value) {
    const debouncedValue = useDebounce(value, 500);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (!debouncedValue?.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                const response = await axiosInstance.get(API_ENDPOINTS.SEARCH + 'keyword=' + debouncedValue);
                const result = response.data.data.items.slice(0, 6);
                setSearchResult(result);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchApi();
    }, [debouncedValue]);

    return searchResult;
}
