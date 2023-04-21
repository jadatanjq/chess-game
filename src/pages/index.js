import Navbar from "../components/Navbar";
import { Box, Container, Text, Center } from "@chakra-ui/react";
export default function Home() {
	return (
		<div>
			<Navbar />
			<Box
				bgImage="url('/bg-home.jpg')"
				bgPosition="center"
				bgRepeat="no-repeat"
				bgSize="cover"
				h="100vh"
				p="8"
			>
				<Container maxW="2xl" color="white" h="100%">
					<Center flexDirection="column" alignItems="start" h="100%">
						<Text fontSize="5xl">Checky Checky Check Check.</Text>
						<Text fontSize="3xl">
							Here, we only play chess with our friends like it's
							life or death.
						</Text>
						<Text fontSize="md">
							Why? Because life is a competition. Also because why
							not? Loser buys a pint of beer.
						</Text>
						<Text fontSize="md">
							Prepare for the best forky-forky and
							uno-reverse-attacks you can think of.
						</Text>
					</Center>
				</Container>
			</Box>
		</div>
	);
}
