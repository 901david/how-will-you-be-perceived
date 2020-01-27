import * as _ from "lodash";
import {
  faAddressCard,
  faUserGraduate,
  faFileVideo,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const PATH_MAP: { [key: string]: number } = {
  "/about": 0,
  "/review": 1
};

export const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const iconMap = [
  {
    icon: faAddressCard,
    text: "About",
    path: "/about",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faVideo,
    text: "Review Movie",
    path: "/review",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faGithub,
    text: "Github",
    path: null,
    id: _.uniqueId("navBar-"),
    url: "https://github.com/901david/how-will-you-be-perceived"
  }
];
