import { useState } from "react";

const Language = ({ setLang, data }) => {

  const [active,setActive] = useState('English')

  const setEnglish = () => {
    setLang({
      title: data.title,
      desc: data.desc,
    });
  };

  const setSinhala = () => {
    setLang({
      title: data.titleSn,
      desc: data.descSn,
    });
  };

  const setTamil = () => {
    setLang({
      title: data.titleTm,
      desc: data.descTm,
    });
  };
  console.log(data);
  const buttonStyles = "cursor-pointer px-2 py-1 rounded-full ";
  return (
    <div className="flex p-[2px]  self-start buttonCover rounded-lg my-2">
      <div className="flex gap-3 p-2 buttonInner items-center rounded-lg">
        <p className="font-semibold">Language :</p>
        <div className={`flex ${buttonStyles} ${(active == 'English')?'card':''} `} 
        onClick={() => {
          setEnglish()
          setActive('English')
        }}>
          English
        </div>
        <div
          className={`${
            data.translateSn == true ? "flex" : "hidden"
          } ${buttonStyles} ${(active == 'Sinhala')?'card':''}`}
          onClick={() => {
            setSinhala()
            setActive('Sinhala')
          }}
        >
          සිංහල
        </div>
        <div
          className={`${
            data.translateTm == true ? "flex" : "hidden"
          } ${buttonStyles} ${(active == 'Tamil')?'card':''}`}

          onClick={() => {
            setTamil()
            setActive('Tamil')
          }}
        >
          தமிழ்
        </div>
      </div>
    </div>
  );
};

export default Language;
