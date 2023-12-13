import {
  Flex,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  name: string;
  image: string;
  description: string;
  url: string;
}

const WorkCard = ({ name, image, description, url }: Props) => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.3,
      },
    },
  };

  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      variants={item}
    >
      <Image alt={"Thumbnail for the project " + name} src={image} />
      <CardBody>
        <Heading size={{ base: "xs", sm: "md" }}>{name}</Heading>
        <Text marginTop={2} fontSize={{ base: "xs", sm: "md" }}>
          {description}
        </Text>
      </CardBody>
      <CardFooter justify="flex-end">
        <Link href={url}>
          <Button size={{ base: "sm", sm: "md" }}>Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
