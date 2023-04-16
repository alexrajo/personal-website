import lottiereact from "./data/lottiereact";
import roboto from "./data/roboto";

export type License = {
  name: string;
  content: string;
  link?: LinkType;
};

const licenses: License[] = [lottiereact, roboto];

export default licenses;
