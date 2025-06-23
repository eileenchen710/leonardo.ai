'use client';

import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  HStack,
  Box,
  Button
} from '@chakra-ui/react';

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ItemCardProps {
  item: Item;
  onClick: () => void;
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  return (
    <Card
      maxW="100%"
      overflow="hidden"
      cursor="pointer"
      onClick={onClick}
      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
      transition="all 0.2s"
    >
      <HStack spacing={4} p={4}>
        <Image
          src={item.image}
          alt={item.title}
          w="100px"
          h="100px"
          objectFit="cover"
          borderRadius="md"
        />
        <Box flex="1">
          <CardBody p={0}>
            <Heading size="md" mb={2}>
              {item.title}
            </Heading>
            <Text color="gray.600" noOfLines={2}>
              {item.description}
            </Text>
            <Button
              size="sm"
              colorScheme="blue"
              variant="outline"
              mt={3}
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              View Details
            </Button>
          </CardBody>
        </Box>
      </HStack>
    </Card>
  );
}

