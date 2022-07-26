import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '5a8e028cccmsh91e0e8c6aab5b71p1b2531jsnfbc66bde80b6',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'

}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${ newsCategory }&safeSearch=off&textFormat=Raw&freshness=Day&count=${ count}`), 
        })
    })
});

export const{
    useGetCryptoNewsQuery,
} = cryptoNewsApi;