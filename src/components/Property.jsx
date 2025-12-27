import PropertyCard from "./PropertyCard";
import { Box, Flex, SimpleGrid, Heading, Text } from "@chakra-ui/react";

function Property({
  properties,
  setCurrentView,
  setPropOption,
  addToFavourites,
}) {
  if (!properties || properties.length === 0) {
    return (
      <Box py={6}>
        <Text textAlign="center">No properties found.</Text>
      </Box>
    );
  }

  return (
    <Box px={{ base: 4, md: 8 }} py={6}>
      <Flex mb={6} align="center" justify="center">
        <Heading textAlign="center">Available Properties</Heading>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            setCurrentView={setCurrentView}
            setPropOption={setPropOption}
            addToFavorites={addToFavourites}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Property;
