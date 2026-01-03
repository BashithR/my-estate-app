import { Box, Text, Stack, Link, Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.800" color="white" mt={10} py={6}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Stack direction="row" spacing={6} mt={{ base: 4, md: 0 }}>
          <Link href="#" _hover={{ color: "teal.300" }}>
            About
          </Link>
          <Link href="#" _hover={{ color: "teal.300" }}>
            Contact
          </Link>
          <Link href="#" _hover={{ color: "teal.300" }}>
            Privacy Policy
          </Link>
        </Stack>

        <Text fontSize="sm">© 2025 Destiny. All rights reserved.</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
