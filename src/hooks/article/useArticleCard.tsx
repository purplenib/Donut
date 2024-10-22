import { fetchBestCard } from '@/src/api/article/articlecardAPI';
import { Card } from '@/src/types/article/CardType';
import { useQuery } from '@tanstack/react-query';

export const useCard = (
  page: number,
  pageSize: number,
  orderBy: string,
  keyword: string
) => {
  return useQuery<Card[]>({
    queryKey: ['card', page, pageSize, orderBy, keyword],
    queryFn: () =>
      fetchBestCard({ queryKey: [page, pageSize, orderBy, keyword] }),
  });
};