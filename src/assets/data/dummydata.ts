import { uid } from "uid";
import { TodoItem } from "../../models/TodoItem";

export const items: TodoItem[] = [
  {
    id: uid(),
    todo: "Do something nice for someone I care about",
    completed: true,
  },
  {
    id: uid(),
    todo: "Memorize the fifty states and their capitals",
    completed: false,
  },
  { id: uid(), todo: "Watch a classic movie", completed: false },
  {
    id: uid(),
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
  },
  { id: uid(), todo: "Solve a Rubik's cube", completed: false },
  {
    id: uid(),
    todo: "Bake pastries for me and neighbor",
    completed: false,
  },
  { id: uid(), todo: "Go see a Broadway production", completed: false },
  {
    id: uid(),
    todo: "Write a thank you letter to an influential person in my life",
    completed: true,
  },
  {
    id: uid(),
    todo: "Invite some friends over for a game night",
    completed: false,
  },
  {
    id: uid(),
    todo: "Have a football scrimmage with some friends",
    completed: false,
  },
  {
    id: uid(),
    todo: "Text a friend I haven't talked to in a long time",
    completed: false,
  },
  { id: uid(), todo: "Organize pantry", completed: true },
  { id: uid(), todo: "Buy a new house decoration", completed: false },
  {
    id: uid(),
    todo: "Plan a vacation I've always wanted to take",
    completed: false,
  },
  { id: uid(), todo: "Clean out car", completed: false },
  { id: uid(), todo: "Draw and color a Mandala", completed: true },
  {
    id: uid(),
    todo: "Create a cookbook with favorite recipes",
    completed: false,
  },
  { id: uid(), todo: "Bake a pie with some friends", completed: false },
  { id: uid(), todo: "Create a compost pile", completed: true },
  { id: uid(), todo: "Take a hike at a local park", completed: true },
  {
    id: uid(),
    todo: "Take a class at local community center that interests you",
    completed: false,
  },
  {
    id: uid(),
    todo: "Research a topic interested in",
    completed: false,
  },
  {
    id: uid(),
    todo: "Plan a trip to another country",
    completed: true,
  },
  { id: uid(), todo: "Improve touch typing", completed: false },
  { id: uid(), todo: "Learn Express.js", completed: false },
  { id: uid(), todo: "Learn calligraphy", completed: false },
  {
    id: uid(),
    todo: "Have a photo session with some friends",
    completed: false,
  },
  { id: uid(), todo: "Go to the gym", completed: false },
  { id: uid(), todo: "Make own LEGO creation", completed: false },
  { id: uid(), todo: "Take cat on a walk", completed: false },
];
