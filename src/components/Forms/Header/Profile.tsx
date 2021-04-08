import { Avatar, Box, Flex, Text} from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Rone Silveira</Text>
      <Text color="gray.300" fontSize="small">
        ronebs10@hotmail.com</Text>
    </Box>

    <Avatar size="md" name="Rone Silveira" src="https://avatars.githubusercontent.com/u/13562291?v=4" />
  </Flex>
  );
}