import React, { useEffect, useState } from "react";
import Form from "./MainForm";

const Mainkanbanboard = () => {
  const [show, setShow] = useState(false);
  const columns = "w-[500px] h-[400px] bg-red-400 rounded-xl overflow-auto";
  const [columnValue, setColumnValue] = useState("");
  const [cards, setCards] = useState([]);

  function addCard(data) {
    setCards((prev) => [
      ...prev,
      { id: Date.now(), stage: data.stage, ...data },
    ]);
  }

  const openForm = (columnValue) => {
    setShow(true);
    setColumnValue(columnValue);
  };
  return (
    <div>
      <div className="flex gap-3 p-5 ">
        <div
          className={columns}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            const cardId = event.dataTransfer.getData("cardId");

            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id.toString() === cardId
                  ? { ...card, stage: "Applied" }
                  : card
              )
            );
          }}
        >
          <div className="flex justify-around mt-3">
            <h1 className="text-white font-semibold">Applied</h1>

            <button
              className="border-2 w-[50px] rounded-xl bg-green-300 hover:bg-green-600 cursor-pointer"
              onClick={() => openForm("Applied")}
            >
              Add
            </button>
          </div>
          <div
            draggable={true}
            onDragStart={(event) => {
              event.dataTransfer.setData("cardId", card.id.toString());
            }}
          >
            {cards
              .filter((c) => c.stage === "Applied")
              .map((card) => (
                <div
                  key={card.id}
                  draggable={true}
                  onDragStart={(event) => {
                    event.dataTransfer.setData("cardId", card.id.toString());
                  }}
                  className="flex flex-col justify-center gap-2 bg-white rounded-2xl  w-[210px] p-3 m-3"
                >
                  {
                    <>
                      <p>CompanyName: {card["companyName"]}</p>
                      <p>RoleTitle: {card["roleTitle"]}</p>
                      <p>
                        Link:
                        <a
                          href={card["applicationLink"]}
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          link
                        </a>
                      </p>
                      <p>Status:{card["stage"]}</p>
                    </>
                  }
                </div>
              ))}
          </div>
        </div>

        <div
          className={columns}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            const cardId = event.dataTransfer.getData("cardId");

            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id.toString() === cardId
                  ? { ...card, stage: "Interview" }
                  : card
              )
            );
          }}
        >
          <div className="flex justify-around mt-3">
            <h1 className="text-white font-semibold">Interview</h1>
            <button
              className="border-2 w-[50px] rounded-xl bg-green-300 hover:bg-green-600 cursor-pointer"
              onClick={() => openForm("Interview")}
            >
              Add
            </button>
          </div>
          <div>
            {cards

              .filter((c) => c.stage === "Interview")
              .map((card) => (
                <div
                  key={card.id}
                  draggable={true}
                  onDragStart={(event) => {
                    event.dataTransfer.setData("cardId", card.id.toString());
                  }}
                  className="flex flex-col justify-center gap-2 bg-white rounded-2xl  w-[210px] p-3 m-3"
                >
                  {
                    <>
                      <p>CompanyName: {card["companyName"]}</p>
                      <p>RoleTitle: {card["roleTitle"]}</p>
                      <p>
                        Link:
                        <a
                          href={card["applicationLink"]}
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          link
                        </a>
                      </p>
                      <p>Status:{card["stage"]}</p>
                    </>
                  }
                </div>
              ))}
          </div>
        </div>
        <div
          className={columns}
          onDragOver={(event) => {
            event.preventDefault();
          }}
          onDrop={(event) => {
            const cardId = event.dataTransfer.getData("cardId");
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id.toString() === cardId
                  ? { ...card, stage: "Offered" }
                  : card
              )
            );
          }}
        >
          <div className="flex justify-around mt-3">
            <h1 className="text-white font-semibold">Offered</h1>
            <button
              className="border-2 w-[50px] rounded-xl bg-green-300 hover:bg-green-600 cursor-pointer"
              onClick={() => openForm("Offered")}
            >
              Add
            </button>
          </div>
          <div>
            {cards
              .filter((c) => c.stage === "Offered")
              .map((card) => (
                <div
                  key={card.id}
                  draggable={true}
                  onDragStart={(event) => {
                    event.dataTransfer.setData("cardId", card.id.toString());
                  }}
                  className="flex flex-col justify-center gap-2 bg-white rounded-2xl  w-[210px] p-3 m-3"
                >
                  {
                    <>
                      <p>companyName:{card["companyName"]}</p>
                      <p>RoleTitle:{card["roleTitle"]}</p>
                      <p>
                        Link:
                        <a
                          href={card["applicationLink"]}
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          Link
                        </a>
                      </p>
                      <p>Status:{card["stage"]}</p>
                    </>
                  }
                </div>
              ))}
          </div>
        </div>
        <div className={columns}
        onDragOver={(event)=>{
          event.preventDefault();
        }} 
        onDrop={(event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("cardId");
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id.toString() === cardId ? { ...card, stage: "Rejected" } : card
      )
    );
  }}
        >
          <div className="flex justify-around mt-3">
            <h1 className="text-white font-semibold">Reject</h1>
            <button
              className="border-2 w-[50px] rounded-xl bg-green-300 hover:bg-green-600 cursor-pointer"
              onClick={() => openForm("Rejected")}
            >
              Add
            </button>
          </div>
          <div>
            {cards
              .filter((c) => c.stage === "Rejected")
              .map((card) => (
                <div
                  key={card.id}
                  draggable={true}
                 onDragStart={(event) => {
        event.dataTransfer.setData("cardId", card.id.toString());
      }}
                  className="flex flex-col justify-center gap-2 bg-white rounded-2xl  w-[210px] p-3 m-3"
                >
                  {
                    <>
                      <p>companyName:{card["companyName"]}</p>
                      <p>RoleTitle:{card["roleTitle"]}</p>
                      <p>
                        Link:
                        <a
                          href={card["applicationLink"]}
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          link
                        </a>
                      </p>
                      <p>Status:{card["stage"]}</p>
                    </>
                  }
                </div>
              ))}
          </div>
        </div>
      </div>
      {show && (
        <Form
          onClose={(data) => {
            if (
              data &&
              Object.values(data).some((v) => v && String(v).trim() !== "")
            ) {
              addCard(data);
            }
            setShow(false);
            setColumnValue("");
          }}
          defaultStage={columnValue}
        />
      )}
    </div>
  );
};

export default Mainkanbanboard;
