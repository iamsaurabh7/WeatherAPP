import React from "react";
import { Box, Button, Center, HStack, VStack, Text } from "@chakra-ui/react";

function Footer() {
  const isMobile = window.innerWidth <= 768; // screen breakpoint
  const myInfo = {
    linkedIn: "https://www.linkedin.com/in/saurabhvermasv/",
    twitter: "https://twitter.com/iamsaurabhv",
    github: "https://github.com/iamsaurabh7",
    leetcode: "https://leetcode.com/iamsaurabhverma/",
    hackerRank: "https://www.hackerrank.com/profile/iamsaurabhverma",
  };

  return (
    <Box bg="gray.800" p={6} color="white">
      <VStack spacing={4}>
        {isMobile ? (
          <>
            <HStack spacing={4}>
              <Button colorScheme="linkedin" as="a" href={myInfo.linkedIn}>
                LinkedIn
              </Button>
              <Button colorScheme="twitter" as="a" href={myInfo.twitter}>
                Twitter
              </Button>
            </HStack>
            <HStack spacing={4}>
              <Button colorScheme="github" as="a" href={myInfo.github}>
                GitHub
              </Button>
            </HStack>
            <HStack spacing={4}>
              <Button colorScheme="teal" as="a" href={myInfo.leetcode}>
                LeetCode
              </Button>
              <Button colorScheme="purple" as="a" href={myInfo.hackerRank}>
                HackerRank
              </Button>
            </HStack>
          </>
        ) : (
          <HStack spacing={4} align="center">
            <Button colorScheme="linkedin" as="a" href={myInfo.linkedIn}>
              LinkedIn
            </Button>
            <Button colorScheme="twitter" as="a" href={myInfo.twitter}>
              Twitter
            </Button>
            <Button colorScheme="github" as="a" href={myInfo.github}>
              GitHub
            </Button>
            <Button colorScheme="teal" as="a" href={myInfo.leetcode}>
              LeetCode
            </Button>
            <Button colorScheme="purple" as="a" href={myInfo.hackerRank}>
              HackerRank
            </Button>
          </HStack>
        )}
        <Center>
          <Text p={2}>Made with ❤ by Saurabh Verma</Text>
        </Center>
      </VStack>
    </Box>
  );
}

export default Footer;
