'use client';

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack,
  useDisclosure,
  SimpleGrid
} from '@chakra-ui/react';
import { useState } from 'react';
import UserInfoModal from '@/components/UserInfoModal';
import ItemCard from '@/components/ItemCard';
import ItemModal from '@/components/ItemModal';
import Pagination from '@/components/Pagination';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../../src/graphql/queries';

  interface Item {
    id: number;
    title: string;
    description: string;
    image: string;
  }

export default function Home() {
  const { isOpen: isUserModalOpen, onOpen: onUserModalOpen, onClose: onUserModalClose } = useDisclosure();
  const { isOpen: isItemModalOpen, onOpen: onItemModalOpen, onClose: onItemModalClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 24;

  // 查询当前页的 anime 列表
  const { data, loading, error } = useQuery(GET_ANIME_LIST, {
    variables: { page: currentPage, perPage: pageSize },
  });
  const items = data?.Page?.media || [];

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    onItemModalOpen();
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
          Leonardo.Ai Challenge with Next.js
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            An application built with Next.js App Router, TypeScript, and ChakraUI
          </Text>
          <HStack justify="center" spacing={4}>
            <Button colorScheme="blue" onClick={onUserModalOpen}>
              Open User Info
            </Button>
            <Link href="/information">
              <Button variant="outline" colorScheme="blue">
                Go to Information Page
              </Button>
            </Link>
          </HStack>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>
            Featured Anime
          </Heading>
          {loading && <Text>Loading...</Text>}
          {error && <Text color="red.500">Error: {error.message}</Text>}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
            {items.map((anime: any) => {
              const mappedItem: Item = {
                id: anime.id,
                title: anime.title?.romaji || anime.title?.english || anime.title?.native || 'No Title',
                description: anime.description ? anime.description.replace(/<[^>]+>/g, '').slice(0, 120) + '...' : '',
                image: anime.coverImage?.large || '',
              };
              return (
                <ItemCard
                  key={mappedItem.id}
                  item={mappedItem}
                  onClick={() => handleItemClick(mappedItem)}
                />
              );
            })}
          </SimpleGrid>
        </Box>
        <Pagination
          currentPage={currentPage}
          totalPages={1000} // AniList 总页数未知，可根据实际数据调整
          onPageChange={setCurrentPage}
        />
      </VStack>
      <UserInfoModal 
        isOpen={isUserModalOpen} 
        onClose={onUserModalClose} 
      />
      
      <ItemModal
        isOpen={isItemModalOpen}
        onClose={onItemModalClose}
        item={selectedItem && {
          id: selectedItem.id,
          title: selectedItem.title,
          description: selectedItem.description,
          image: selectedItem.image
        }}
      />
    </Container>
  );
}
