export interface Service {
  gif: string;
  title: string;
  text: string;
  buttonText?: string;
}

export const ServiceData: Service[] = [
  {
    gif: "/animation5.json",
    title: "Or book  your Boxe  Session ",
    text: "Boxing is great for weight loss and teaches valuable self-defense skills. It burns calories efficiently while boosting your confidence and fitness.",
    buttonText: "Book Now",
  },
  {
    gif: "/animation-meal.json",
    title: "Follow my dietary guidelines",
    text: " Diet plays a crucial role in your body and well-being, accounting for roughly 80% of your transformation journey. It's important to adhere to a healthy diet and lifestyle for optimal health.",
    buttonText: "Learn More",
  },
];
