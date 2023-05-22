import React, { useState } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const SidebarWrapper = styled.div`
  width: 250px;
  height: 50vh;

  margin-left: 10px;

  font-size: 1rem;
  letter-spacing: 3px;

  color: #ffffff;

  text-decoration: none;

  font-family: "Playfair Display SC", serif;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  display: flex;
  justify-content: space-between;
`;

const SidebarHeader = styled.div`
  margin-top: 45px;
  font-size: 2.8rem;
  text-align: center;

  margin-bottom: 2rem;

  color: #ffffff;

  font-weight: 500;
  line-height: 49px;
  padding-bottom: 20px;
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const SidebarItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  text-transform: uppercase;
  align-text: center;
  font-size: 22px;
  line-height: 32px;
  text-transform: uppercase;

  span:hover {
    color: #ff0000;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0s;
  }
`;

const SidebarToggle = styled.div`
display: flex
  position: absolute;
  top: -80px;
  right: -20px;
  width: 30px;
  height: 20px;
  cursor: pointer;
  :hover {
    color: #ff0000;
    background-color: #ff0000;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0s;
  }

`;

const SidebarIcon = styled.div`
  border: 1px;
  border-style: solid;
  border-radius: 5px;

  width: 100%;
  height: 5px;
  background-color: whitesmoke;
  margin-bottom: 5px;
  c &:last-child {
    margin-bottom: 0;
  }
`;

const DivL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

 

  a:visited {
    color: #ff0000;
    text-decoration: none;
    list-style: none;
  }

  a:hover {
    color: #ffffff;
  }
`;

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <SidebarToggle onClick={handleSidebarToggle}>
        <SidebarIcon />
        <SidebarIcon />
        <SidebarIcon />
      </SidebarToggle>
      {showSidebar && (
        <SidebarWrapper>
          <SidebarHeader>
            {" "}
            <span>Isaac Eugenio</span>{" "}
          </SidebarHeader>
          <SidebarContent>
            <a class="nav-link" href="./#hero">
              <SidebarItem>
                {" "}
                <span> G a l e r i a</span>
              </SidebarItem>
            </a>

            <a class="nav-link" href="./#sobre">
              <SidebarItem>
                {" "}
                <span>S o b r e</span>{" "}
              </SidebarItem>
            </a>

            <a class="nav-link" href="./#contato">
              <SidebarItem>
                {" "}
                <span>C o n t a t o</span>{" "}
              </SidebarItem>
            </a>
          </SidebarContent>
          <DivL>
            <ul>
              <a href="https://www.instagram.com/principedacohab_">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>

              <a href="https://www.behance.net/isaaceugenio" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  fill="currentColor"
                  class="bi bi-behance"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
                </svg>
              </a>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  fill="currentColor"
                  class="bi bi-envelope-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </a>
            </ul>
          </DivL>
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
