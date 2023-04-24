import { Link } from "@chakra-ui/next-js";
import { Flex, Spacer, Box } from "@chakra-ui/react";
export default function Home() {
	return (
		<Flex h="60px" alignItems="center" position="fixed" w="100%" px="3">
			<Link
				fontSize="md"
				p="10px"
				href="/"
				color="white"
				_hover={{ color: "blackAlpha.400" }}
			>
				Home
			</Link>
			<Box ml="auto">
				<Link
					fontSize="md"
					p="10px"
					href="/about"
					color="white"
					_hover={{ color: "blackAlpha.400" }}
				>
					About
				</Link>
				<Link
					fontSize="md"
					p="10px"
					href="/login"
					color="white"
					_hover={{ color: "blackAlpha.400" }}
				>
					Login
				</Link>
			</Box>
		</Flex>
	);
}
