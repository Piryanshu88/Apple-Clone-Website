import {
  Box,
  Flex,
  Icon,
  Image,
  LinkBox,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "../App.css";
function Home() {
  return (
    <Box>
      <Box className="iphone_14">
        <Text as="b" fontSize="3.2rem" letterSpacing="0.6px">
          iPhone 14
        </Text>
        <Text fontSize="1.55rem">Big and bigger</Text>
        <Flex m="auto" justifyContent="center" gap="7">
          <Text fontSize="1.1rem" color="#0066CC">
            Learn more
            <ChevronRightIcon />
          </Text>
          <Text fontSize="1.1rem" color="#0066CC">
            Buy
            <ChevronRightIcon />{" "}
          </Text>
        </Flex>
      </Box>
      <Box className="iphone_14 iphone_14_pro">
        <Text as="b" fontSize="3.2rem" letterSpacing="0.6px">
          iPhone 14 Pro
        </Text>
        <Text fontSize="1.55rem">Pro.Beyond</Text>
        <Flex m="auto" justifyContent="center" gap="7">
          <Text fontSize="1.1rem" color="#0066CC">
            Learn more
            <ChevronRightIcon />
          </Text>
          <Text fontSize="1.1rem" color="#0066CC">
            Buy
            <ChevronRightIcon />{" "}
          </Text>
        </Flex>
      </Box>
      <Box className="iphone_14 iwatch_ultra">
        <Box className="iwatch_ultra_text"></Box>
        <Text fontSize="1.55rem">Adventure awaits.</Text>
        <Flex m="auto" justifyContent="center" gap="7">
          <Text fontSize="1.1rem" color="#0066CC">
            Learn more
            <ChevronRightIcon />
          </Text>
          <Text fontSize="1.1rem" color="#0066CC">
            Buy
            <ChevronRightIcon />{" "}
          </Text>
        </Flex>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 2, sm: 1 }} spacing={2} m="3">
        <Box className="iwatch8">
          <Box className="iwatch8_text"></Box>
          <Text fontSize="1.2rem">A healthy leap ahead.</Text>
          <Flex m="auto" justifyContent="center" gap="7">
            <Text fontSize="1.1rem" color="#0066CC">
              Learn more
              <ChevronRightIcon />
            </Text>
            <Text fontSize="1.1rem" color="#0066CC">
              Buy
              <ChevronRightIcon />{" "}
            </Text>
          </Flex>
        </Box>

        <Box className="iwatch8 airpods_pro">
          <Text as='b' fontSize='2rem' >AirPods Pro</Text>
          <Text fontSize="1.2rem">Rebuilt from the sound up.</Text>
          <Flex m="auto" justifyContent="center" gap="7">
            <Text fontSize="1.1rem" color="#0066CC">
              Learn more
              <ChevronRightIcon />
            </Text>
            <Text fontSize="1.1rem" color="#0066CC">
              Buy
              <ChevronRightIcon />{" "}
            </Text>
          </Flex>
        </Box>

        <Box className="iwatch8 iwatchse">
          <Box className="iwatch8_text iwatchse_text"></Box>
          <Text fontSize="1.2rem">A great deal to love.</Text>
          <Flex m="auto" justifyContent="center" gap="7">
            <Text fontSize="1.1rem" color="#0066CC">
              Learn more
              <ChevronRightIcon />
            </Text>
            <Text fontSize="1.1rem" color="#0066CC">
              Buy
              <ChevronRightIcon />{" "}
            </Text>
          </Flex>
        </Box>

        <Box className="iwatch8 fitness">
          <Box className="iwatch8_text fitness_text"></Box>
          <Text fontSize="1.2rem">Fitness for everyone.</Text>
          <Text fontSize='1.2rem'>Now all you need is iPhone.</Text>
          <Flex m="auto" justifyContent="center" gap="7">
            <Text fontSize="1.1rem" color="#0066CC">
              Learn more
              <ChevronRightIcon />
            </Text>
            <Text fontSize="1.1rem" color="#0066CC">
              Buy
              <ChevronRightIcon />{" "}
            </Text>
          </Flex>
        </Box>

        <Box className="iwatch8 education">
            <Box className="education_text">
            <Text fontSize='2rem'  as='b'>Education moves everyone forward.</Text>
          <Text fontSize="1.2rem">Our partnerships foster access to learning in over 100 countries.</Text>
          </Box>
          <Flex m="auto" justifyContent="center" gap="7">
            <Text fontSize="1.1rem" color="#0066CC">
              Learn more
              <ChevronRightIcon />
            </Text>
          </Flex>
        </Box>

        <Box className="iwatch8 card">
          <Box className="iwatch8_text card_text"></Box>
          <Text fontSize="1.2rem">A healthy leap ahead.</Text>
          <Flex m="auto" justifyContent="center" gap="7">
            <Text fontSize="1.1rem" color="#0066CC">
              Learn more
              <ChevronRightIcon />
            </Text>
            <Text fontSize="1.1rem" color="#0066CC">
              Buy
              <ChevronRightIcon />{" "}
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
export default Home;
