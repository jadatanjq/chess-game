import Navbar from "../components/Navbar";
import { Link } from "@chakra-ui/next-js";
import {
	Container,
	Text,
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Image,
	Flex,
} from "@chakra-ui/react";

const questions = [
	"Q1",
	"Q2",
	"How do I play with friends?",
	"Something is broken..",
];

const answers = [
	"q1 answer",
	"q2 answer",
	"That was a trick question. You have no friends.",
	{
		text1: "Please reach out to ",
		linkText: "us",
		link: "https://t.me/depresso_espressos",
		text2: " on Telegram",
	},
];

export default function Home() {
	return (
		<div>
			<Navbar />
			<Box
				className="bg-gradient-to-r from-moonlitAsteroid-first via-moonlistAsteroid-second to-moonlitAsteroid-third"
				p="8"
			>
				<Container maxW="2xl" color="white">
					<Text fontSize="3xl">Hello! Welcome to our chess app!</Text>
					<Text>
						Our names are Jada and Daryl, and we present to you our
						own version of chess.com<br></br>
						<br></br>
						This will be a small ongoing project for quite some
						time, so stay tuned for our dockerizeable
						microservice-based application!
					</Text>
				</Container>
			</Box>
			<Box
				className="bg-gradient-to-r from-titanium-first to-titanium-second"
				p="8"
			>
				<Container maxW="2xl" color="white">
					<Text fontSize="3xl">How was this built?</Text>
					<Text>
						We utilized what we learned from school, but also wanted
						to explore what has not been taught, so as to challenge
						ourselves and level up our technical skills.
					</Text>
					<Box mt="6">
						<Text fontSize="2xl">Front-end:</Text>
						<Flex gap="6" justify="center">
							<Flex>
								<Link href="https://react.dev/" target="_blank">
									<Image
										src="/software/react.svg"
										boxSize="100px"
										alt="React.js"
									/>
									<Text align="center" mt="2">
										ReactJS
									</Text>
								</Link>
							</Flex>
							<Flex>
								<Link
									href="https://nextjs.org/"
									target="_blank"
								>
									<Image
										src="/software/next.svg"
										boxSize="100px"
										alt="Next.js"
									/>
									<Text align="center" mt="2">
										NextJS
									</Text>
								</Link>
							</Flex>
							<Flex>
								<Link
									href="https://chakra-ui.com/"
									target="_blank"
								>
									<Image
										src="/software/chakraui.jpg"
										boxSize="100px"
										alt="Chakra UI"
									/>
									<Text align="center" mt="2">
										Chakra UI
									</Text>
								</Link>
							</Flex>
						</Flex>
					</Box>
				</Container>
			</Box>
			<Box
				className="bg-gradient-to-r from-royal-first to-royal-second"
				p="8"
			>
				<Container maxW="2xl" color="white">
					<Text fontSize="3xl">FAQ</Text>
					<Accordion allowToggle allowMultiple className="">
						{questions.map((question, index) => (
							<AccordionItem key={[index]}>
								<AccordionButton h="50px">
									<Box as="span" flex="1" textAlign="left">
										{question}
									</Box>
									<AccordionIcon />
								</AccordionButton>
								<AccordionPanel>
									{typeof answers[index] !== "string" ? (
										<>
											{answers[index].text1}
											<Link
												key={index}
												href={answers[index].link}
												target="_blank"
											>
												{answers[index].linkText}
											</Link>
											{answers[index].text2}
										</>
									) : (
										answers[index]
									)}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</Container>
			</Box>
		</div>
	);
}
