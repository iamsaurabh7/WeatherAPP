import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box bg="#322659" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Weather App
          </Text>
        </Box>

        <Box alignItems={"center"}>
          <a
            href="https://saurabh-verma-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" colorScheme="teal">
              Contact Me
            </Button>
          </a>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
