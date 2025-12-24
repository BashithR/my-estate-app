import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Badge,
} from "@chakra-ui/react";

function PropertyGallery({ prop, setCurrentView }) {
  return (
    <>
      <h1>
        Hi this is <b>{prop}</b>
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
