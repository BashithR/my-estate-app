import PropertyCard from "./PropertyCard";
import PropertyData from "../data/properties.json";

import { Box, Flex, SimpleGrid, Heading } from "@chakra-ui/react";

function Property() {
  return (
    <Box px={{ base: 4, md: 8 }} py={6}>
      <Flex mb={6} align="center" justify="center">
        <Heading textAlign="center">Available Properties</Heading>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {PropertyData.properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Property;
