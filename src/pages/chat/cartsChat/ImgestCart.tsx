import React, { useState } from 'react';

interface ImagesCartProps {
  title: string;
  icon: string;
  data: { name: string; url: string }[];
}

const ImagesCart: React.FC<ImagesCartProps> = ({ title, icon, data }) => {
  const [isShow, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!isShow);
  };

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <div
        onClick={handleToggle}
        className="flex-items cursor-pointer rounded-corners_1rem justify-content-between py-3
         bg-white px-3"
      >
        <h3 className="fs-3">
          {title} ({data.length})
        </h3>
        <img src={icon} alt="arrow down" />
      </div>
      <div className={`restof_Content bg-white d-grid gap-2 ${isShow ? 'active' : ''}`}>
        {data.map((item, index) => (
          <div key={index} className="flex-items gap-3">
            <button onClick={() => handleDownload(item.url)}
             className="downlode__button">
              <i className="bi bi-download fs-3"></i>
            </button>
            <p className="fw-medium text-black fs-px_14">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesCart;
