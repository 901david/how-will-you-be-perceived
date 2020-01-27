import React, { useEffect, createRef, RefObject } from "react";
import { useMappedState } from "react-use-mapped-state";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PATH_MAP, iconMap } from "../Shared/constants";
import {
  IconBarWrapper,
  NavItemWrapper,
  IconTextWrapper
} from "./SideBar-Components";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

declare const window: Window;
interface SideBarProps {
  triggerSideBar: () => void;
  isSideBarOpened: boolean;
}
const SideBar: React.FC<SideBarProps> = ({
  triggerSideBar,
  isSideBarOpened
}) => {
  const location = useLocation();
  const history = useHistory();
  const [{ currentlySelectedIcon }, setIconState] = useMappedState({
    currentlySelectedIcon: location.pathname || 0
  });

  const sideBarRef: RefObject<HTMLDivElement> = createRef();

  const handleNavigation = (path: string | null, url: string | null): void => {
    if (path !== null) {
      history.push(path);
      return;
    }
    if (url !== null) {
      //TODO: make sure this actually works seems like it will not
      const openWindow = window.open(url, "_blank");
      openWindow && openWindow.focus();
      return;
    }
  };

  useEffect(() => {
    const areWeStillOnSamePage =
      currentlySelectedIcon === PATH_MAP[location.pathname];
    if (!areWeStillOnSamePage) {
      setIconState("currentlySelectedIcon", location.pathname);
    }
  }, [location.pathname, currentlySelectedIcon, setIconState]);

  useEffect(() => {
    if (!isSideBarOpened && sideBarRef.current !== null) {
      sideBarRef.current.classList.remove("desktop-nav-open");
      sideBarRef.current.classList.add("desktop-nav-close");
    } else if (isSideBarOpened && sideBarRef.current !== null) {
      sideBarRef.current.classList.remove("desktop-nav-close");
      sideBarRef.current.classList.add("desktop-nav-open");
    }
  }, [isSideBarOpened]);

  return (
    <>
      <IconBarWrapper ref={sideBarRef}>
        <FontAwesomeIcon icon={faChevronRight} onClick={triggerSideBar} />
        {iconMap.map(({ id, icon, text, path, url }, index) => {
          return (
            <NavItemWrapper
              selected={PATH_MAP[currentlySelectedIcon] === index}
              key={id}
              onClick={
                PATH_MAP[currentlySelectedIcon] !== index
                  ? () => handleNavigation(path, url)
                  : () => ({})
              }
            >
              <FontAwesomeIcon icon={icon} />
              <FontAwesomeIcon icon={icon} />
              <IconTextWrapper
                selected={PATH_MAP[currentlySelectedIcon] === index}
                id="icon-text"
                text={text}
              />
            </NavItemWrapper>
          );
        })}
      </IconBarWrapper>
    </>
  );
};

export default SideBar;
