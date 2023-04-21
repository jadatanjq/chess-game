import { Link } from "@chakra-ui/next-js";
import { Flex, Spacer, Box } from "@chakra-ui/react";
export default function Home() {
	return (
		<Flex h="60px" bg="#1c1c1c" alignItems="center">
			<Link
				p="18px"
				href="/"
				color="blue.400"
				_hover={{ color: "blue.500" }}
			>
				Home
			</Link>
			<Spacer />
			<Link
				p="18px"
				href="/about"
				color="blue.400"
				_hover={{ color: "blue.500" }}
			>
				About
			</Link>
			<Link
				p="18px"
				href="/login"
				color="blue.400"
				_hover={{ color: "blue.500" }}
			>
				Login
			</Link>
		</Flex>
	);
}
