import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Button,
} from "@chakra-ui/react";

function PropertyPage({ property, setCurrentView }) {
  // State to handle the selected image from the thumbnails
  const [selectedImage, setSelectedImage] = useState(property.picture);

  // Function to handle thumbnail click
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Box maxW="7xl" mx="auto" px={4} py={6}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          mb={4}
          gap={4}
        >
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
          >
            {property.title} for LKR {property.price}
          </Heading>
          <Button
            as="a"
            onClick={() => setCurrentView("Home")}
            colorScheme="teal"
            size="sm"
          >
            Go Back
          </Button>
        </Flex>

        {/* Property Gallery */}
        <Flex
          direction={{ base: "column", md: "row" }}
          mb={6}
          align="center"
          justify="center"
        >
          {/* Large Image */}
          <Box flex={1} mb={{ base: 4, md: 0 }} textAlign="center">
            <Image
              src={selectedImage}
              alt={property.type}
              boxSize="100%"
              borderRadius="md"
            />
          </Box>

          {/* Thumbnails */}
          <Box flex={0.75} ml={{ base: 0, md: 4 }}>
            <SimpleGrid columns={{ base: 3, md: 4, lg: 3 }} spacing={4}>
              {property.images.map((image, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  cursor="pointer"
                  onClick={() => handleThumbnailClick(image)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    boxSize="100%"
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>

        {/* Tabs for Description, Floor Plan, Google Map */}
        <Tabs isFitted variant="enclosed" colorScheme="teal">
          <TabList mb={4}>
            <Tab _selected={{ bg: "teal.500", color: "white" }}>
              Description
            </Tab>
            <Tab _selected={{ bg: "teal.500", color: "white" }}>Floor Plan</Tab>
            <Tab _selected={{ bg: "teal.500", color: "white" }}>Google Map</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading size="md" mb={4}>
                Property Description
              </Heading>
              <Text>{property.description}</Text>
            </TabPanel>
            <TabPanel>
              <Heading size="md" mb={4}>
                Floor Plan
              </Heading>
              <Image src={property.floorPlan} alt="Floor Plan" />
            </TabPanel>
            <TabPanel>
              <Heading size="md" mb={4}>
                Google Map
              </Heading>
              {/* Embed Google Map (Replace with actual Google Map Embed Code) */}
              <iframe
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?q=${property.location}&key=YOUR_GOOGLE_MAPS_API_KEY`}
                allowFullScreen
              ></iframe>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default PropertyPage;
