import { Curiosities, Products } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useCuriosities = () =>
	useQuery<Curiosities, AxiosError>(['curiosities'], () => fetcher('/api/curiosities'), {
		refetchInterval: 60_000,
		staleTime: 60_000,
	});

export const useSuggestProducts = (id: number) =>
	useQuery<Products[], AxiosError>(['products_category', id], () => fetcher(`/api/products_category/${id}`), {
		staleTime: Infinity,
	});

export const useItemData = (c: string | string[] | undefined) => {
	return useQuery<Products, AxiosError>(['product', c], () => fetcher(`/api/product/${c}`), { enabled: !!c });
};
