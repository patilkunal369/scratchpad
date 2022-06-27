import { v4 as uuid } from "uuid";
import { addBoard } from "./reducers/boards";
import { selectBoard } from "./reducers/selectedBoard";
import { addTask } from "./reducers/task";
import { addList } from "./reducers/taskList";

export const seedStore = (store) => {
  // store.dispatch(addBoard({ name: "Project A", color: "turquoise" }));
  // store.dispatch(addBoard({ name: "Project B", color: "purple" }));
  // store.dispatch(addBoard({ name: "Project C", color: "yellow" }));
  // store.dispatch(addBoard({ name: "Project D", color: "lightRed" }));

  // // store.dispatch(selectBoard({ name: "Project A" }));

  // const taskList = [
  //   {
  //     id: "9b-41a7-9bd3-273f899e23e36-2b19aa49e",
  //     boardId: "e80ece77-78e7-4d83-b600-9ccf6ce675ce",
  //     name: "To Do",
  //     color: "rgb(255, 117, 117)",
  //   },
  //   {
  //     id: "8eb1834a-8092-43a3-842d-805817527bed",
  //     boardId: "e80ece77-78e7-4d83-b600-9ccf6ce675ce",
  //     name: "In Progress",
  //     color: "rgb(248, 184, 109)",
  //   },
  //   {
  //     id: "a50fd858-c907-4e83-b12b-f0b92eddd407",
  //     boardId: "e80ece77-78e7-4d83-b600-9ccf6ce675ce",
  //     name: "Review",
  //     color: "rgb(1, 195, 248)",
  //   },
  //   {
  //     id: "5f9d4262-ab6d-42cd-a257-87d4baf14cb4",
  //     boardId: "e80ece77-78e7-4d83-b600-9ccf6ce675ce",
  //     name: "Done",
  //     color: "rgb(86, 179, 157)",
  //   },
  // ];
  const tasks = [
    {
      id: "2be0782d-9205-4190-924f-ccde93b3cdf5",
      listId: "9b-41a7-9bd3-273f899e23e36-2b19aa49e",
      subject: "0 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 0,
    },
    {
      id: "83fe40d8-9fed-4414-bdd7-aeab6ff11def",
      listId: "9b-41a7-9bd3-273f899e23e36-2b19aa49e",
      subject: "1 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 1,
    },
    {
      id: "64d0baab-f5da-450b-99d7-8f937fe1ea41",
      listId: "9b-41a7-9bd3-273f899e23e36-2b19aa49e",
      subject: "2 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 2,
    },
    {
      id: "3e64347d-dfc0-40a4-9ec9-23ee1d92476a",
      listId: "9b-41a7-9bd3-273f899e23e36-2b19aa49e",
      subject: "3 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 3,
    },
    {
      id: "6adfb241-634d-4dd5-b1af-1be6a0ec31a4",
      listId: "9b-41a7-9bd3-273f899e23e36-2b19aa49e",
      subject: "4 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 4,
    },
    {
      id: "e09fcc02-02b2-4690-9b03-3e4e5abd5578",
      listId: "9b-41a7-9bd3-273f899e23e36-2b19aa49e",
      subject: "5 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 5,
    },
    {
      id: "3f5bb461-4d1c-4018-a13b-715fe0028f9e",
      listId: "8eb1834a-8092-43a3-842d-805817527bed",
      subject: "6 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 0,
    },
    {
      id: "db2fb305-b6a7-4538-9b40-dc60e3f0a068",
      listId: "8eb1834a-8092-43a3-842d-805817527bed",
      subject: "7 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 1,
    },
    {
      id: "ccb10b69-f5c7-4e9a-ba88-d361b8477506",
      listId: "5f9d4262-ab6d-42cd-a257-87d4baf14cb4",
      subject: "8 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 0,
    },
    {
      id: "b76f99b6-9c49-4a63-8a53-3acf22c8e5ed",
      listId: "5f9d4262-ab6d-42cd-a257-87d4baf14cb4",
      subject: "9 Lorem ipsum dolor sit ametdaqwdawd.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maxime ut nostrum voluptatibus, exercitationem molestias eos obcaecati voluptatem necessitatibus in.",
      tag: "Testing",
      timeLeft: "2W",
      listIndex: 1,
    },
  ];

  // taskList.map((taskList) => store.dispatch(addList(taskList)));
  tasks.map((task) => store.dispatch(addTask(task)));
};
