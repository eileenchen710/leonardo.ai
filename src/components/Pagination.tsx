'use client';

import {
  HStack,
  Button,
  Text,
  IconButton
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <HStack spacing={2} justify="center">
      <IconButton
        aria-label="Previous page"
        icon={<ChevronLeftIcon />}
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        variant="outline"
      />
      
      {getVisiblePages().map((page, index) => {
        if (page === '...') {
          return (
            <Text key={`dots-${index}`} px={2}>
              ...
            </Text>
          );
        }
        
        return (
          <Button
            key={page}
            onClick={() => onPageChange(page as number)}
            variant={currentPage === page ? 'solid' : 'outline'}
            colorScheme={currentPage === page ? 'blue' : 'gray'}
            size="sm"
          >
            {page}
          </Button>
        );
      })}
      
      <IconButton
        aria-label="Next page"
        icon={<ChevronRightIcon />}
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        variant="outline"
      />
    </HStack>
  );
}

