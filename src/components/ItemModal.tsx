'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
  VStack,
  Heading
} from '@chakra-ui/react';

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Item | null;
}

export default function ItemModal({ isOpen, onClose, item }: ItemModalProps) {
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Image
              src={item.image}
              alt={item.title}
              w="100%"
              h="300px"
              objectFit="cover"
              borderRadius="md"
            />
            <Heading size="md">Description</Heading>
            <Text color="gray.600">
              {item.description}
            </Text>
            <Text color="gray.500" fontSize="sm">
              Item ID: {item.id}
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

