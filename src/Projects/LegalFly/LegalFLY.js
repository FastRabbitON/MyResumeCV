
import './LegalFLYStyle.css';
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Items from "./LegalFLYData"




function LegalFLY() {

  document.title = "Portfolio | LegalFLY"

  const [choosedItem, setChoosedItem] = useState("")

  const options = Items.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });





  return (


    <div className="AppContainer">

      <div className="LegalBilbordContainer"></div>


      <nav className='NavContainer'>

        <div className="NavLogoCont">
          LegalFLY
        </div>

        <div className="NavBtnCont">

          <button className="slideOne" type="button" >Wyszukiwarka przdmiotów</button>
          <button id='future' className="slideOne" type="button" >Lista przedmiotów</button>

        </div>

      </nav>


      <section className="InputContainer">
        <Autocomplete
          className='AutocompleteInput'
          onChange={(event, value) => setChoosedItem(value)}
          disablePortal
          label={false}
          blurOnSelect={true}
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField placeholder="Co chcesz przewieć?" {...params} variant="outlined" />}
        />
      </section>


      {/* <div className="ItemTitleContainer">
        {choosedItem && choosedItem.title !== null ? choosedItem.title : "Wybierz przedmiot z listy a wszystko Ci powiemy!"}
      </div> */}

      <section className="ItemInfoContainer">

        <div className="ItemImageContainer">
          <div className="ItemImage">
            {choosedItem && choosedItem.imageCode !== null ? <img src={require(`./LegalFLYAssets/${choosedItem.imageCode}.png`)} /> : <img src={require(`./LegalFLYAssets/Empty.png`)} />}
          </div>
        </div>

        <div className="ItemDescription">

          <div className="DescriptionWindow"
            style={{
              backgroundColor: choosedItem && choosedItem.smallDes === "" && choosedItem.bigDes === "" ? "rgb(98, 255, 98, 0.5)" :
                choosedItem && choosedItem.warning === true ? "rgb(255, 121, 121, 0.5)" : "rgb(255, 206, 115, 0.5)",
              border: choosedItem && choosedItem.smallDes === "" && choosedItem.bigDes === "" ? "2px solid green" :
                choosedItem && choosedItem.warning === true ? "2px solid red" : "2px solid orange"
            }}
          >


            <div className="DescriptionContent">

              <div className="DescriptionContent">
                {choosedItem && (choosedItem.smallDes !== null || choosedItem.bigDes !== null) ? (
                  <>
                    {choosedItem.smallDes === choosedItem.bigDes && choosedItem.smallDes !== "" && choosedItem.bigDes !== "" ? (
                      <p>👜🧳{choosedItem.smallDes}</p>
                    ) : (
                      <>
                        {choosedItem.smallDes !== null && choosedItem.smallDes !== "" && <p>👜 {choosedItem.smallDes}</p>}
                        {choosedItem.bigDes !== null && choosedItem.bigDes !== "" && <p>🧳 {choosedItem.bigDes}</p>}
                        {(choosedItem.smallDes === "" && choosedItem.bigDes === "") && (
                          <>
                            <p>Wszystko już wiesz i masz pod kontrolą 💪</p>
                            <p>Udanej podróży! ✈️</p>
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {choosedItem && choosedItem.imageCode !== "Empty" && choosedItem.imageCode !== null ? (
                      <>
                        <p>Wszystko już wiesz i masz pod kontrolą 💪</p>
                        <p>Udanej podróży! ✈️</p>
                      </>
                    ) : (
                      <p>Powiedz nam, co chesz przewieźć 😏</p>
                    )}
                  </>
                )}
              </div>


            </div>
          </div>


        </div>
      </section>

    </div >
  );


}

export default LegalFLY;
