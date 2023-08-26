
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Router } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    cache: new InMemoryCache(),
  });

  return (
    <div className="max-w-[1400px] m-auto bg-[#181818]">
      <ApolloProvider client={client}>
        
          <NavBar />
          <AnimatedRoutes />
          <Footer />
        
      </ApolloProvider>
    </div>
  );
}

export default App;
