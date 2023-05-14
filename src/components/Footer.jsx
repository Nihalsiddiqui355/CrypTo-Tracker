import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc =
  "https://instagram.fpnq7-2.fna.fbcdn.net/v/t51.2885-19/331809099_1364833454362898_768857622933483439_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpnq7-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=IfGWd0_IB0cAX_KMjSA&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAAApr2G_jatXVW0Ww9z8-WHa35m63YidgbXpWl4uhCmQ&oe=6465FBBF&_nc_sid=1527a3";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
