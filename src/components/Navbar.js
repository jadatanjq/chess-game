import { Link } from "@chakra-ui/next-js";
import { Flex, Spacer, Box } from "@chakra-ui/react";
export default function Home() {
	return (
		<Flex className="h-[60px] fixed px-3 items-center w-full bg-black/50 text-white">
			<Link href="/">Home</Link>
			<Box ml="auto">
				<Link href="/about" className="px-3">
					About
				</Link>
				<Link href="/login" className="px-3">
					Login
				</Link>
			</Box>
		</Flex>
	);
}
