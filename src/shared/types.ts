export enum SelectedPage {
  Home = "Home",
  Benefits = "BENEFITS",
  OurClasses = "ALLCLASES",
  ContactUs = "CONTACT",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
