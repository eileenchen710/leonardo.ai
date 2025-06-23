'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Input, VStack, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, HStack, Spinner, Alert, AlertIcon } from '@chakra-ui/react';

const STORAGE_KEY = 'user_info_v3_5';

export default function UserGate({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ username: string; position: string } | null>(null);
  const [username, setUsername] = useState('');
  const [position, setPosition] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setUser(parsed);
        setUsername(parsed.username);
        setPosition(parsed.position);
      }
      setLoading(false);
    } catch {
      setErrorMsg('Failed to load user info. Please refresh the page or clear your browser cache.');
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = () => {
    if (!username.trim() || !position.trim()) {
      setErrorMsg('Username and position cannot be empty');
      return;
    }
    setErrorMsg('');
    setUser({ username, position });
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ username, position }));
    onClose();
  };

  const handleEdit = () => {
    onOpen();
  };

  return (
    <>
      <Modal isOpen={!user || isOpen} onClose={() => {}} isCentered closeOnOverlayClick={false} closeOnEsc={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please enter your information</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Input aria-label="Username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
              <Input aria-label="Position" placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} />
              {errorMsg && <Alert status="error" fontSize="sm"><AlertIcon />{errorMsg}</Alert>}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button aria-label="Submit Info" colorScheme="blue" onClick={handleSubmit} isDisabled={!username.trim() || !position.trim()} isLoading={loading}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {user && (
        <Box position="fixed" top={4} right={4} zIndex={2000}>
          <HStack spacing={2} bg="gray.100" px={3} py={2} borderRadius="md" boxShadow="md">
            <Text fontSize="sm">{user.username} ({user.position})</Text>
            <Button size="xs" onClick={handleEdit} colorScheme="blue" variant="outline" aria-label="Edit Info">Edit</Button>
          </HStack>
        </Box>
      )}
      {user && children}
      {loading && (
        <Box position="fixed" top={0} left={0} w="100vw" h="100vh" bg="whiteAlpha.800" zIndex={3000} display="flex" alignItems="center" justifyContent="center">
          <Spinner size="xl" />
        </Box>
      )}
    </>
  );
}
