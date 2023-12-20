import { Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import NavMenu from "../components/NavMenu";

export function Header() {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        padding={{ base: "15px", md: "25px" }}
      >
        <Link href={"/"}>
          <div>
            <Image
              src={"/header_image.svg"}
              alt="Logo image"
              align="center"
              boxSize={{ base: "40px", sm: "50px" }}
            />
          </div>
        </Link>
        <NavMenu />
      </Flex>
    </header>
  );
}
