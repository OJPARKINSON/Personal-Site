/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Flex, Inset, Text, Avatar, Box, Card } from "@radix-ui/themes";
import {
  ComponentInstanceIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
  return (
    <Card m="9" size="3">
      <Flex gap="3" align="center" justify="center">
        <Avatar
          size="5"
          src="https://media.licdn.com/dms/image/C4E03AQGMc3dXp1SLgQ/profile-displayphoto-shrink_400_400/0/1639754853374?e=1698883200&v=beta&t=9RIuaBHkx9GFNEchPpa_ssC6NAwBj_2KeexzsfRwVsw"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="4" weight="bold">
            Oliver Parkinson
          </Text>
          <Text as="div" size="2" color="gray">
            Full stack software engineer
          </Text>
        </Box>
      </Flex>
      <Flex mt="4" gap="4" justify="center" wrap="wrap" direction="row">
        <Link href="https://www.linkedin.com/in/oliver-parkinson/">
          <Card size="1">
            <Flex>
              <Inset side="left" mr="5">
                <Flex
                  align="center"
                  justify="center"
                  px="7"
                  style={{ background: "#24292F", height: "100%" }}
                >
                  <LinkedInLogoIcon color="white" height="40" width="40" />
                </Flex>
              </Inset>

              <Box style={{ maxWidth: 400 }}>
                <Text as="div" color="gray" mb="1" size="2">
                  linkedin.com
                </Text>
                <Text size="5">Linkedin Profile</Text>
              </Box>
            </Flex>
          </Card>
        </Link>
        <Link href="https://github.com/OJPARKINSON">
          <Card size="1">
            <Flex>
              <Inset side="left" mr="5">
                <Flex
                  align="center"
                  justify="center"
                  px="7"
                  style={{ background: "#24292F", height: "100%" }}
                >
                  <GitHubLogoIcon color="white" height="40" width="40" />
                </Flex>
              </Inset>

              <Box style={{ maxWidth: 400 }}>
                <Text as="div" color="gray" mb="1" size="2">
                  github.com
                </Text>
                <Text size="5">GitHub Profile</Text>
              </Box>
            </Flex>
          </Card>
        </Link>
        <Link href="https://www.codewars.com/users/OJPARKINSON">
          <Card size="1">
            <Flex>
              <Inset side="left" mr="5">
                <Flex
                  align="center"
                  justify="center"
                  px="7"
                  style={{ background: "#24292F", height: "100%" }}
                >
                  <ComponentInstanceIcon color="white" height="40" width="40" />
                </Flex>
              </Inset>

              <Box style={{ maxWidth: 400 }}>
                <Text as="div" color="gray" mb="1" size="2">
                  codewars.com
                </Text>
                <Text size="5">CodeWars Profile</Text>
              </Box>
            </Flex>
          </Card>
        </Link>
      </Flex>
    </Card>
  );
}
