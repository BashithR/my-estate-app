import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Badge,
} from "@chakra-ui/react";

function PropertyCard({ property, setCurrentView, setPropOption }) {
  const setViewGallery = () => {
    setCurrentView("Gallery");
    setPropOption(property.id);
    if (currentView) {
      console.log("No prop selected");
    } else {
      console.log();
    }
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
    >
      {/* Property Image */}
      <Image
        src={property.picture}
        alt={property.id}
        height="200px"
        width="100%"
        objectFit="cover"
      />

      {/* Card Content */}
      <Box p={4}>
        <Stack spacing={2}>
          <Badge colorScheme="teal" width="fit-content">
            {property.type}
          </Badge>

          <Heading size="md">LKR {property.price.toLocaleString()}</Heading>

          <Text fontSize="sm" noOfLines={3}>
            {property.description}
          </Text>

          <Button
            as="a"
            onClick={() => setViewGallery()}
            colorScheme="teal"
            size="sm"
            alignSelf="flex-start"
          >
            View Details
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default PropertyCard;
