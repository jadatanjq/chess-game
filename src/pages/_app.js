import "@/styles/globals.css";
// import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
