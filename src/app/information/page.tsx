'use client';

import { 
  Container, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  Box,
  Card,
  CardBody,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function InformationPage() {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            Information Page
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Learn more about this Next.js application
          </Text>
        </Box>

        <Card>
          <CardBody>
            <Heading size="lg" mb={4}>
              Technology Stack
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Next.js 15 with App Router
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                TypeScript for type safety
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                ChakraUI for component library
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Apollo Client for GraphQL
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                LocalStorage utilities
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Heading size="lg" mb={4}>
              Features
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="blue.500" />
                Responsive design with ChakraUI
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="blue.500" />
                Modal components for user interaction
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="blue.500" />
                Pagination for large datasets
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="blue.500" />
                GraphQL integration ready
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="blue.500" />
                Local storage management
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Box textAlign="center">
          <Link href="/">
            <Button colorScheme="blue" size="lg">
              Back to Home
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
}

