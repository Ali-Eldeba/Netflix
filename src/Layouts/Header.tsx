import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="h-[57px] w-full fixed">
        <div className="container flex justify-between items-center h-full">
          <svg
            width="167"
            height="49"
            viewBox="0 0 167 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M158.067 21.4209L166.999 45C164.366 44.6246 161.735 44.155 159.054 43.7332L154.022 30.703L148.851 42.6563C146.313 42.2345 143.82 42.0925 141.282 41.7649L150.356 21.1398L142.128 0H149.745L154.352 11.8113L159.289 0H166.999L158.067 21.4209ZM136.11 0H129.199V40.875C131.456 41.0156 133.806 41.1084 136.11 41.3895V0ZM123.227 40.4054C116.928 39.9836 110.627 39.6096 104.187 39.4676V0H111.238V32.8119C115.282 32.9061 119.325 33.2337 123.227 33.4207V40.4054ZM96.6639 15.9842V23.0153H87.0269V38.9994H80.0677V0H99.8143V7.03112H87.0269V15.9842H96.6639ZM68.2195 7.03112V39.3748C65.8688 39.3748 63.4715 39.3748 61.1673 39.4676V7.03112H53.8796V0H75.5538V7.03112H68.2195ZM46.2633 23.3893C43.1609 23.3893 39.4931 23.3893 36.8603 23.5313V33.9844C40.9977 33.7018 45.1351 33.3743 49.3191 33.2337V39.9836L29.8081 41.5315V0H49.3191V7.03112H36.8603V16.4987C39.5875 16.4987 43.7715 16.3581 46.2633 16.3581V23.3893ZM7.19325 19.4526V44.0144C4.65495 44.297 2.39728 44.6246 0 45V0H6.72366L15.8911 25.5474V0H22.9434V42.0925C20.4516 42.5157 17.9133 42.6563 15.2326 43.0303L7.19325 19.4526Z"
              fill="#E50914"
            />
          </svg>
          <button className="bg-primary w-[84px] h-[34px] text-white">Sign In</button>
        </div>
      </header>
      <header className="h-[57px]"></header>
    </>
  );
};

export default React.memo(Header);
