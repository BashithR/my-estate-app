import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Heading,
  Text,
  Flex,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

function FavouritesSidebar({
  favourites,
  addToFavourites,
  removeFromFavourites,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const property = JSON.parse(e.dataTransfer.getData("property"));
    addToFavourites(property);
  };

  return (
    <>
      {/* ❤️ Fixed Heart Button */}
      <IconButton
        icon={<FaHeart />}
        colorScheme="pink"
        aria-label="Toggle Favourites"
        position="fixed"
        bottom="20px"
        right="20px"
        size="lg"
        borderRadius="full"
        zIndex={2}
        onClick={() => setIsOpen(!isOpen)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      />

      {/* 👉 Sidebar */}
      <Box
        position="fixed"
        top="0"
        right="0"
        height="100vh"
        width="320px"
        bg="white"
        boxShadow="lg"
        zIndex={1}
        transform={isOpen ? "translateX(0)" : "translateX(100%)"}
        opacity={isOpen ? 1 : 0}
        transition="all 0.3s ease-in-out"
        p={4}
      >
        <Heading size="md" mb={4}>
          ❤️ Your Favourites
        </Heading>

        {favourites.length === 0 ? (
          <Text>No favourites added yet.</Text>
        ) : (
          <Stack spacing={4}>
            {favourites.map((property) => (
              <Flex
                key={property.id}
                borderWidth="1px"
                borderRadius="md"
                p={3}
                align="center"
                gap={3}
              >
                <Image
                  src={property.picture}
                  boxSize="60px"
                  objectFit="cover"
                  borderRadius="md"
                />

                <Box flex="1">
                  <Text fontWeight="bold">{property.type}</Text>
                  <Text fontSize="sm">£{property.price}</Text>
                </Box>

                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => removeFromFavourites(property.id)}
                >
                  Remove
                </Button>
              </Flex>
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
}

export default FavouritesSidebar;
