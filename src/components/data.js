import { findFlagUrlByNationality } from "country-flags-svg";
import vaibhav from "../assets/images/vaibhav.jpeg";
import dp from "../assets/images/dp.jpg";
import revanth from "../assets/images/revanth.jpg";
import hana from "../assets/images/hana.jpeg";

const flagUrl = findFlagUrlByNationality("Indian");
export const Data = [
  {
    pic: vaibhav,
    flag: flagUrl,
    Name: "Vaibhav Agarwal",
    title: "Full Stack Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  {
    pic: dp,
    flag: flagUrl,
    Name: "Devaprasad NM",
    title: "Btech Student",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  {
    pic: revanth,
    flag: flagUrl,
    Name: "Revanth",
    title: "Btech Student",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elittt.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    pic: hana,
    flag: flagUrl,
    Name: "Hana Noorudheen",
    title: "Btech Student",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    pic: "https://picsum.photos/200/300",
    flag: flagUrl,
    Name: "Vaibhav Agarwal",
    title: "Full Stack Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    pic: "https://picsum.photos/200/300",
    flag: flagUrl,
    Name: "Vaibhav Agarwal",
    title: "Full Stack Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    pic: "https://picsum.photos/200/300",
    flag: flagUrl,
    Name: "Vaibhav Agarwal",
    title: "Full Stack Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
