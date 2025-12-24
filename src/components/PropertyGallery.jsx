import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Badge,
} from "@chakra-ui/react";

function PropertyGallery({ property, setCurrentView }) {
  return (
    <>
      <h1>
        Hi this is <b>{property.id}</b>
      </h1>
      <h1>
        Hi this is <b>{property.type}</b>
      </h1>
      <Button
        as="a"
        colorScheme="teal"
        size="sm"
        alignSelf="flex-start"
        onClick={() => setCurrentView("Home")}
      >
        Go Back
      </Button>
    </>
  );
}

export default PropertyGallery;
