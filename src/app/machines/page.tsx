import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Container,
  TableContainer,
} from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <Container className="w-full" height="400px" bg="gray.300">
        Machines Diagrams
      </Container>
      <TableContainer className="my-10">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Machine Name</Th>
              <Th>Added Time</Th>
              <Th isNumeric>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Machine 1</Td>
              <Td>30.10.2023</Td>
              <Td isNumeric>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  href={"#"}
                  _hover={{
                    bg: "blue.300",
                  }}
                >
                  Check
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Machine 2</Td>
              <Td>30.10.2023</Td>
              <Td isNumeric>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  href={"#"}
                  _hover={{
                    bg: "blue.300",
                  }}
                >
                  Check
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Machine 3</Td>
              <Td>30.10.2023</Td>
              <Td isNumeric>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  href={"#"}
                  _hover={{
                    bg: "blue.300",
                  }}
                >
                  Check
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default page;
