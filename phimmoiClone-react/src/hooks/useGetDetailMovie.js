import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '~/utils/apiClient';
import { axiosInstance } from '~/utils/axiosInStance';

export const useGetDetailMovie = (q) => {
    const [data, setData] = useState([]);
    const [episode, setEpisode] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [watchMovie, setWatchMovie] = useState('');
    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await axiosInstance.get(API_ENDPOINTS.DETAIL_MOVIE + q);
                const total = response.data.data.item;
                setData(total);
                setWatchMovie(total.episodes[0].server_data[0].link_embed);
                setEpisode(total.episodes[0].server_data);
                setName(`/ ${total.name}`);
                setIntro(total.category?.map(({ name }) => name).join(' / '));
            } catch (error) {
                console.log('ERROR:', error);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [q]);

    return { data, isLoading, episode, watchMovie, name, intro };
};
