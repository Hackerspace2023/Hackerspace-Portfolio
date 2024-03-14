import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { About, Blog, Contact, Error, Events, Gallery, Home, Projects } from "../pages";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
