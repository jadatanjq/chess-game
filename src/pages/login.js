import {
	Container,
	Text,
	Box,
	Stack,
	Spacer,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Image,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Button,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useState } from "react";
export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div>
			<Box
				bgImage="url('/bg-home.jpg')"
				bgPosition="center"
				bgRepeat="no-repeat"
				bgSize="cover"
				h="100%"
				minH="100vh"
				paddingTop="60px"
			>
				<Container
					maxw="md"
					className="h-full flex flex-col items-center justify-center"
				>
					<Stack className="w-full">
						<Text
							color="white"
							className="text-center"
							fontSize="2xl"
						>
							Sign in to chess game
						</Text>
						<Stack
							className="w-full bg-black/50 p-10 rounded-md"
							spacing={4}
						>
							<Box>
								<Text color="white">
									Username or email address
								</Text>
								<InputGroup size="md">
									<Input></Input>
								</InputGroup>
							</Box>
							<Box>
								<Stack direction="row">
									<Text color="white">Password</Text>
									<Spacer />

									<Link href="/forgotPassword">
										<Text color="blue.300">
											Forgot your password?
										</Text>
									</Link>
								</Stack>
								<InputGroup size="md">
									<Input
										type={
											showPassword ? "text" : "password"
										}
									/>
									<InputRightElement width="4.5rem">
										<Button
											h="1.75rem"
											size="sm"
											onClick={() =>
												setShowPassword(!showPassword)
											}
										>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
							</Box>
							<Button width="100%" colorScheme="green">
								Sign In
							</Button>
						</Stack>
						<Stack
							direction="row"
							className="w-full p-3 rounded-md border border-black/50 text-center justify-center"
						>
							<Text color="white">New to Chess Game?</Text>
							<Link href="/createAccount">
								<Text color="blue.300">Create an account.</Text>
							</Link>
						</Stack>
					</Stack>
				</Container>
			</Box>
		</div>
	);
}
