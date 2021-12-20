import React, { useState } from "react";
const Mycontext = React.createContext();
export const Myprovider = (props) => {
  //item of works in home page
  const items = [
    {
      id: 1,
      img: "./imgs/works/filter1.png",
      title: "web design",
      filter: "web",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos voluptates illum tenetur atque beatae, modi distinctio nostrumEt, ex vero. Non temporibus harum voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc2:
        "Lorem atque beatae, modi distinctio nostrumEt, ex vero.voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc3:
        "Lorem  harum voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
    },
    {
      id: 2,
      img: "./imgs/works/filter2.png",
      title: "mobile design",
      filter: "mobile",
      desc1:
        "Lorem ipsucepturi eos voluptates illum tenetur atque beatae, modi distinctio nostrumEt, ex vero. Non temporibus harum voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc2:
        "Lorem atque beatae, modi distinctio nostrumEt, ex vero.voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc3:
        "Lorem  harum voluptatum aliquid ad unde commodiit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
    },
    {
      id: 3,
      img: "./imgs/works/filter3.png",
      title: "motion graphic design",
      filter: "vedio",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos voluptates illum tenetur atque beatae, modi distinctio nostrumEt, ex vero. Non temporibus harum voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc2:
        "Lorem atque beatae, modi distinctio nostrumEt, . Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc3:
        "Lorem  harum voluptatum aliquid ad unde porro error magni nihil dolores ut ullam?",
    },
    {
      id: 4,
      img: "./imgs/works/filter4.png",
      title: "visual identity design",
      filter: "identity",
      desc1:
        "Lorem enetur atque beatae, modi distinctio nostrumEt, ex vero. Non temporibus harum voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc2:
        "Lorem atque beatae, modi distinctio nostrumEt, ex vero.voluptadivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc3:
        "Lorem  harum voluptatum aliquid ad unde commodivoluptatem neque a. Alias, ullam?",
    },
    {
      id: 5,
      img: "./imgs/works/filter5.png",
      title: "web design",
      filter: "web",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos voluptates illum tenetur atque beatae, modi distinctio nostrumEt, ex vero. Non temporibus harum voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc2:
        "Lorem atque beatae,commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc3:
        " a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
    },
    {
      id: 6,
      img: "./imgs/works/filter6.png",
      title: "mobile design",
      filter: "mobile",
      desc1:
        "Lorem ipsum dolor sit amet consecur atque beatae, modi distinctio nostrumEt, ex vero. Non temporibus harum voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc2:
        "Lorem atque beatae, modi distinctio nostrumEt, ex vero.voluptatum aliquid ad unde commodivoluptatem neque a. Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
      desc3:
        "Lorem  harum voluptatum . Alias, quasi eligendi commodi impedit fugiatrerum eius saepe beatae, ipsam, eveniet porro error magni nihil dolores ut ullam?",
    },
  ];
  // item for courses in home page
  const Courses = [
    {
      id: 1,
      img: "./imgs/courses/corse1.png",
      title: "Web development course",
    },
    {
      id: 2,
      img: "./imgs/courses/corse2.png",
      title: "Smartphone application programming course",
    },
    {
      id: 3,
      img: "./imgs/courses/corse3.png",
      title: "Developed web games industry",
    },
  ];
  const [courses, setcourses] = useState(Courses);
  const [back, setback] = useState(true);
  //item notes in note page
  const Notes = [
    {
      id: 1,
      title: "course web development",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/1.png",
    },
    {
      id: 2,
      title: "course mobile development",
      text: "this text can replace with any replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/2.png",
    },
    {
      id: 3,
      title: "course graphic design",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/3.png",
    },
    {
      id: 4,
      title: "course emotion design",
      text: "this text can replace with any n replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/4.png",
    },
    {
      id: 5,
      title: "course english language",
      text: "this text can r replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/5.png",
    },
    {
      id: 6,
      title: "course andoid development",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/6.png",
    },

    {
      id: 8,
      title: "course graphic design",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/3.png",
    },

    {
      id: 12,
      title: "course web development",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/1.png",
    },
    {
      id: 10,
      title: "course english language",
      text: "this text can r replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/5.png",
    },
    {
      id: 11,
      title: "course andoid development",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/6.png",
    },
    {
      id: 7,
      title: "course mobile development",
      text: "this text can replace with any replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/2.png",
    },
    {
      id: 13,
      title: "course andoid development",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/6.png",
    },

    {
      id: 14,
      title: "course graphic design",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/3.png",
    },
    {
      id: 18,
      title: "course graphic design",
      text: "this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/5.png",
    },
    {
      id: 17,
      title: "course emotion design",
      text: "this text can replace with any n replace with any anther text this text can replace with any anther text",
      img: "./imgs/notes/1.png",
    },
  ];
  const [notes, setnotes] = useState(Notes);
  const content = {
    items,
    back,
    setback,
    courses,
    notes,
  };
  return (
    <Mycontext.Provider value={content}>{props.children}</Mycontext.Provider>
  );
};

export default Mycontext;
