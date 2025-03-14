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
        <Card
          size={{
            initial: "1",
            md: "3",
          }}
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <Link href="https://www.linkedin.com/in/oliver-parkinson/">
            <Flex gap="4" align="center">
              <Avatar
                size="6"
                color="gray"
                fallback={
                  <LinkedInLogoIcon color="white" height="40" width="40" />
                }
              />

              <Box>
                <Text as="div" color="gray" mb="1" size="3">
                  linkedin.com
                </Text>
                <Text size="6">Linkedin</Text>
              </Box>
            </Flex>
          </Link>
        </Card>
        <Link
          style={{ width: "100%", maxWidth: "300px" }}
          href="https://github.com/OJPARKINSON"
        >
          <Card
            size={{
              initial: "1",
              md: "3",
            }}
          >
            <Flex gap="4" align="center">
              <Avatar
                size="6"
                color="gray"
                fallback={
                  <GitHubLogoIcon color="white" height="40" width="40" />
                }
              />

              <Box style={{ maxWidth: 400 }}>
                <Text
                  as="div"
                  style={{ textAlign: "center" }}
                  color="gray"
                  mb="1"
                  size="3"
                >
                  github.com
                </Text>
                <Text style={{ textAlign: "center" }} size="6">
                  GitHub
                </Text>
              </Box>
            </Flex>
          </Card>
        </Link>
        <Link
          style={{ width: "100%", maxWidth: "300px" }}
          href="https://www.codewars.com/users/OJPARKINSON"
        >
          <Card
            size={{
              initial: "1",
              md: "3",
            }}
          >
            <Flex gap="4" align="center">
              <Avatar
                size="6"
                color="gray"
                fallback={
                  <ComponentInstanceIcon color="white" height="35" width="35" />
                }
              />

              <Box>
                <Text as="div" color="gray" mb="1" size="3">
                  codewars.com
                </Text>
                <Text size="6">CodeWars</Text>
              </Box>
            </Flex>
          </Card>
        </Link>
      </Flex>
    </Card>
  );
}
