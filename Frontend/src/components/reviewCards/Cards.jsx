import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Cards() {
  let refBtn1 = useRef([]);

  function btn1(index) {
    refBtn1.current[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  function btn2(index) {
    refBtn1.current[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  function btn3(index) {
    refBtn1.current[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  let style = {
    border: "1px solid red",
  };

  let imgs = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      alt: "nature",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600",
      alt: "mountain",
    },
    {
      src: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=600",
      alt: "nature",
    },
  ];
  return (
    <div>
      <div className="flex gap-x-5 justify-center">
        <button style={{ border: style.border }} onClick={() => btn1(0)}>
          btn 1
        </button>
        <button style={{ border: style.border }} onClick={() => btn1(1)}>
          btn 2
        </button>
        <button style={{ border: style.border }} onClick={() => btn1(2)}>
          btn 3
        </button>
      </div>

      <div className=" flex gap-5 border overflow-x-scroll  w-[300px]">
        {imgs.map((imgAdd, index) => {
          return (
            <div
              className="shrink-0"
              key={index}
              ref={(el) => {
                refBtn1.current[index] = el;
              }}
            >
              <Link to={index == 0 ? "/" : null}>
                <img
                  className="border w-[400px] h-30"
                  src={imgAdd.src}
                  alt={imgAdd.alt}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
